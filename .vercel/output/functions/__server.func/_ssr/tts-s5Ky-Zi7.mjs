import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tts-s5Ky-Zi7.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var ALLOWED = /* @__PURE__ */ new Set([
	"en",
	"hi",
	"bn",
	"te",
	"mr",
	"ta",
	"ur",
	"gu",
	"kn",
	"or",
	"ml",
	"pa"
]);
var cache = /* @__PURE__ */ new Map();
function chunks(text) {
	const clean = text.replace(/\s+/g, " ").trim();
	if (clean.length <= 180) return [clean];
	const parts = [];
	let rest = clean;
	while (rest.length > 180) {
		let cut = rest.lastIndexOf(" ", 180);
		if (cut < 40) cut = 180;
		parts.push(rest.slice(0, cut));
		rest = rest.slice(cut).trim();
	}
	if (rest) parts.push(rest);
	return parts.slice(0, 4);
}
function toBase64(bytes) {
	let raw = "";
	const size = 32768;
	for (let index = 0; index < bytes.length; index += size) raw += String.fromCharCode(...bytes.subarray(index, index + size));
	return btoa(raw);
}
async function fetchClip(text, tl) {
	const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=gtx&tl=${tl}&q=${encodeURIComponent(text)}`;
	const response = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
	if (!response.ok) throw new Error(String(response.status));
	const bytes = new Uint8Array(await response.arrayBuffer());
	if (bytes.length < 200) throw new Error("empty");
	return bytes;
}
var speakLine_createServerFn_handler = createServerRpc({
	id: "fcd12c41d8dae02e6a0ed145c027649bf6f2d02eb4f925c7400958adeccb76ff",
	name: "speakLine",
	filename: "src/lib/mitra/tts.ts"
}, (opts) => speakLine.__executeServer(opts));
var speakLine = createServerFn({ method: "POST" }).validator((input) => ({
	text: String(input?.text ?? "").slice(0, 420),
	lang: String(input?.lang ?? "en").slice(0, 8)
})).handler(speakLine_createServerFn_handler, async ({ data }) => {
	const text = data.text.trim();
	const lang = ALLOWED.has(data.lang) ? data.lang : "en";
	if (!text) return { ok: false };
	const key = `${lang}:${text}`;
	const hit = cache.get(key);
	if (hit) return {
		ok: true,
		audio: hit
	};
	try {
		const parts = [];
		for (const part of chunks(text)) parts.push(await fetchClip(part, lang));
		const total = parts.reduce((sum, part) => sum + part.length, 0);
		const audio = new Uint8Array(total);
		let offset = 0;
		for (const part of parts) {
			audio.set(part, offset);
			offset += part.length;
		}
		const encoded = toBase64(audio);
		if (cache.size > 40) {
			const first = cache.keys().next().value;
			if (first) cache.delete(first);
		}
		cache.set(key, encoded);
		return {
			ok: true,
			audio: encoded
		};
	} catch {
		return { ok: false };
	}
});
//#endregion
export { speakLine_createServerFn_handler };
