import { createServerFn } from "@tanstack/react-start";

const ALLOWED = new Set(["en", "hi", "bn", "te", "mr", "ta", "ur", "gu", "kn", "or", "ml", "pa"]);
const cache = new Map<string, string>();

function chunks(text: string): string[] {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= 180) return [clean];
  const parts: string[] = [];
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

function toBase64(bytes: Uint8Array): string {
  let raw = "";
  const size = 0x8000;
  for (let index = 0; index < bytes.length; index += size) {
    raw += String.fromCharCode(...bytes.subarray(index, index + size));
  }
  return btoa(raw);
}

async function fetchClip(text: string, tl: string): Promise<Uint8Array> {
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=gtx&tl=${tl}&q=${encodeURIComponent(text)}`;
  const response = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
  });
  if (!response.ok) throw new Error(String(response.status));
  const bytes = new Uint8Array(await response.arrayBuffer());
  if (bytes.length < 200) throw new Error("empty");
  return bytes;
}

export const speakLine = createServerFn({ method: "POST" })
  .validator((input: { text?: string; lang?: string }) => ({
    text: String(input?.text ?? "").slice(0, 420),
    lang: String(input?.lang ?? "en").slice(0, 8),
  }))
  .handler(async ({ data }) => {
    const text = data.text.trim();
    const lang = ALLOWED.has(data.lang) ? data.lang : "en";
    if (!text) return { ok: false as const };
    const key = `${lang}:${text}`;
    const hit = cache.get(key);
    if (hit) return { ok: true as const, audio: hit };
    try {
      const parts: Uint8Array[] = [];
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
      return { ok: true as const, audio: encoded };
    } catch {
      return { ok: false as const };
    }
  });
