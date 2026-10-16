import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Phone, c as MessageCircle, i as Pill, l as ArrowLeft, o as PhoneOff, r as Plus, s as Mic, t as Volume2 } from "../_libs/lucide-react.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CqqCkcoH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var blankText = {
	en: "",
	hi: "",
	ta: ""
};
function tx(text, lang) {
	return text[lang] || text.en;
}
function fillLang(text) {
	const value = text.trim();
	return {
		en: value,
		hi: value,
		ta: value
	};
}
function editLocalized(prev, lang, next) {
	if (next.trim() === prev[lang]) return prev;
	return fillLang(next);
}
function localeOf(lang) {
	if (lang === "hi") return "hi-IN";
	if (lang === "ta") return "ta-IN";
	return "en-IN";
}
function todayKey(date = /* @__PURE__ */ new Date()) {
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	return `${date.getFullYear()}-${month}-${day}`;
}
function formatTime(date, lang) {
	return date.toLocaleTimeString(localeOf(lang), {
		hour: "numeric",
		minute: "2-digit"
	});
}
function formatClockLabel(hhmm, lang) {
	const [h, m] = hhmm.split(":").map(Number);
	const date = /* @__PURE__ */ new Date();
	date.setHours(h || 0, m || 0, 0, 0);
	return formatTime(date, lang);
}
function formatDate(date, lang) {
	return date.toLocaleDateString(localeOf(lang), {
		weekday: "long",
		day: "numeric",
		month: "long"
	});
}
function joinList(items, andWord) {
	if (items.length === 0) return "";
	if (items.length === 1) return items[0] ?? "";
	if (items.length === 2) return `${items[0]} ${andWord} ${items[1]}`;
	return `${items.slice(0, -1).join(", ")} ${andWord} ${items[items.length - 1]}`;
}
var relationCall = {
	son: {
		en: "son",
		hi: "बेटे",
		ta: "மகன்"
	},
	daughter: {
		en: "daughter",
		hi: "बेटी",
		ta: "மகள்"
	},
	grandson: {
		en: "grandson",
		hi: "पोते",
		ta: "பேரன்"
	}
};
function relationForCall(contact, lang) {
	if (contact.relation === "other") return tx(contact.relationLabel, lang) || contact.name;
	return relationCall[contact.relation][lang];
}
var defaultMedicines = [
	{
		id: "bp",
		time: "08:00",
		name: {
			en: "Blood pressure tablet",
			hi: "रक्तचाप की गोली",
			ta: "இரத்த அழுத்த மாத்திரை"
		},
		dose: {
			en: "One tablet with water",
			hi: "पानी के साथ एक गोली",
			ta: "தண்ணீருடன் ஒரு மாத்திரை"
		}
	},
	{
		id: "sugar",
		time: "14:00",
		name: {
			en: "Sugar tablet",
			hi: "शुगर की गोली",
			ta: "சர்க்கரை மாத்திரை"
		},
		dose: {
			en: "One tablet after food",
			hi: "खाने के बाद एक गोली",
			ta: "சாப்பிட்ட பிறகு ஒரு மாத்திரை"
		}
	},
	{
		id: "calcium",
		time: "20:00",
		name: {
			en: "Calcium tablet",
			hi: "कैल्शियम की गोली",
			ta: "கால்சியம் மாத்திரை"
		},
		dose: {
			en: "One tablet",
			hi: "एक गोली",
			ta: "ஒரு மாத்திரை"
		}
	}
];
var defaultContacts = [
	{
		id: "arun",
		name: "Arun",
		relation: "son",
		relationLabel: blankText,
		phone: "98000 00121"
	},
	{
		id: "meera",
		name: "Meera",
		relation: "daughter",
		relationLabel: blankText,
		phone: "98000 00456"
	},
	{
		id: "rohan",
		name: "Rohan",
		relation: "grandson",
		relationLabel: blankText,
		phone: "98000 00789"
	}
];
var practicePhrases = [
	{
		id: "med",
		text: {
			en: "Remind me about my tablets",
			hi: "मुझे मेरी दवा याद दिलाओ",
			ta: "என் மாத்திரையை நினைவூட்டு"
		}
	},
	{
		id: "daughter",
		text: {
			en: "Call my daughter",
			hi: "मेरी बेटी को कॉल करो",
			ta: "என் மகளை அழை"
		}
	},
	{
		id: "time",
		text: {
			en: "What is the time?",
			hi: "समय क्या है?",
			ta: "இப்போது நேரம் என்ன?"
		}
	},
	{
		id: "date",
		text: {
			en: "What is today's date?",
			hi: "आज की तारीख क्या है?",
			ta: "இன்றைய தேதி என்ன?"
		}
	},
	{
		id: "next",
		text: {
			en: "When is my next tablet?",
			hi: "अगली गोली कब है?",
			ta: "அடுத்த மாத்திரை எப்போது?"
		}
	},
	{
		id: "ramesh",
		tricky: true,
		text: {
			en: "Call Ramesh",
			hi: "रमेश को कॉल करो",
			ta: "ரமேஷை அழை"
		}
	},
	{
		id: "two",
		tricky: true,
		text: {
			en: "Should I take two tablets?",
			hi: "क्या मैं दो गोली ले लूँ?",
			ta: "இரண்டு மாத்திரை எடுக்கலாமா?"
		}
	},
	{
		id: "unwell",
		text: {
			en: "I do not feel well",
			hi: "मेरी तबीयत ठीक नहीं है",
			ta: "என் உடல்நிலை சரியில்லை"
		}
	},
	{
		id: "weather",
		text: {
			en: "How is the weather?",
			hi: "मौसम कैसा है?",
			ta: "வானிலை எப்படி உள்ளது?"
		}
	},
	{
		id: "who",
		text: {
			en: "Who are you?",
			hi: "तुम कौन हो?",
			ta: "நீ யார்?"
		}
	},
	{
		id: "noise",
		tricky: true,
		noise: true,
		text: {
			en: "Too much noise around me",
			hi: "आस-पास बहुत शोर है",
			ta: "சுற்றி நிறைய இரைச்சல்"
		}
	}
];
function medStatus(med, now, takenIds, snoozeUntil) {
	if (takenIds.includes(med.id)) return "taken";
	if (snoozeUntil && snoozeUntil > now.getTime()) return "later";
	const [h, m] = med.time.split(":").map(Number);
	const dueAt = (h || 0) * 60 + (m || 0);
	return now.getHours() * 60 + now.getMinutes() >= dueAt ? "due" : "waiting";
}
function focusMedicine(medicines, now, takenIds, snooze) {
	const ranked = medicines.map((med) => ({
		med,
		status: medStatus(med, now, takenIds, snooze[med.id])
	}));
	return ranked.find((item) => item.status === "due")?.med ?? ranked.find((item) => item.status === "waiting")?.med ?? ranked.find((item) => item.status === "later")?.med ?? null;
}
var active = null;
function getRecognition() {
	if (typeof window === "undefined") return null;
	const host = window;
	return host.SpeechRecognition ?? host.webkitSpeechRecognition ?? null;
}
function pickVoice(lang) {
	if (typeof window === "undefined" || !window.speechSynthesis) return null;
	const voices = window.speechSynthesis.getVoices();
	const wanted = localeOf(lang).toLowerCase();
	const prefix = wanted.slice(0, 2);
	return voices.find((voice) => voice.lang.toLowerCase().replace("_", "-") === wanted) ?? voices.find((voice) => voice.lang.toLowerCase().replace("_", "-").startsWith(prefix)) ?? null;
}
function speak(text, lang, rate) {
	if (typeof window === "undefined" || !window.speechSynthesis || !text.trim()) return;
	window.speechSynthesis.cancel();
	const utterance = new SpeechSynthesisUtterance(text);
	utterance.lang = localeOf(lang);
	utterance.rate = rate;
	utterance.pitch = 1;
	const voice = pickVoice(lang);
	if (voice) utterance.voice = voice;
	window.speechSynthesis.speak(utterance);
}
function stopSpeak() {
	if (typeof window === "undefined" || !window.speechSynthesis) return;
	window.speechSynthesis.cancel();
}
function warmVoices() {
	if (typeof window === "undefined" || !window.speechSynthesis) return;
	window.speechSynthesis.getVoices();
	window.speechSynthesis.onvoiceschanged = () => {
		window.speechSynthesis.getVoices();
	};
}
function startListening(lang, handlers) {
	stopListening();
	const Ctor = getRecognition();
	if (!Ctor) {
		handlers.onFail("nomic");
		return false;
	}
	const session = {
		settled: false,
		rec: null
	};
	active = session;
	const rec = new Ctor();
	session.rec = rec;
	rec.lang = localeOf(lang);
	rec.continuous = false;
	rec.interimResults = false;
	rec.onresult = (event) => {
		if (active !== session || session.settled) return;
		session.settled = true;
		const text = event.results[0]?.[0]?.transcript?.trim() ?? "";
		try {
			rec.stop();
		} catch {}
		if (!text) handlers.onFail("noise");
		else handlers.onText(text);
	};
	rec.onerror = (event) => {
		if (active !== session || session.settled) return;
		if (event.error === "aborted") return;
		session.settled = true;
		handlers.onFail(event.error === "not-allowed" || event.error === "service-not-allowed" ? "nomic" : "noise");
	};
	rec.onend = () => {
		if (active !== session || session.settled) return;
		session.settled = true;
		handlers.onFail("noise");
	};
	try {
		rec.start();
	} catch {
		session.settled = true;
		handlers.onFail("nomic");
		return false;
	}
	window.setTimeout(() => {
		if (active !== session || session.settled) return;
		try {
			rec.stop();
		} catch {}
	}, 9e3);
	return true;
}
function stopListening() {
	const session = active;
	active = null;
	if (!session) return;
	session.settled = true;
	try {
		session.rec?.abort();
	} catch {}
}
var STOP = /* @__PURE__ */ new Set([
	"call",
	"phone",
	"dial",
	"my",
	"me",
	"the",
	"a",
	"to",
	"please",
	"now",
	"को",
	"से",
	"करो",
	"करें",
	"करना",
	"का",
	"की",
	"के",
	"मेरी",
	"मेरे",
	"मुझे",
	"அழை",
	"என்",
	"என்னை",
	"பண்ணு",
	"க்கு"
]);
function has(text, phrases) {
	const value = text.toLowerCase();
	return phrases.some((phrase) => {
		const needle = phrase.toLowerCase();
		if (/^[a-z0-9]+$/i.test(phrase)) return new RegExp(`\\b${needle}\\b`, "i").test(value);
		return value.includes(needle);
	});
}
function isYes(text) {
	const value = text.toLowerCase();
	if (/\b(yes|yeah|yep|ok|okay|haan|han)\b/i.test(value)) return true;
	return [
		"हाँ",
		"हां",
		"जी हाँ",
		"ஆம்",
		"ஆமா"
	].some((word) => value.includes(word));
}
function isNo(text) {
	const value = text.toLowerCase();
	if (/\b(no|nope|nah|nahi)\b/i.test(value)) return true;
	return [
		"नहीं",
		"मत",
		"வேண்டாம்",
		"இல்லை"
	].some((word) => value.includes(word));
}
function hasName(text, name) {
	const needle = name.trim().toLowerCase();
	if (!needle) return false;
	if (/^[a-z0-9]+$/i.test(needle)) return new RegExp(`\\b${needle}\\b`, "i").test(text);
	return text.toLowerCase().includes(needle);
}
function findContact(text, contacts) {
	const value = text.toLowerCase();
	const byName = contacts.find((contact) => hasName(value, contact.name));
	if (byName) return byName;
	for (const rule of [
		{
			relation: "grandson",
			words: [
				"grandson",
				"pota",
				"पोता",
				"पोते",
				"பேரன்"
			]
		},
		{
			relation: "daughter",
			words: [
				"daughter",
				"beti",
				"बेटी",
				"மகள்"
			]
		},
		{
			relation: "son",
			words: [
				"son",
				"beta",
				"बेटा",
				"बेटे",
				"மகன்"
			]
		}
	]) {
		if (!has(value, rule.words)) continue;
		const match = contacts.find((contact) => contact.relation === rule.relation);
		if (match) return match;
	}
	return contacts.find((contact) => {
		if (contact.relation !== "other") return false;
		return [
			contact.relationLabel.en,
			contact.relationLabel.hi,
			contact.relationLabel.ta
		].some((label) => label.trim().length > 1 && value.includes(label.toLowerCase()));
	});
}
function leftoverName(raw) {
	if (/ramesh|रमेश|ரமேஷ/i.test(raw)) return "Ramesh";
	const parts = raw.replace(/[?.!।,]/g, " ").split(/\s+/).map((part) => part.trim()).filter((part) => part && !STOP.has(part.toLowerCase()));
	const generic = /^(family|परिवार|குடும்பம்|someone|किसी)$/i;
	return parts.find((part) => !generic.test(part)) ?? "";
}
function isGenericFamily(text) {
	return has(text, [
		"family",
		"परिवार",
		"குடும்ப"
	]);
}
function parseUtterance(raw, contacts, mode) {
	const text = raw.trim().toLowerCase();
	if (!text) return { type: "unknown" };
	if (has(text, [
		"two tablet",
		"2 tablet",
		"double dose",
		"side effect",
		"should i take",
		"medical advice",
		"stop my medicine",
		"दो गोली",
		"दो गोल",
		"इलाज",
		"खुराक बदल",
		"இரண்டு மாத்திரை",
		"மருத்துவ ஆலோசனை"
	])) return { type: "advice" };
	if (has(text, [
		"not feel well",
		"do not feel well",
		"feel sick",
		"unwell",
		"chest pain",
		"तबीयत",
		"ठीक नहीं",
		"सीने में",
		"साँस नहीं",
		"உடல்நிலை",
		"சரியில்லை",
		"நெஞ்சு",
		"மூச்சு"
	])) return { type: "unwell" };
	if (mode === "confirm") {
		if (isNo(text)) return { type: "no" };
		if (isYes(text)) return { type: "yes" };
	}
	const wantsCall = has(text, [
		"call",
		"phone",
		"dial",
		"कॉल",
		"फोन",
		"बुलाओ",
		"அழை",
		"போன்"
	]);
	const contact = findContact(text, contacts);
	if (contact) return {
		type: "call",
		contactId: contact.id
	};
	if (wantsCall) {
		if (isGenericFamily(text) || !leftoverName(raw)) return { type: "call_list" };
		return {
			type: "unknown_name",
			name: leftoverName(raw)
		};
	}
	if (mode === "medicine") {
		if (has(text, [
			"later",
			"remind me later",
			"बाद में",
			"थोड़ी देर",
			"பிறகு"
		])) return { type: "later" };
		if (has(text, [
			"i took",
			"took it",
			"taken",
			"ले ली",
			"खा ली",
			"எடுத்துவிட்டேன்"
		]) || isYes(text)) return { type: "took" };
	}
	if (has(text, [
		"weather",
		"मौसम",
		"வானிலை"
	])) return { type: "weather" };
	if (has(text, [
		"who are you",
		"who",
		"कौन हो",
		"कौन",
		"யார்",
		"நீ யார்"
	])) return { type: "who" };
	if (has(text, [
		"something kind",
		"kind word",
		"अच्छी बात",
		"நல்ல வார்த்தை"
	])) return { type: "kind" };
	if (has(text, [
		"next tablet",
		"next medicine",
		"when is my next",
		"अगली गोली",
		"अगली दवा",
		"அடுத்த மாத்திரை",
		"அடுத்த"
	])) return { type: "next" };
	if (has(text, [
		"date",
		"today's date",
		"तारीख",
		"दिनांक",
		"தேதி"
	])) return { type: "date" };
	if (has(text, [
		"tablet",
		"medicine",
		"pill",
		"dawai",
		"dawa",
		"goli",
		"दवा",
		"गोली",
		"दवाई",
		"மாத்திரை",
		"மருந்து",
		"நினைவூட்டு"
	])) return { type: "medicine" };
	if (has(text, [
		"time",
		"samay",
		"समय",
		"बजे",
		"நேரம்"
	])) return { type: "time" };
	if (has(text, [
		"i took",
		"took it",
		"taken",
		"ले ली",
		"खा ली",
		"எடுத்துவிட்டேன்"
	])) return { type: "took" };
	if (has(text, [
		"later",
		"remind me later",
		"बाद में",
		"பிறகு"
	])) return { type: "later" };
	if (isYes(text)) return { type: "yes" };
	if (isNo(text)) return { type: "no" };
	return { type: "unknown" };
}
function intentKey(intent) {
	switch (intent.type) {
		case "medicine": return "intentMedicine";
		case "call": return "intentCall";
		case "call_list": return "intentList";
		case "unknown_name": return "intentUnknownName";
		case "yes": return "intentCall";
		case "no": return "intentUnknown";
		case "time": return "intentTime";
		case "date": return "intentDate";
		case "weather": return "intentWeather";
		case "who": return "intentWho";
		case "kind": return "intentKind";
		case "next": return "intentNext";
		case "advice": return "intentAdvice";
		case "unwell": return "intentUnwell";
		case "took": return "intentTook";
		case "later": return "intentLater";
		default: return "intentUnknown";
	}
}
var pendingLang = null;
function noteLangChoice(lang) {
	if (!useMitra.persist.hasHydrated()) pendingLang = lang;
}
function takePendingLang() {
	const lang = pendingLang;
	pendingLang = null;
	return lang;
}
var SNOOZE_MS = 6e5;
var cleared = {
	heard: "",
	intent: null,
	banner: null,
	ask: null,
	safety: null,
	fallback: null,
	unknownName: ""
};
function memoryStorage() {
	return {
		getItem: () => null,
		setItem: () => {},
		removeItem: () => {}
	};
}
var useMitra = create()(persist((set, get) => ({
	welcomed: false,
	lang: "en",
	seniorName: "Kamala",
	rate: .85,
	medicines: defaultMedicines,
	contacts: defaultContacts,
	taken: {},
	snooze: {},
	view: "home",
	heard: "",
	intent: null,
	contactId: null,
	ask: null,
	safety: null,
	fallback: null,
	unknownName: "",
	banner: null,
	chooseLang: (lang) => set({
		lang,
		welcomed: true,
		view: "home",
		...cleared
	}),
	setLang: (lang) => set({ lang }),
	setRate: (rate) => set({ rate }),
	setSeniorName: (name) => set({ seniorName: name.trim() || get().seniorName }),
	setView: (view) => set({ view }),
	submit: (raw) => {
		const state = get();
		const now = /* @__PURE__ */ new Date();
		const mode = state.view === "confirm" ? "confirm" : state.view === "medicine" ? "medicine" : void 0;
		const intent = parseUtterance(raw, state.contacts, mode);
		const takenToday = state.taken[todayKey(now)] ?? [];
		const focused = focusMedicine(state.medicines, now, takenToday, state.snooze);
		const heard = raw.trim();
		if (state.view === "confirm" && state.contactId) {
			if (intent.type === "yes") {
				set({
					heard,
					intent,
					view: "calling",
					banner: null
				});
				return;
			}
			if (intent.type === "no") {
				set({
					heard,
					intent,
					view: "call",
					contactId: null,
					banner: null
				});
				return;
			}
		}
		if (intent.type === "took") {
			if (focused) get().markTaken(focused.id, heard, intent);
			else set({
				heard,
				intent,
				view: "medicine",
				banner: null
			});
			return;
		}
		if (intent.type === "later") {
			if (focused) get().remindLater(focused.id, heard, intent);
			else set({
				heard,
				intent,
				view: "medicine",
				banner: null
			});
			return;
		}
		switch (intent.type) {
			case "medicine":
				set({
					heard,
					intent,
					view: "medicine",
					banner: null,
					safety: null
				});
				return;
			case "call":
				set({
					heard,
					intent,
					view: "confirm",
					contactId: intent.contactId,
					banner: null
				});
				return;
			case "call_list":
				set({
					heard,
					intent,
					view: "call",
					contactId: null,
					banner: null
				});
				return;
			case "unknown_name":
				set({
					heard,
					intent,
					view: "fallback",
					fallback: "name",
					unknownName: intent.name,
					banner: null
				});
				return;
			case "time":
			case "date":
			case "weather":
			case "who":
			case "kind":
			case "next":
				set({
					heard,
					intent,
					view: "ask",
					ask: intent.type,
					banner: null
				});
				return;
			case "advice":
				set({
					heard,
					intent,
					view: "safety",
					safety: "advice",
					banner: null
				});
				return;
			case "unwell":
				set({
					heard,
					intent,
					view: "safety",
					safety: "unwell",
					banner: null
				});
				return;
			case "yes":
				set({
					heard,
					intent,
					view: "fallback",
					fallback: "unknown",
					banner: null
				});
				return;
			case "no":
				set({
					heard,
					intent,
					view: "home",
					banner: null
				});
				return;
			default: set({
				heard,
				intent,
				view: "fallback",
				fallback: "unknown",
				banner: null
			});
		}
	},
	fail: (reason) => {
		stopListening();
		set({
			view: "fallback",
			fallback: reason,
			heard: "",
			intent: null,
			banner: null
		});
	},
	showNoise: (heard) => set({
		view: "fallback",
		fallback: "noise",
		heard,
		intent: { type: "unknown" },
		banner: null
	}),
	goHome: () => {
		stopListening();
		stopSpeak();
		set({
			view: "home",
			contactId: null,
			...cleared
		});
	},
	openMedicine: () => {
		stopSpeak();
		set({
			view: "medicine",
			contactId: null,
			...cleared
		});
	},
	openCall: () => {
		stopSpeak();
		set({
			view: "call",
			contactId: null,
			...cleared
		});
	},
	openAsk: () => {
		stopSpeak();
		set({
			view: "ask",
			...cleared
		});
	},
	openFamily: () => {
		stopSpeak();
		set({
			view: "family",
			contactId: null,
			...cleared
		});
	},
	openConfirm: (contactId) => {
		stopSpeak();
		set({
			view: "confirm",
			contactId,
			...cleared
		});
	},
	startCall: () => set({
		view: "calling",
		banner: null
	}),
	backToCall: () => {
		stopSpeak();
		set({
			view: "call",
			contactId: null,
			heard: "",
			intent: null,
			banner: null
		});
	},
	markTaken: (id, heard, intent) => {
		const key = todayKey();
		set((state) => {
			const prev = state.taken[key] ?? [];
			return {
				taken: {
					...state.taken,
					[key]: prev.includes(id) ? prev : [...prev, id]
				},
				snooze: {
					...state.snooze,
					[id]: 0
				},
				view: "medicine",
				banner: "marked",
				heard: heard ?? "",
				intent: intent === void 0 ? state.intent : intent
			};
		});
	},
	remindLater: (id, heard, intent) => {
		const state = get();
		const now = /* @__PURE__ */ new Date();
		const med = state.medicines.find((item) => item.id === id);
		if ((med ? medStatus(med, now, state.taken[todayKey(now)] ?? [], state.snooze[id]) : "waiting") === "due") {
			set({
				snooze: {
					...state.snooze,
					[id]: now.getTime() + SNOOZE_MS
				},
				view: "medicine",
				banner: "snoozed",
				heard: heard ?? "",
				intent: intent === void 0 ? state.intent : intent
			});
			return;
		}
		set({
			view: "medicine",
			banner: "scheduled",
			heard: heard ?? "",
			intent: intent === void 0 ? state.intent : intent
		});
	},
	clearBanner: () => set({
		banner: null,
		heard: "",
		intent: null
	}),
	openSafety: (safety) => {
		stopSpeak();
		set({
			...cleared,
			view: "safety",
			safety
		});
	},
	callFamily: () => {
		const contacts = get().contacts;
		const person = contacts.find((contact) => contact.relation === "son") ?? contacts[0];
		if (!person) return;
		stopSpeak();
		set({
			...cleared,
			view: "confirm",
			contactId: person.id
		});
	},
	saveMedicine: (id, patch) => set((state) => ({ medicines: state.medicines.map((med) => med.id === id ? {
		...med,
		...patch
	} : med) })),
	addMedicine: (patch) => set((state) => ({ medicines: [...state.medicines, {
		id: crypto.randomUUID(),
		...patch
	}].sort((a, b) => a.time.localeCompare(b.time)) })),
	removeMedicine: (id) => set((state) => ({ medicines: state.medicines.filter((med) => med.id !== id) })),
	saveContact: (id, patch) => set((state) => ({ contacts: state.contacts.map((contact) => contact.id === id ? {
		id,
		...patch
	} : contact) })),
	addContact: (patch) => set((state) => ({ contacts: [...state.contacts, {
		id: crypto.randomUUID(),
		...patch
	}] })),
	removeContact: (id) => {
		if (get().contacts.length <= 1) return false;
		set((state) => ({ contacts: state.contacts.filter((contact) => contact.id !== id) }));
		return true;
	},
	restore: () => set({
		seniorName: "Kamala",
		medicines: defaultMedicines,
		contacts: defaultContacts,
		taken: {},
		snooze: {},
		rate: .85,
		view: "family",
		contactId: null,
		...cleared
	})
}), {
	name: "mitra-v1",
	skipHydration: true,
	storage: createJSONStorage(() => typeof window === "undefined" ? memoryStorage() : localStorage),
	partialize: (state) => ({
		welcomed: state.welcomed,
		lang: state.lang,
		seniorName: state.seniorName,
		rate: state.rate,
		medicines: state.medicines,
		contacts: state.contacts,
		taken: state.taken,
		snooze: state.snooze
	})
}));
var copy = {
	en: {
		hello: "Namaste,",
		brand: "ARIA",
		tagline: "Your friendly voice assistant",
		homeLine: "I am ARIA, your friendly voice assistant. Tap the big circle and speak slowly. Or press a button below.",
		welcomeSpeak: "Namaste {name}. I am ARIA, your friendly voice assistant. How can I help you?",
		tapSpeak: "Tap and speak",
		listening: "I am listening",
		speakSlowly: "Speak slowly. I am here.",
		cancel: "Stop",
		heard: "I heard",
		notUnderstood: "I did not understand. Please say medicine, call, or ask the time.",
		noisy: "I could not hear you clearly. It may be noisy. Try again somewhere quiet, or tap a button.",
		noMic: "This phone cannot use the microphone right now. You can still tap a button. That works the same.",
		tryAgain: "Try again",
		orTap: "Or tap one of these",
		medicine: "My tablets",
		medicineSub: "Today's reminders",
		call: "Call family",
		callSub: "Son, daughter, grandson",
		ask: "Ask something",
		askSub: "Time, date, simple answers",
		family: "Family setup",
		backHome: "Back home",
		back: "Back",
		hear: "Hear this",
		dueBanner: "Your {med} is due",
		medIntro: "These tablets were saved by your family from the doctor's note. ARIA never changes the dose, and never gives medical advice.",
		dueLine: "{name}, it is time for your {med}. {dose}. Did you take it?",
		nextLine: "{name}, your next tablet is {med} at {time}. Nothing is due right now.",
		allDoneLine: "{name}, today's tablets are all marked as taken. Well done.",
		noMeds: "Your family has not saved any tablets yet.",
		yesTook: "Yes, I took it",
		remindLater: "Remind me later",
		feelUnwell: "I do not feel well",
		marked: "Well done, {name}. I have marked that tablet as taken.",
		snoozed: "All right. I will remind you again in a little while.",
		stillScheduled: "I will remind you at {time}.",
		goOn: "All right",
		safetyAdvice: "I cannot give medical advice. Please take only what the doctor prescribed, the way your family saved it here. If you are unsure, I can call your family.",
		safetyUnwell: "I am sorry you feel unwell. I cannot give medical advice. If you need help, I can call your family now.",
		callThem: "Call my family",
		seeTablets: "See my tablets",
		callIntro: "Who should I call? I will ask you to say yes before I call.",
		sample: "Sample number. Not a real phone.",
		confirmLine: "Shall I call {name}, your {relation}? I will call only if you say yes.",
		yesCall: "Yes, call now",
		noBack: "No, go back",
		calling: "Calling {name}",
		practice: "Practice call. No real phone is dialed.",
		connected: "{name} is on the line.",
		hangUp: "Hang up",
		ended: "The call has ended. No real phone was used.",
		unknownLine: "I do not have {name} saved. Your family saved {list}. Who should I call?",
		someone: "that name",
		askIntro: "Ask me the time, the date, or something simple. I will answer slowly.",
		qTime: "What is the time?",
		qDate: "What is today's date?",
		qNext: "When is my next tablet?",
		qWho: "Who are you?",
		qKind: "Say something kind",
		qWeather: "How is the weather?",
		aTime: "The time is {time}.",
		aDate: "Today is {date}.",
		aWho: "I am ARIA, your friendly voice assistant. Your family set me up. I remind you about tablets, I call your family, and I answer simple questions.",
		aKind: "You are not alone at home. Your family kept me here so you can ask for help in your own words.",
		aWeather: "I cannot see outside. Please look through the window, or ask someone at home.",
		aNext: "Your next tablet is {med} at {time}.",
		aNone: "All of today's tablets are marked as taken.",
		matched: "I understood this as: {what}",
		intentMedicine: "a medicine reminder",
		intentCall: "a phone call",
		intentTime: "the time",
		intentDate: "the date",
		intentWeather: "the weather",
		intentWho: "who I am",
		intentKind: "a kind word",
		intentNext: "your next tablet",
		intentAdvice: "something I must not advise",
		intentUnwell: "feeling unwell",
		intentUnknownName: "a name I do not know",
		intentUnknown: "unclear words",
		intentTook: "tablet taken",
		intentLater: "remind later",
		intentList: "your family list",
		familyTitle: "For the family",
		familyLead: "Set this up once. Copy tablets from the doctor's note. ARIA will only remind. ARIA will never give medical advice.",
		personaTitle: "Who this practice is for",
		personaBody: "Kamala is 74. She uses the language you set here. Small phone text is hard on her eyes, and stiff fingers miss tiny buttons. She needs tablet reminders, a careful call to family, and simple answers. She does not need medical advice from an app.",
		elderName: "Elder's name",
		language: "Language they speak",
		speech: "Speaking speed",
		slow: "Slow",
		slower: "Very slow",
		tablets: "Tablets from the doctor's note",
		addTablet: "Add a tablet",
		contactsTitle: "Family to call",
		addContact: "Add a person",
		medName: "Tablet name",
		dose: "Dose, in simple words",
		timeLabel: "Time",
		save: "Save",
		remove: "Remove",
		personName: "Name",
		relation: "Who they are",
		phone: "Sample phone number",
		son: "son",
		daughter: "daughter",
		grandson: "grandson",
		other: "other",
		otherRelation: "Write who they are",
		restore: "Restore the practice family",
		restoreAsk: "Put the practice family back? The changes you made will be cleared.",
		practiceTitle: "Try these sentences",
		practiceLead: "Tap a sentence to see what ARIA does. Three of them are tricky on purpose.",
		typeNote: "Write in the language your elder reads.",
		removeAsk: "Remove this?",
		keep: "Keep it",
		keepOne: "Keep at least one person to call.",
		statusDue: "Due now",
		statusTaken: "Taken",
		statusLater: "Later",
		statusWaiting: "Later today",
		tricky: "Tricky",
		noiseCase: "Too much noise around me",
		andWord: "and",
		chooseEn: "Choose your language",
		chooseHi: "अपनी भाषा चुनें",
		chooseTa: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
		safetyHome: "I only remind you. I do not give medical advice.",
		ready: "Ready",
		nameMissing: "Please type a name.",
		doseMissing: "Please type the dose.",
		savedOk: "Saved.",
		clockNow: "Time now",
		rowLine: "{time}. {med}. {dose}.",
		langEn: "English",
		langHi: "हिन्दी",
		langTa: "தமிழ்"
	},
	hi: {
		hello: "नमस्ते,",
		brand: "ARIA",
		tagline: "आपकी अपनी आवाज़ सहायक",
		homeLine: "मैं आरिया हूँ, आपकी अपनी आवाज़ सहायक। बड़े हरे घेरे को दबाकर धीरे बोलिए। या नीचे कोई बटन दबाइए।",
		welcomeSpeak: "नमस्ते {name} जी। मैं आरिया हूँ, आपकी अपनी आवाज़ सहायक। मैं आपकी क्या मदद करूँ?",
		tapSpeak: "बोलने के लिए दबाएँ",
		listening: "मैं सुन रहा हूँ",
		speakSlowly: "धीरे बोलिए। मैं यहीं हूँ।",
		cancel: "रुकें",
		heard: "मैंने सुना",
		notUnderstood: "मैं समझ नहीं पाया। दवा, कॉल, या समय बोलिए।",
		noisy: "आवाज़ साफ नहीं मिली। शायद आस-पास शोर है। शांत जगह से फिर बोलिए, या बटन दबाइए।",
		noMic: "इस फ़ोन पर माइक्रोफ़ोन अभी काम नहीं कर रहा। बटन दबाना भी वही काम करता है।",
		tryAgain: "फिर से बोलें",
		orTap: "या इनमें से एक दबाएँ",
		medicine: "मेरी दवा",
		medicineSub: "आज की गोलियाँ",
		call: "परिवार को कॉल",
		callSub: "बेटा, बेटी, पोता",
		ask: "कुछ पूछें",
		askSub: "समय, तारीख, आसान बात",
		family: "परिवार की सेटिंग",
		backHome: "घर वापस",
		back: "पीछे",
		hear: "यह सुनें",
		dueBanner: "{med} बाकी है",
		medIntro: "ये गोलियाँ आपके परिवार ने डॉक्टर की पर्ची से रखी हैं। आरिया खुराक नहीं बदलता, और इलाज की सलाह नहीं देता।",
		dueLine: "{name} जी, आपकी {med} का समय हो गया है। {dose}। क्या आपने ले ली?",
		nextLine: "{name} जी, अगली गोली {time} पर {med} है। अभी कोई गोली बाकी नहीं है।",
		allDoneLine: "{name} जी, आज की सारी गोलियाँ ले ली गई हैं। बहुत अच्छा।",
		noMeds: "आपके परिवार ने अभी कोई गोली नहीं रखी।",
		yesTook: "हाँ, ले ली",
		remindLater: "बाद में याद दिलाएँ",
		feelUnwell: "तबीयत ठीक नहीं",
		marked: "बहुत अच्छा, {name} जी। मैंने लिख लिया कि गोली ले ली।",
		snoozed: "ठीक है। मैं थोड़ी देर बाद फिर याद दिलाऊँगा।",
		stillScheduled: "मैं {time} पर याद दिलाऊँगा।",
		goOn: "ठीक है",
		safetyAdvice: "आरिया इलाज की सलाह नहीं देता। डॉक्टर ने जितनी गोली लिखी है, परिवार ने वही यहाँ रखा है। उलझन हो तो मैं परिवार को कॉल कर सकता हूँ।",
		safetyUnwell: "तबीयत ठीक न होने का मुझे दुख है। आरिया इलाज की सलाह नहीं देता। मदद चाहिए तो मैं अभी परिवार को कॉल कर सकता हूँ।",
		callThem: "परिवार को कॉल करें",
		seeTablets: "मेरी गोलियाँ देखें",
		callIntro: "किसे कॉल करूँ? कॉल से पहले मैं आपसे हाँ पूछूँगा।",
		sample: "नमूना नंबर। असली फ़ोन नहीं।",
		confirmLine: "क्या मैं {name}, आपके {relation} को कॉल करूँ? आप हाँ कहेंगे, तभी कॉल होगी।",
		yesCall: "हाँ, अभी कॉल करें",
		noBack: "नहीं, वापस जाएँ",
		calling: "{name} को कॉल हो रही है",
		practice: "यह अभ्यास कॉल है। असली फ़ोन नहीं लगता।",
		connected: "{name} लाइन पर हैं।",
		hangUp: "कॉल काटें",
		ended: "कॉल खत्म हुई। असली फ़ोन इस्तेमाल नहीं हुआ।",
		unknownLine: "{name} सेव नहीं है। परिवार ने {list} सेव किए हैं। किसे कॉल करूँ?",
		someone: "यह नाम",
		askIntro: "मुझसे समय, तारीख, या कोई आसान बात पूछिए। मैं धीरे जवाब दूँगा।",
		qTime: "समय क्या है?",
		qDate: "आज की तारीख क्या है?",
		qNext: "अगली गोली कब है?",
		qWho: "तुम कौन हो?",
		qKind: "कोई अच्छी बात बताओ",
		qWeather: "मौसम कैसा है?",
		aTime: "अभी समय {time} है।",
		aDate: "आज {date} है।",
		aWho: "मैं आरिया हूँ, आपकी अपनी आवाज़ सहायक। आपका परिवार मुझे लगाता है। मैं दवा याद दिलाता हूँ, परिवार को कॉल करता हूँ, और आसान सवालों का जवाब देता हूँ।",
		aKind: "आप घर पर अकेले नहीं हैं। आप अपनी बात अपने शब्दों में कह सकें, इसलिए परिवार ने मुझे रखा है।",
		aWeather: "मैं बाहर नहीं देख सकता। खिड़की से देखिए, या घर के किसी व्यक्ति से पूछिए।",
		aNext: "अगली गोली {time} पर {med} है।",
		aNone: "आज की सारी गोलियाँ ले ली गई हैं।",
		matched: "मैंने इसे ऐसा समझा: {what}",
		intentMedicine: "दवा की याद",
		intentCall: "फ़ोन कॉल",
		intentTime: "समय",
		intentDate: "तारीख",
		intentWeather: "मौसम",
		intentWho: "मैं कौन हूँ",
		intentKind: "एक अच्छी बात",
		intentNext: "अगली गोली",
		intentAdvice: "सलाह जो मैं नहीं दे सकता",
		intentUnwell: "तबीयत ठीक नहीं",
		intentUnknownName: "एक नाम जो मेरे पास नहीं है",
		intentUnknown: "अस्पष्ट बात",
		intentTook: "गोली ले ली",
		intentLater: "बाद में याद",
		intentList: "परिवार की सूची",
		familyTitle: "परिवार के लिए",
		familyLead: "यह सेटिंग एक बार करें। गोलियाँ डॉक्टर की पर्ची से लिखें। आरिया सिर्फ याद दिलाएगा। आरिया कभी इलाज की सलाह नहीं देगा।",
		personaTitle: "यह अभ्यास किसके लिए है",
		personaBody: "कमला 74 साल की हैं। वे वही भाषा बोलती हैं जो आप यहाँ चुनते हैं। फ़ोन का छोटा अक्षर आँखों पर भारी है, और अकड़ी उँगलियों से छोटा बटन नहीं दबता। उन्हें दवा की याद, परिवार को सावधानी से कॉल, और आसान जवाब चाहिए। ऐप से इलाज की सलाह नहीं चाहिए।",
		elderName: "बुज़ुर्ग का नाम",
		language: "उनकी भाषा",
		speech: "बोलने की गति",
		slow: "धीमी",
		slower: "बहुत धीमी",
		tablets: "डॉक्टर की पर्ची की गोलियाँ",
		addTablet: "गोली जोड़ें",
		contactsTitle: "जिन्हें कॉल करना है",
		addContact: "व्यक्ति जोड़ें",
		medName: "गोली का नाम",
		dose: "खुराक, आसान शब्दों में",
		timeLabel: "समय",
		save: "सेव करें",
		remove: "हटाएँ",
		personName: "नाम",
		relation: "कौन हैं",
		phone: "नमूना फ़ोन नंबर",
		son: "बेटा",
		daughter: "बेटी",
		grandson: "पोता",
		other: "अन्य",
		otherRelation: "लिखें कौन हैं",
		restore: "अभ्यास परिवार वापस लाएँ",
		restoreAsk: "अभ्यास वाला परिवार फिर से रखें? आपकी बदली हुई सेटिंग मिट जाएगी।",
		practiceTitle: "ये वाक्य आज़माएँ",
		practiceLead: "वाक्य दबाएँ और देखें आरिया क्या करता है। तीन वाक्य जान-बूझकर मुश्किल हैं।",
		typeNote: "उसी भाषा में लिखें जो बुज़ुर्ग पढ़ते हैं।",
		removeAsk: "इसे हटाएँ?",
		keep: "रहने दें",
		keepOne: "कॉल के लिए कम से कम एक व्यक्ति रखें।",
		statusDue: "अभी बाकी",
		statusTaken: "ले ली",
		statusLater: "बाद में",
		statusWaiting: "आज बाद में",
		tricky: "मुश्किल",
		noiseCase: "आस-पास बहुत शोर है",
		andWord: "और",
		chooseEn: "Choose your language",
		chooseHi: "अपनी भाषा चुनें",
		chooseTa: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
		safetyHome: "मैं सिर्फ याद दिलाता हूँ। इलाज की सलाह नहीं देता।",
		ready: "तैयार",
		nameMissing: "कृपया नाम लिखें।",
		doseMissing: "कृपया खुराक लिखें।",
		savedOk: "सेव हो गया।",
		clockNow: "अभी समय",
		rowLine: "{time}। {med}। {dose}।",
		langEn: "English",
		langHi: "हिन्दी",
		langTa: "தமிழ்"
	},
	ta: {
		hello: "வணக்கம்,",
		brand: "ARIA",
		tagline: "உங்கள் அன்பான குரல் உதவியாளர்",
		homeLine: "நான் ஆரியா, உங்கள் அன்பான குரல் உதவியாளர். பச்சை வட்டத்தை அழுத்தி மெதுவாகப் பேசுங்கள். அல்லது கீழே உள்ள பொத்தானை அழுத்துங்கள்.",
		welcomeSpeak: "வணக்கம் {name}. நான் ஆரியா, உங்கள் அன்பான குரல் உதவியாளர். நான் எப்படி உதவட்டும்?",
		tapSpeak: "பேச அழுத்தவும்",
		listening: "நான் கேட்கிறேன்",
		speakSlowly: "மெதுவாகப் பேசுங்கள். நான் இங்கே இருக்கிறேன்.",
		cancel: "நிறுத்து",
		heard: "நான் கேட்டது",
		notUnderstood: "எனக்குப் புரியவில்லை. மாத்திரை, அழைப்பு, அல்லது நேரம் என்று சொல்லுங்கள்.",
		noisy: "குரல் தெளிவாக வரவில்லை. இரைச்சல் இருக்கலாம். அமைதியான இடத்தில் மீண்டும் சொல்லுங்கள், அல்லது பொத்தானை அழுத்துங்கள்.",
		noMic: "இந்தத் தொலைபேசியில் ஒலிவாங்கி இப்போது வேலை செய்யவில்லை. பொத்தானை அழுத்தினாலும் அதே உதவி கிடைக்கும்.",
		tryAgain: "மீண்டும் சொல்லுங்கள்",
		orTap: "அல்லது இவற்றில் ஒன்றை அழுத்தவும்",
		medicine: "என் மாத்திரை",
		medicineSub: "இன்றைய மாத்திரைகள்",
		call: "குடும்ப அழைப்பு",
		callSub: "மகன், மகள், பேரன்",
		ask: "கேளுங்கள்",
		askSub: "நேரம், தேதி, எளிய பதில்",
		family: "குடும்ப அமைப்பு",
		backHome: "வீட்டுக்குத் திரும்பு",
		back: "பின்னால்",
		hear: "இதைக் கேள்",
		dueBanner: "{med} காத்திருக்கிறது",
		medIntro: "இந்த மாத்திரைகளை உங்கள் குடும்பம் மருத்துவர் சீட்டிலிருந்து சேமித்தது. ஆரியா அளவை மாற்றாது. மருத்துவ ஆலோசனையும் தராது.",
		dueLine: "{name}, உங்கள் {med} நேரம் ஆகிவிட்டது. {dose}. எடுத்துவிட்டீர்களா?",
		nextLine: "{name}, அடுத்த மாத்திரை {time}க்கு {med}. இப்போது எதுவும் நிலுவையில் இல்லை.",
		allDoneLine: "{name}, இன்றைய மாத்திரைகள் எல்லாம் எடுத்துவிட்டதாக குறிக்கப்பட்டுள்ளது. நன்று.",
		noMeds: "உங்கள் குடும்பம் இன்னும் மாத்திரைகளைச் சேமிக்கவில்லை.",
		yesTook: "ஆம், எடுத்துவிட்டேன்",
		remindLater: "பிறகு நினைவூட்டு",
		feelUnwell: "உடல்நிலை சரியில்லை",
		marked: "நன்று, {name}. மாத்திரை எடுத்துவிட்டீர்கள் என்று குறித்துவிட்டேன்.",
		snoozed: "சரி. கொஞ்ச நேரம் கழித்து மீண்டும் நினைவூட்டுவேன்.",
		stillScheduled: "{time}க்கு நினைவூட்டுவேன்.",
		goOn: "சரி",
		safetyAdvice: "ஆரியா மருத்துவ ஆலோசனை தராது. மருத்துவர் எழுதிய மாத்திரையை மட்டும் குடும்பம் இங்கே சேமித்துள்ளது. சந்தேகம் இருந்தால் குடும்பத்தை அழைக்கலாம்.",
		safetyUnwell: "உடல்நிலை சரியில்லை என்பது வருத்தமாக உள்ளது. ஆரியா மருத்துவ ஆலோசனை தராது. உதவி வேண்டும் என்றால் இப்போதே குடும்பத்தை அழைக்கலாம்.",
		callThem: "குடும்பத்தை அழை",
		seeTablets: "என் மாத்திரைகளைப் பார்",
		callIntro: "யாரை அழைக்கட்டும்? அழைப்பதற்கு முன் ஆம் என்று கேட்பேன்.",
		sample: "மாதிரி எண். உண்மையான தொலைபேசி அல்ல.",
		confirmLine: "உங்கள் {relation} {name} அவர்களை அழைக்கட்டுமா? நீங்கள் ஆம் என்றால் மட்டுமே அழைப்பேன்.",
		yesCall: "ஆம், இப்போது அழை",
		noBack: "வேண்டாம், திரும்பு",
		calling: "{name} அழைக்கப்படுகிறார்",
		practice: "இது பயிற்சி அழைப்பு. உண்மையான தொலைபேசி இணைக்கப்படவில்லை.",
		connected: "{name} அழைப்பில் இருக்கிறார்.",
		hangUp: "துண்டி",
		ended: "அழைப்பு முடிந்தது. உண்மையான தொலைபேசி பயன்படுத்தப்படவில்லை.",
		unknownLine: "{name} சேமிக்கப்படவில்லை. குடும்பம் {list} என்று சேமித்துள்ளது. யாரை அழைக்கட்டும்?",
		someone: "அந்தப் பெயர்",
		askIntro: "நேரம், தேதி, அல்லது எளிய ஒன்றைக் கேளுங்கள். நான் மெதுவாகப் பதில் சொல்வேன்.",
		qTime: "இப்போது நேரம் என்ன?",
		qDate: "இன்றைய தேதி என்ன?",
		qNext: "அடுத்த மாத்திரை எப்போது?",
		qWho: "நீ யார்?",
		qKind: "ஒரு நல்ல வார்த்தை சொல்",
		qWeather: "வானிலை எப்படி உள்ளது?",
		aTime: "இப்போது நேரம் {time}.",
		aDate: "இன்று {date}.",
		aWho: "நான் ஆரியா, உங்கள் அன்பான குரல் உதவியாளர். உங்கள் குடும்பம் என்னை அமைத்தது. மாத்திரை நினைவூட்டுவேன், குடும்பத்தை அழைப்பேன், எளிய கேள்விகளுக்குப் பதில் சொல்வேன்.",
		aKind: "நீங்கள் வீட்டில் தனியாக இல்லை. உங்கள் சொந்த வார்த்தையில் உதவி கேட்க, குடும்பம் என்னை இங்கே வைத்துள்ளது.",
		aWeather: "என்னால் வெளியே பார்க்க முடியாது. ஜன்னல் வழியாகப் பாருங்கள், அல்லது வீட்டில் உள்ளவரிடம் கேளுங்கள்.",
		aNext: "அடுத்த மாத்திரை {time}க்கு {med}.",
		aNone: "இன்றைய மாத்திரைகள் எல்லாம் எடுத்துவிட்டதாக குறிக்கப்பட்டுள்ளது.",
		matched: "நான் இதை இப்படிப் புரிந்துகொண்டேன்: {what}",
		intentMedicine: "மாத்திரை நினைவூட்டல்",
		intentCall: "தொலைபேசி அழைப்பு",
		intentTime: "நேரம்",
		intentDate: "தேதி",
		intentWeather: "வானிலை",
		intentWho: "நான் யார்",
		intentKind: "ஒரு நல்ல வார்த்தை",
		intentNext: "அடுத்த மாத்திரை",
		intentAdvice: "நான் தரக்கூடாத ஆலோசனை",
		intentUnwell: "உடல்நிலை சரியில்லை",
		intentUnknownName: "எனக்குத் தெரியாத பெயர்",
		intentUnknown: "தெளிவற்ற சொற்கள்",
		intentTook: "மாத்திரை எடுத்தது",
		intentLater: "பிறகு நினைவூட்டல்",
		intentList: "குடும்பப் பட்டியல்",
		familyTitle: "குடும்பத்திற்காக",
		familyLead: "இதை ஒரு முறை அமையுங்கள். மாத்திரைகளை மருத்துவர் சீட்டிலிருந்து எழுதுங்கள். ஆரியா நினைவூட்ட மட்டுமே செய்யும். மருத்துவ ஆலோசனை ஒருபோதும் தராது.",
		personaTitle: "இந்தப் பயிற்சி யாருக்காக",
		personaBody: "கமலாவுக்கு 74 வயது. நீங்கள் இங்கே அமைக்கும் மொழியைப் பேசுவார். சிறிய எழுத்து கண்களுக்குக் கடினம். விறைத்த விரல்களால் சிறிய பொத்தானை அழுத்த முடியாது. மாத்திரை நினைவூட்டல், உறுதிசெய்த குடும்ப அழைப்பு, எளிய பதில்கள் வேண்டும். செயலியிடமிருந்து மருத்துவ ஆலோசனை வேண்டாம்.",
		elderName: "மூத்தவரின் பெயர்",
		language: "அவர்கள் பேசும் மொழி",
		speech: "பேசும் வேகம்",
		slow: "மெதுவாக",
		slower: "மிக மெதுவாக",
		tablets: "மருத்துவர் சீட்டின் மாத்திரைகள்",
		addTablet: "மாத்திரை சேர்",
		contactsTitle: "அழைக்க வேண்டியவர்கள்",
		addContact: "ஒருவரைச் சேர்",
		medName: "மாத்திரையின் பெயர்",
		dose: "அளவு, எளிய சொற்களில்",
		timeLabel: "நேரம்",
		save: "சேமி",
		remove: "நீக்கு",
		personName: "பெயர்",
		relation: "யார்",
		phone: "மாதிரி தொலைபேசி எண்",
		son: "மகன்",
		daughter: "மகள்",
		grandson: "பேரன்",
		other: "மற்றவர்",
		otherRelation: "யார் என்று எழுதுங்கள்",
		restore: "பயிற்சி குடும்பத்தை மீட்டமை",
		restoreAsk: "பயிற்சி குடும்பத்தைத் திரும்ப வைக்கவா? நீங்கள் மாற்றிய அமைப்பு அழியும்.",
		practiceTitle: "இந்த வாக்கியங்களை முயற்சி செய்யுங்கள்",
		practiceLead: "ஒரு வாக்கியத்தை அழுத்தி ஆரியா என்ன செய்கிறது என்று பாருங்கள். மூன்று வாக்கியங்கள் வேண்டுமென்றே கடினமானவை.",
		typeNote: "மூத்தவர் படிக்கும் மொழியில் எழுதுங்கள்.",
		removeAsk: "இதை நீக்கவா?",
		keep: "வைத்திரு",
		keepOne: "அழைக்க குறைந்தது ஒருவரை வையுங்கள்.",
		statusDue: "இப்போது நிலுவை",
		statusTaken: "எடுத்துவிட்டது",
		statusLater: "பிறகு",
		statusWaiting: "இன்று பின்னர்",
		tricky: "கடினம்",
		noiseCase: "சுற்றி நிறைய இரைச்சல்",
		andWord: "மற்றும்",
		chooseEn: "Choose your language",
		chooseHi: "अपनी भाषा चुनें",
		chooseTa: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
		safetyHome: "நான் நினைவூட்டுவேன் மட்டும். மருத்துவ ஆலோசனை தரமாட்டேன்.",
		ready: "தயார்",
		nameMissing: "தயவுசெய்து பெயரை எழுதுங்கள்.",
		doseMissing: "தயவுசெய்து அளவை எழுதுங்கள்.",
		savedOk: "சேமிக்கப்பட்டது.",
		clockNow: "இப்போதைய நேரம்",
		rowLine: "{time}. {med}. {dose}.",
		langEn: "English",
		langHi: "हिन्दी",
		langTa: "தமிழ்"
	}
};
function t(lang, key, vars) {
	let text = copy[lang][key] ?? copy.en[key];
	if (vars) for (const [name, value] of Object.entries(vars)) text = text.replaceAll(`{${name}}`, value);
	return text;
}
function Shell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto flex min-h-dvh w-full max-w-xl flex-col overflow-x-hidden px-5 py-6",
		children
	});
}
function Mark({ className = "size-8", badge = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className,
		"aria-hidden": "true",
		children: [
			badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "32",
				height: "32",
				rx: "8",
				fill: "#1B4332"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M8 25.8 16 6.6 24 25.8",
				fill: "none",
				stroke: badge ? "#F3EBDD" : "currentColor",
				strokeWidth: "3.2",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M11.3 18.8c1.5-2.2 3.05-3.2 4.7-3.2s3.2 1 4.7 3.2",
				fill: "none",
				stroke: badge ? "#F0B48A" : "#7C2D12",
				strokeWidth: "2.4",
				strokeLinecap: "round"
			})
		]
	});
}
function Wordmark() {
	const lang = useMitra((state) => state.lang);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-w-0 items-center gap-2.5 text-forest",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
			badge: true,
			className: "size-12 shrink-0"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0 leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-2xl font-semibold tracking-tight",
				children: t(lang, "brand")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-sm font-medium leading-tight text-pretty text-muted",
				children: t(lang, "tagline")
			})]
		})]
	});
}
var toneClass = {
	forest: "bg-forest text-paper",
	clay: "bg-clay text-paper",
	card: "border border-line bg-card text-ink"
};
function BigButton({ tone = "card", icon, title, sub, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: `flex min-h-20 w-full items-center gap-4 rounded-3xl px-5 py-3 text-left transition-transform active:scale-[0.99] motion-reduce:transform-none ${toneClass[tone]}`,
		children: [icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `shrink-0 ${tone === "card" ? "text-forest" : "text-paper"}`,
			children: icon
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-2xl leading-tight font-semibold text-balance",
				children: title
			}), sub ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-lg leading-snug text-pretty",
				children: sub
			}) : null]
		})]
	});
}
function Bubble({ text }) {
	const lang = useMitra((state) => state.lang);
	const rate = useMitra((state) => state.rate);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-3 rounded-3xl border border-line bg-card p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": t(lang, "hear"),
			onClick: () => speak(text, lang, rate),
			className: "grid size-14 shrink-0 place-items-center rounded-2xl bg-forest text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, {
				className: "size-7",
				strokeWidth: 2.25
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "pt-2 text-xl leading-snug font-medium text-pretty",
			"aria-live": "polite",
			children: text
		})]
	});
}
function useAutoSpeak(line) {
	const lang = useMitra((state) => state.lang);
	const rate = useMitra((state) => state.rate);
	const last = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!line || last.current === line) return;
		last.current = line;
		speak(line, lang, rate);
	}, [
		line,
		lang,
		rate
	]);
}
function BackButton({ label, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: "mb-4 inline-flex min-h-14 items-center gap-2 text-lg font-semibold text-forest",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
			className: "size-6",
			strokeWidth: 2.25
		}), label]
	});
}
function Understood() {
	const lang = useMitra((state) => state.lang);
	const heard = useMitra((state) => state.heard);
	const intent = useMitra((state) => state.intent);
	if (!heard || !intent) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "text-lg leading-snug text-pretty text-muted",
		children: [
			t(lang, "heard"),
			": ",
			heard,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block",
				children: t(lang, "matched", { what: t(lang, intentKey(intent)) })
			})
		]
	});
}
var languageOrder = [
	"en",
	"hi",
	"ta"
];
var languageKey = {
	en: "langEn",
	hi: "langHi",
	ta: "langTa"
};
function LangSwitch({ speakOnChange = false }) {
	const lang = useMitra((state) => state.lang);
	const setLang = useMitra((state) => state.setLang);
	const name = useMitra((state) => state.seniorName);
	const rate = useMitra((state) => state.rate);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-3 gap-2",
		role: "group",
		"aria-label": t(lang, "language"),
		children: languageOrder.map((code) => {
			const selected = code === lang;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-pressed": selected,
				onClick: () => {
					setLang(code);
					if (speakOnChange) speak(t(code, "welcomeSpeak", { name }), code, rate);
				},
				className: `min-h-12 rounded-2xl px-2 text-lg font-semibold ${selected ? "bg-forest text-paper" : "border border-line bg-card text-ink"}`,
				children: t(code, languageKey[code])
			}, code);
		})
	});
}
var fieldClass = "min-h-14 w-full rounded-2xl border border-line bg-card px-4 text-xl text-ink outline-none";
function useVoice() {
	const lang = useMitra((state) => state.lang);
	const submit = useMitra((state) => state.submit);
	const fail = useMitra((state) => state.fail);
	const setView = useMitra((state) => state.setView);
	const goHome = useMitra((state) => state.goHome);
	return {
		start: (0, import_react.useCallback)(() => {
			if (startListening(lang, {
				onText: (text) => submit(text),
				onFail: (reason) => fail(reason)
			})) setView("listen");
		}, [
			fail,
			lang,
			setView,
			submit
		]),
		cancel: (0, import_react.useCallback)(() => {
			stopListening();
			stopSpeak();
			goHome();
		}, [goHome])
	};
}
function useNow() {
	const [now, setNow] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const tick = () => setNow(/* @__PURE__ */ new Date());
		tick();
		const id = window.setInterval(tick, 15e3);
		return () => window.clearInterval(id);
	}, []);
	return now;
}
function LanguageScreen() {
	const chooseLang = useMitra((state) => state.chooseLang);
	const name = useMitra((state) => state.seniorName);
	const rate = useMitra((state) => state.rate);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col justify-center gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center gap-3 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
					badge: true,
					className: "size-24"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-5xl font-semibold tracking-tight text-forest",
					children: "ARIA"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xl font-medium text-muted",
					children: "Your friendly voice assistant"
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1 text-center text-xl leading-snug",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Choose your language" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "अपनी भाषा चुनें" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-3",
				children: [
					{
						code: "en",
						label: "English"
					},
					{
						code: "hi",
						label: "हिन्दी"
					},
					{
						code: "ta",
						label: "தமிழ்"
					}
				].map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						noteLangChoice(option.code);
						chooseLang(option.code);
						speak(t(option.code, "welcomeSpeak", { name }), option.code, rate);
					},
					className: "flex min-h-24 w-full items-center justify-center rounded-3xl border border-line bg-card text-4xl font-semibold text-ink transition-transform active:scale-[0.99] motion-reduce:transform-none",
					children: option.label
				}, option.code))
			})
		]
	});
}
function HomeScreen() {
	const lang = useMitra((state) => state.lang);
	const name = useMitra((state) => state.seniorName);
	const medicines = useMitra((state) => state.medicines);
	const taken = useMitra((state) => state.taken);
	const snooze = useMitra((state) => state.snooze);
	const openMedicine = useMitra((state) => state.openMedicine);
	const openCall = useMitra((state) => state.openCall);
	const openAsk = useMitra((state) => state.openAsk);
	const openFamily = useMitra((state) => state.openFamily);
	const now = useNow();
	const { start } = useVoice();
	const due = now ? medicines.find((med) => medStatus(med, now, taken[todayKey(now)] ?? [], snooze[med.id]) === "due") : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "shrink-0 rounded-full bg-forest px-3 py-1 text-lg font-semibold text-paper",
					children: t(lang, "ready")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangSwitch, { speakOnChange: true }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-2xl text-muted",
					children: t(lang, "hello")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-5xl leading-tight font-semibold",
					children: name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bubble, { text: t(lang, "homeLine") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg leading-snug text-pretty text-muted",
				children: t(lang, "safetyHome")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center gap-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: start,
					"aria-label": t(lang, "tapSpeak"),
					className: "grid size-36 place-items-center rounded-full border-8 border-line bg-forest text-paper transition-transform active:scale-95 motion-reduce:transform-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, {
						className: "size-14",
						strokeWidth: 2.25
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xl font-semibold",
					children: t(lang, "tapSpeak")
				})]
			}),
			due ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: openMedicine,
				className: "min-h-16 rounded-3xl bg-clay px-5 py-4 text-left text-xl font-semibold text-paper",
				children: t(lang, "dueBanner", { med: tx(due.name, lang) })
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigButton, {
						title: t(lang, "medicine"),
						sub: t(lang, "medicineSub"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
							className: "size-8",
							strokeWidth: 2.25
						}),
						onClick: openMedicine
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigButton, {
						title: t(lang, "call"),
						sub: t(lang, "callSub"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							className: "size-8",
							strokeWidth: 2.25
						}),
						onClick: openCall
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigButton, {
						title: t(lang, "ask"),
						sub: t(lang, "askSub"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
							className: "size-8",
							strokeWidth: 2.25
						}),
						onClick: openAsk
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: openFamily,
				className: "mx-auto min-h-14 px-3 text-lg font-semibold text-forest",
				children: t(lang, "family")
			})
		]
	});
}
function Clock() {
	const lang = useMitra((state) => state.lang);
	const now = useNow();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mt-1 min-h-10 text-2xl font-semibold text-forest tabular-nums",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "sr-only",
			children: [t(lang, "clockNow"), " "]
		}), now ? formatTime(now, lang) : "\xA0"]
	});
}
function ListenScreen() {
	const lang = useMitra((state) => state.lang);
	const { cancel } = useVoice();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col items-center justify-center gap-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative grid size-44 place-items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mitra-ring absolute inset-0 rounded-full border-4 border-forest" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mitra-ring mitra-ring-late absolute inset-0 rounded-full border-4 border-forest" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-28 place-items-center rounded-full bg-forest text-paper",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, {
							className: "size-12",
							strokeWidth: 2.25
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl font-semibold",
				children: t(lang, "listening")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xl text-muted",
				children: t(lang, "speakSlowly")
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: cancel,
				className: "min-h-16 w-full max-w-sm rounded-3xl border border-line bg-card text-2xl font-semibold",
				children: t(lang, "cancel")
			})
		]
	});
}
function MedicineScreen() {
	const lang = useMitra((state) => state.lang);
	const name = useMitra((state) => state.seniorName);
	const medicines = useMitra((state) => state.medicines);
	const taken = useMitra((state) => state.taken);
	const snooze = useMitra((state) => state.snooze);
	const banner = useMitra((state) => state.banner);
	const goHome = useMitra((state) => state.goHome);
	const markTaken = useMitra((state) => state.markTaken);
	const remindLater = useMitra((state) => state.remindLater);
	const clearBanner = useMitra((state) => state.clearBanner);
	const openSafety = useMitra((state) => state.openSafety);
	const openFamily = useMitra((state) => state.openFamily);
	const rate = useMitra((state) => state.rate);
	const [now] = (0, import_react.useState)(() => /* @__PURE__ */ new Date());
	const takenToday = taken[todayKey(now)] ?? [];
	const focused = focusMedicine(medicines, now, takenToday, snooze);
	const focusedStatus = focused ? medStatus(focused, now, takenToday, snooze[focused.id]) : null;
	let line = t(lang, "noMeds");
	if (medicines.length === 0) line = t(lang, "noMeds");
	else if (banner === "marked") line = t(lang, "marked", { name });
	else if (banner === "snoozed") line = t(lang, "snoozed");
	else if (banner === "scheduled" && focused) line = t(lang, "stillScheduled", { time: formatClockLabel(focused.time, lang) });
	else if (!focused) line = t(lang, "allDoneLine", { name });
	else if (focusedStatus === "due") line = t(lang, "dueLine", {
		name,
		med: tx(focused.name, lang),
		dose: tx(focused.dose, lang)
	});
	else if (focused) line = t(lang, "nextLine", {
		name,
		med: tx(focused.name, lang),
		time: formatClockLabel(focused.time, lang)
	});
	useAutoSpeak(line);
	const showActions = Boolean(focused) && !banner;
	const ordered = [...medicines].sort((a, b) => a.time.localeCompare(b.time));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackButton, {
				label: t(lang, "backHome"),
				onClick: goHome
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl font-semibold",
				children: t(lang, "medicine")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bubble, { text: line }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Understood, {}),
			medicines.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg leading-snug text-pretty text-muted",
				children: t(lang, "medIntro")
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigButton, {
				tone: "forest",
				title: t(lang, "family"),
				onClick: openFamily
			}),
			banner ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigButton, {
				tone: "forest",
				title: t(lang, "goOn"),
				onClick: clearBanner
			}) : null,
			showActions && focused ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigButton, {
						tone: "forest",
						title: t(lang, "yesTook"),
						onClick: () => markTaken(focused.id, "", null)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigButton, {
						title: t(lang, "remindLater"),
						onClick: () => remindLater(focused.id, "", null)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigButton, {
						title: t(lang, "feelUnwell"),
						onClick: () => openSafety("unwell")
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-3",
				children: ordered.map((med) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MedicineRow, {
					med,
					status: medStatus(med, now, takenToday, snooze[med.id]),
					onHear: () => speak(t(lang, "rowLine", {
						time: formatClockLabel(med.time, lang),
						med: tx(med.name, lang),
						dose: tx(med.dose, lang)
					}), lang, rate)
				}, med.id))
			})
		]
	});
}
function MedicineRow({ med, status, onHear }) {
	const lang = useMitra((state) => state.lang);
	const label = status === "due" ? t(lang, "statusDue") : status === "taken" ? t(lang, "statusTaken") : status === "later" ? t(lang, "statusLater") : t(lang, "statusWaiting");
	const pillClass = status === "due" ? "bg-clay text-paper" : status === "taken" ? "bg-forest text-paper" : "border border-line bg-card text-ink";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-3xl border border-line bg-card p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-3xl font-semibold text-forest tabular-nums",
					children: formatClockLabel(med.time, lang)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl leading-tight font-semibold",
					children: tx(med.name, lang)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg text-muted",
					children: tx(med.dose, lang)
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `inline-flex min-h-10 shrink-0 items-center rounded-full px-3 text-lg font-semibold ${pillClass}`,
				children: label
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: onHear,
			className: "mt-3 flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl border border-line text-lg font-semibold",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, {
				className: "size-5",
				strokeWidth: 2.25
			}), t(lang, "hear")]
		})]
	});
}
function CallListScreen() {
	const lang = useMitra((state) => state.lang);
	const contacts = useMitra((state) => state.contacts);
	const goHome = useMitra((state) => state.goHome);
	const openConfirm = useMitra((state) => state.openConfirm);
	const line = t(lang, "callIntro");
	useAutoSpeak(line);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackButton, {
				label: t(lang, "backHome"),
				onClick: goHome
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl font-semibold",
				children: t(lang, "call")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bubble, { text: line }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Understood, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-3",
				children: contacts.map((contact) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactButton, {
					contact,
					onClick: () => openConfirm(contact.id)
				}, contact.id))
			})
		]
	});
}
function ContactButton({ contact, onClick }) {
	const lang = useMitra((state) => state.lang);
	const relation = contact.relation === "other" ? tx(contact.relationLabel, lang) || t(lang, "other") : t(lang, contact.relation);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: "flex min-h-24 w-full items-center gap-4 rounded-3xl border border-line bg-card px-5 py-3 text-left",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid size-16 shrink-0 place-items-center rounded-2xl bg-forest text-3xl font-semibold text-paper",
			children: contact.name.slice(0, 1)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-2xl font-semibold",
					children: contact.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-lg text-muted",
					children: relation
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-lg text-muted tabular-nums",
					children: contact.phone
				})
			]
		})]
	});
}
function ConfirmScreen() {
	const lang = useMitra((state) => state.lang);
	const contacts = useMitra((state) => state.contacts);
	const contactId = useMitra((state) => state.contactId);
	const backToCall = useMitra((state) => state.backToCall);
	const startCall = useMitra((state) => state.startCall);
	const contact = contacts.find((item) => item.id === contactId);
	const line = contact ? t(lang, "confirmLine", {
		name: contact.name,
		relation: relationForCall(contact, lang)
	}) : t(lang, "callIntro");
	useAutoSpeak(contact ? line : null);
	(0, import_react.useEffect)(() => {
		if (!contact) backToCall();
	}, [contact, backToCall]);
	if (!contact) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackButton, {
				label: t(lang, "back"),
				onClick: backToCall
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl font-semibold",
				children: contact.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bubble, { text: line }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Understood, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-3xl font-semibold tabular-nums",
				children: contact.phone
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-lg text-muted",
				children: t(lang, "sample")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigButton, {
				tone: "forest",
				title: t(lang, "yesCall"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
					className: "size-8",
					strokeWidth: 2.25
				}),
				onClick: startCall
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigButton, {
				title: t(lang, "noBack"),
				onClick: backToCall
			})
		]
	});
}
function CallingScreen() {
	const lang = useMitra((state) => state.lang);
	const rate = useMitra((state) => state.rate);
	const contacts = useMitra((state) => state.contacts);
	const contactId = useMitra((state) => state.contactId);
	const goHome = useMitra((state) => state.goHome);
	const contact = contacts.find((item) => item.id === contactId);
	const [phase, setPhase] = (0, import_react.useState)("ringing");
	const [seconds, setSeconds] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!contact) return;
		speak(t(lang, "calling", { name: contact.name }), lang, rate);
		const timer = window.setTimeout(() => {
			setPhase("connected");
			speak(`${t(lang, "connected", { name: contact.name })} ${t(lang, "practice")}`, lang, rate);
		}, 2600);
		return () => window.clearTimeout(timer);
	}, [
		contact,
		lang,
		rate
	]);
	(0, import_react.useEffect)(() => {
		if (phase !== "connected") return;
		const id = window.setInterval(() => setSeconds((value) => value + 1), 1e3);
		return () => window.clearInterval(id);
	}, [phase]);
	if (!contact) return null;
	const hangUp = () => {
		setPhase("ended");
		speak(t(lang, "ended"), lang, rate);
	};
	const clock = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col items-center justify-center gap-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid size-28 place-items-center rounded-full bg-forest text-5xl font-semibold text-paper",
				children: contact.name.slice(0, 1)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl font-semibold",
				children: contact.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xl text-muted",
				children: phase === "ringing" ? t(lang, "calling", { name: contact.name }) : phase === "connected" ? t(lang, "connected", { name: contact.name }) : t(lang, "ended")
			})] }),
			phase === "connected" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-4xl font-semibold tabular-nums",
				children: clock
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-sm text-lg leading-snug text-pretty text-muted",
				children: t(lang, "practice")
			}),
			phase === "ended" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigButton, {
				tone: "forest",
				title: t(lang, "backHome"),
				onClick: goHome
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: hangUp,
				className: "inline-flex min-h-16 items-center gap-3 rounded-full bg-clay px-8 text-2xl font-semibold text-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneOff, {
					className: "size-7",
					strokeWidth: 2.25
				}), t(lang, "hangUp")]
			})
		]
	});
}
function AskScreen() {
	const lang = useMitra((state) => state.lang);
	const ask = useMitra((state) => state.ask);
	const name = useMitra((state) => state.seniorName);
	const medicines = useMitra((state) => state.medicines);
	const taken = useMitra((state) => state.taken);
	const snooze = useMitra((state) => state.snooze);
	const goHome = useMitra((state) => state.goHome);
	const submit = useMitra((state) => state.submit);
	const [now] = (0, import_react.useState)(() => /* @__PURE__ */ new Date());
	const { start } = useVoice();
	const next = focusMedicine(medicines, now, taken[todayKey(now)] ?? [], snooze);
	let line = t(lang, "askIntro");
	if (ask === "time") line = t(lang, "aTime", { time: formatTime(now, lang) });
	if (ask === "date") line = t(lang, "aDate", { date: formatDate(now, lang) });
	if (ask === "weather") line = t(lang, "aWeather");
	if (ask === "who") line = t(lang, "aWho");
	if (ask === "kind") line = t(lang, "aKind", { name });
	if (ask === "next") line = next ? t(lang, "aNext", {
		med: tx(next.name, lang),
		time: formatClockLabel(next.time, lang)
	}) : t(lang, "aNone");
	useAutoSpeak(line);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackButton, {
				label: t(lang, "backHome"),
				onClick: goHome
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl font-semibold",
				children: t(lang, "ask")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bubble, { text: line }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Understood, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigButton, {
				tone: "forest",
				title: t(lang, "tapSpeak"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, {
					className: "size-8",
					strokeWidth: 2.25
				}),
				onClick: start
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-3",
				children: [
					{ key: "qTime" },
					{ key: "qDate" },
					{ key: "qNext" },
					{ key: "qWho" },
					{ key: "qKind" },
					{ key: "qWeather" }
				].map((prompt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigButton, {
					title: t(lang, prompt.key),
					onClick: () => submit(t(lang, prompt.key))
				}, prompt.key))
			})
		]
	});
}
function SafetyScreen() {
	const lang = useMitra((state) => state.lang);
	const safety = useMitra((state) => state.safety);
	const goHome = useMitra((state) => state.goHome);
	const openMedicine = useMitra((state) => state.openMedicine);
	const callFamily = useMitra((state) => state.callFamily);
	const line = t(lang, safety === "advice" ? "safetyAdvice" : "safetyUnwell");
	useAutoSpeak(line);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackButton, {
				label: t(lang, "backHome"),
				onClick: goHome
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bubble, { text: line }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Understood, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigButton, {
				tone: "forest",
				title: t(lang, "callThem"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
					className: "size-8",
					strokeWidth: 2.25
				}),
				onClick: callFamily
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigButton, {
				title: t(lang, "seeTablets"),
				onClick: openMedicine
			})
		]
	});
}
function FallbackScreen() {
	const lang = useMitra((state) => state.lang);
	const fallback = useMitra((state) => state.fallback);
	const unknownName = useMitra((state) => state.unknownName);
	const contacts = useMitra((state) => state.contacts);
	const heard = useMitra((state) => state.heard);
	const goHome = useMitra((state) => state.goHome);
	const openMedicine = useMitra((state) => state.openMedicine);
	const openCall = useMitra((state) => state.openCall);
	const openConfirm = useMitra((state) => state.openConfirm);
	const { start } = useVoice();
	const line = fallback === "noise" ? t(lang, "noisy") : fallback === "nomic" ? t(lang, "noMic") : fallback === "name" ? t(lang, "unknownLine", {
		name: unknownName || t(lang, "someone"),
		list: joinList(contacts.map((contact) => contact.name), t(lang, "andWord"))
	}) : t(lang, "notUnderstood");
	useAutoSpeak(line);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackButton, {
				label: t(lang, "backHome"),
				onClick: goHome
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bubble, { text: line }),
			heard ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-lg text-muted",
				children: [
					t(lang, "heard"),
					": ",
					heard
				]
			}) : null,
			fallback === "name" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-3",
				children: contacts.map((contact) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactButton, {
					contact,
					onClick: () => openConfirm(contact.id)
				}, contact.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigButton, {
						tone: "forest",
						title: t(lang, "tryAgain"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, {
							className: "size-8",
							strokeWidth: 2.25
						}),
						onClick: start
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigButton, {
						title: t(lang, "medicine"),
						onClick: openMedicine
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigButton, {
						title: t(lang, "call"),
						onClick: openCall
					})
				]
			})
		]
	});
}
var relations = [
	"son",
	"daughter",
	"grandson",
	"other"
];
function FamilyScreen() {
	const lang = useMitra((state) => state.lang);
	const seniorName = useMitra((state) => state.seniorName);
	const setSeniorName = useMitra((state) => state.setSeniorName);
	const rate = useMitra((state) => state.rate);
	const setRate = useMitra((state) => state.setRate);
	const medicines = useMitra((state) => state.medicines);
	const contacts = useMitra((state) => state.contacts);
	const goHome = useMitra((state) => state.goHome);
	const addMedicine = useMitra((state) => state.addMedicine);
	const addContact = useMitra((state) => state.addContact);
	const restore = useMitra((state) => state.restore);
	const submit = useMitra((state) => state.submit);
	const showNoise = useMitra((state) => state.showNoise);
	const [draftName, setDraftName] = (0, import_react.useState)(seniorName);
	const [addingMed, setAddingMed] = (0, import_react.useState)(false);
	const [addingPerson, setAddingPerson] = (0, import_react.useState)(false);
	const [askRestore, setAskRestore] = (0, import_react.useState)(false);
	const [note, setNote] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setDraftName(seniorName);
	}, [seniorName]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackButton, {
				label: t(lang, "backHome"),
				onClick: goHome
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg font-semibold text-forest",
				children: t(lang, "familyTitle")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl font-semibold",
				children: t(lang, "family")
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg leading-snug text-pretty text-muted",
				children: t(lang, "familyLead")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-line border-l-8 border-l-forest bg-card p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-semibold",
					children: t(lang, "personaTitle")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-lg leading-snug text-pretty",
					children: t(lang, "personaBody")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex flex-col gap-2 text-lg font-semibold",
				children: [t(lang, "elderName"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: fieldClass,
					value: draftName,
					maxLength: 24,
					onChange: (event) => setDraftName(event.target.value),
					onBlur: () => {
						if (draftName.trim()) setSeniorName(draftName);
						else setDraftName(seniorName);
					}
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg font-semibold",
					children: t(lang, "language")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangSwitch, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg font-semibold",
					children: t(lang, "speech")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-2",
					children: [{
						value: .85,
						label: t(lang, "slow")
					}, {
						value: .7,
						label: t(lang, "slower")
					}].map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": rate === option.value,
						onClick: () => setRate(option.value),
						className: `min-h-14 rounded-2xl text-xl font-semibold ${rate === option.value ? "bg-forest text-paper" : "border border-line bg-card text-ink"}`,
						children: option.label
					}, option.label))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold",
						children: t(lang, "tablets")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg text-muted",
						children: t(lang, "typeNote")
					}),
					medicines.map((med) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MedicineEditor, {
						med,
						onNote: setNote
					}, med.id)),
					addingMed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewMedicineForm, {
						onCancel: () => setAddingMed(false),
						onSave: (patch) => {
							addMedicine(patch);
							setAddingMed(false);
							setNote(t(lang, "savedOk"));
						}
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setAddingMed(true),
						className: "inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-line bg-card text-xl font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-5" }), t(lang, "addTablet")]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold",
						children: t(lang, "contactsTitle")
					}),
					contacts.map((contact) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactEditor, {
						contact,
						onNote: setNote
					}, contact.id)),
					addingPerson ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewContactForm, {
						onCancel: () => setAddingPerson(false),
						onSave: (patch) => {
							addContact(patch);
							setAddingPerson(false);
							setNote(t(lang, "savedOk"));
						}
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setAddingPerson(true),
						className: "inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-line bg-card text-xl font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-5" }), t(lang, "addContact")]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold",
						children: t(lang, "practiceTitle")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg leading-snug text-pretty text-muted",
						children: t(lang, "practiceLead")
					}),
					practicePhrases.map((phrase) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							const text = tx(phrase.text, lang);
							if (phrase.noise) showNoise(text);
							else submit(text);
						},
						className: "min-h-14 rounded-2xl border border-line bg-card px-4 text-left text-lg font-semibold",
						children: [phrase.tricky ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mr-2 text-clay",
							children: t(lang, "tricky")
						}) : null, tx(phrase.text, lang)]
					}, phrase.id))
				]
			}),
			note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg font-semibold text-forest",
				"aria-live": "polite",
				children: note
			}) : null,
			askRestore ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 rounded-3xl border border-line bg-card p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xl leading-snug text-pretty",
						children: t(lang, "restoreAsk")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigButton, {
						tone: "clay",
						title: t(lang, "restore"),
						onClick: () => {
							restore();
							setAskRestore(false);
							setNote(t(lang, "savedOk"));
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigButton, {
						title: t(lang, "keep"),
						onClick: () => setAskRestore(false)
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setAskRestore(true),
				className: "min-h-14 text-lg font-semibold text-clay",
				children: t(lang, "restore")
			})
		]
	});
}
function MedicineEditor({ med, onNote }) {
	const lang = useMitra((state) => state.lang);
	const saveMedicine = useMitra((state) => state.saveMedicine);
	const removeMedicine = useMitra((state) => state.removeMedicine);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [ask, setAsk] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)(tx(med.name, lang));
	const [dose, setDose] = (0, import_react.useState)(tx(med.dose, lang));
	const [time, setTime] = (0, import_react.useState)(med.time);
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setName(tx(med.name, lang));
		setDose(tx(med.dose, lang));
		setTime(med.time);
	}, [med, lang]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl border border-line bg-card p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => setOpen((value) => !value),
			className: "flex min-h-16 w-full items-center justify-between text-left",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-2xl font-semibold tabular-nums",
				children: formatClockLabel(med.time, lang)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-lg",
				children: tx(med.name, lang)
			})] })
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex flex-col gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t(lang, "medName"),
					value: name,
					onChange: setName
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t(lang, "dose"),
					value: dose,
					onChange: setDose
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex flex-col gap-2 text-lg font-semibold",
					children: [t(lang, "timeLabel"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "time",
						className: fieldClass,
						value: time,
						onChange: (event) => setTime(event.target.value)
					})]
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg text-clay",
					children: error
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						if (!name.trim()) return setError(t(lang, "nameMissing"));
						if (!dose.trim()) return setError(t(lang, "doseMissing"));
						saveMedicine(med.id, {
							name: editLocalized(med.name, lang, name),
							dose: editLocalized(med.dose, lang, dose),
							time: time || med.time
						});
						setError("");
						onNote(t(lang, "savedOk"));
					},
					className: "min-h-14 rounded-2xl bg-forest text-xl font-semibold text-paper",
					children: t(lang, "save")
				}),
				ask ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg",
							children: t(lang, "removeAsk")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => removeMedicine(med.id),
							className: "min-h-14 rounded-2xl bg-clay text-xl font-semibold text-paper",
							children: t(lang, "remove")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setAsk(false),
							className: "min-h-14 text-lg font-semibold",
							children: t(lang, "keep")
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setAsk(true),
					className: "min-h-12 text-lg font-semibold text-clay",
					children: t(lang, "remove")
				})
			]
		}) : null]
	});
}
function NewMedicineForm({ onCancel, onSave }) {
	const lang = useMitra((state) => state.lang);
	const [name, setName] = (0, import_react.useState)("");
	const [dose, setDose] = (0, import_react.useState)("");
	const [time, setTime] = (0, import_react.useState)("08:00");
	const [error, setError] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 rounded-3xl border border-line bg-card p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t(lang, "medName"),
				value: name,
				onChange: setName
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t(lang, "dose"),
				value: dose,
				onChange: setDose
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex flex-col gap-2 text-lg font-semibold",
				children: [t(lang, "timeLabel"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "time",
					className: fieldClass,
					value: time,
					onChange: (event) => setTime(event.target.value)
				})]
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg text-clay",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => {
					if (!name.trim()) return setError(t(lang, "nameMissing"));
					if (!dose.trim()) return setError(t(lang, "doseMissing"));
					onSave({
						name: fillLang(name),
						dose: fillLang(dose),
						time: time || "08:00"
					});
				},
				className: "min-h-14 rounded-2xl bg-forest text-xl font-semibold text-paper",
				children: t(lang, "save")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onCancel,
				className: "min-h-12 text-lg font-semibold",
				children: t(lang, "cancel")
			})
		]
	});
}
function ContactEditor({ contact, onNote }) {
	const lang = useMitra((state) => state.lang);
	const saveContact = useMitra((state) => state.saveContact);
	const removeContact = useMitra((state) => state.removeContact);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [ask, setAsk] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)(contact.name);
	const [relation, setRelation] = (0, import_react.useState)(contact.relation);
	const [relationText, setRelationText] = (0, import_react.useState)(tx(contact.relationLabel, lang));
	const [phone, setPhone] = (0, import_react.useState)(contact.phone);
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setName(contact.name);
		setRelation(contact.relation);
		setRelationText(tx(contact.relationLabel, lang));
		setPhone(contact.phone);
	}, [contact, lang]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl border border-line bg-card p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setOpen((value) => !value),
			className: "flex min-h-16 w-full flex-col items-start text-left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-2xl font-semibold",
				children: contact.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-lg text-muted",
				children: contact.relation === "other" ? tx(contact.relationLabel, lang) || t(lang, "other") : t(lang, contact.relation)
			})]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex flex-col gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t(lang, "personName"),
					value: name,
					onChange: setName
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelationPicker, {
					relation,
					onChange: setRelation
				}),
				relation === "other" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t(lang, "otherRelation"),
					value: relationText,
					onChange: setRelationText
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t(lang, "phone"),
					value: phone,
					onChange: setPhone
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg text-muted",
					children: t(lang, "sample")
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg text-clay",
					children: error
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						if (!name.trim()) return setError(t(lang, "nameMissing"));
						saveContact(contact.id, {
							name: name.trim(),
							relation,
							relationLabel: editLocalized(contact.relationLabel, lang, relationText),
							phone: phone.trim() || contact.phone
						});
						setError("");
						onNote(t(lang, "savedOk"));
					},
					className: "min-h-14 rounded-2xl bg-forest text-xl font-semibold text-paper",
					children: t(lang, "save")
				}),
				ask ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg",
							children: t(lang, "removeAsk")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								if (!removeContact(contact.id)) setError(t(lang, "keepOne"));
							},
							className: "min-h-14 rounded-2xl bg-clay text-xl font-semibold text-paper",
							children: t(lang, "remove")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setAsk(false),
							className: "min-h-14 text-lg font-semibold",
							children: t(lang, "keep")
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setAsk(true),
					className: "min-h-12 text-lg font-semibold text-clay",
					children: t(lang, "remove")
				})
			]
		}) : null]
	});
}
function NewContactForm({ onCancel, onSave }) {
	const lang = useMitra((state) => state.lang);
	const [name, setName] = (0, import_react.useState)("");
	const [relation, setRelation] = (0, import_react.useState)("other");
	const [relationText, setRelationText] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("98000 00000");
	const [error, setError] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 rounded-3xl border border-line bg-card p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t(lang, "personName"),
				value: name,
				onChange: setName
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelationPicker, {
				relation,
				onChange: setRelation
			}),
			relation === "other" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t(lang, "otherRelation"),
				value: relationText,
				onChange: setRelationText
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t(lang, "phone"),
				value: phone,
				onChange: setPhone
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg text-muted",
				children: t(lang, "sample")
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg text-clay",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => {
					if (!name.trim()) return setError(t(lang, "nameMissing"));
					onSave({
						name: name.trim(),
						relation,
						relationLabel: fillLang(relationText),
						phone: phone.trim() || "98000 00000"
					});
				},
				className: "min-h-14 rounded-2xl bg-forest text-xl font-semibold text-paper",
				children: t(lang, "save")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onCancel,
				className: "min-h-12 text-lg font-semibold",
				children: t(lang, "cancel")
			})
		]
	});
}
function RelationPicker({ relation, onChange }) {
	const lang = useMitra((state) => state.lang);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-2",
		children: relations.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-pressed": relation === item,
			onClick: () => onChange(item),
			className: `min-h-14 rounded-2xl text-lg font-semibold ${relation === item ? "bg-forest text-paper" : "border border-line bg-card text-ink"}`,
			children: t(lang, item)
		}, item))
	});
}
function Field({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex flex-col gap-2 text-lg font-semibold",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			className: fieldClass,
			value,
			onChange: (event) => onChange(event.target.value)
		})]
	});
}
function MitraApp() {
	const welcomed = useMitra((state) => state.welcomed);
	const view = useMitra((state) => state.view);
	const lang = useMitra((state) => state.lang);
	(0, import_react.useEffect)(() => {
		warmVoices();
		const finish = () => {
			const chosen = takePendingLang();
			if (chosen) useMitra.getState().chooseLang(chosen);
		};
		const unsub = useMitra.persist.onFinishHydration(finish);
		useMitra.persist.rehydrate();
		return () => {
			unsub();
		};
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = lang === "hi" ? "hi" : lang === "ta" ? "ta" : "en";
	}, [lang]);
	const screen = !welcomed ? "language" : view;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		screen === "language" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageScreen, {}) : null,
		screen === "home" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeScreen, {}) : null,
		screen === "listen" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListenScreen, {}) : null,
		screen === "medicine" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MedicineScreen, {}) : null,
		screen === "call" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallListScreen, {}) : null,
		screen === "confirm" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmScreen, {}) : null,
		screen === "calling" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallingScreen, {}) : null,
		screen === "ask" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AskScreen, {}) : null,
		screen === "safety" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafetyScreen, {}) : null,
		screen === "fallback" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FallbackScreen, {}) : null,
		screen === "family" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FamilyScreen, {}) : null
	] });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MitraApp, {});
}
//#endregion
export { Home as component };
