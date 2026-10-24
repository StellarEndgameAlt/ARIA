import type { Contact } from "./data";
import type { CopyKey } from "./i18n";

export type Intent =
  | { type: "medicine" }
  | { type: "took" }
  | { type: "later" }
  | { type: "call"; contactId: string }
  | { type: "call_list" }
  | { type: "unknown_name"; name: string }
  | { type: "yes" }
  | { type: "no" }
  | { type: "time" }
  | { type: "date" }
  | { type: "weather" }
  | { type: "who" }
  | { type: "kind" }
  | { type: "next" }
  | { type: "advice" }
  | { type: "unwell" }
  | { type: "hello" }
  | { type: "need_time" }
  | { type: "remind_set"; time: string }
  | { type: "noise" }
  | { type: "unknown" };

const STOP = new Set([
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
  "க்கு",
]);

function has(text: string, phrases: string[]): boolean {
  const value = text.toLowerCase();
  return phrases.some((phrase) => {
    const needle = phrase.toLowerCase();
    if (/^[a-z0-9]+$/i.test(phrase)) return new RegExp(`\\b${needle}\\b`, "i").test(value);
    return value.includes(needle);
  });
}

export function isYes(text: string): boolean {
  const value = text.toLowerCase();
  if (/\b(yes|yeah|yep|ok|okay|haan|han)\b/i.test(value)) return true;
  return ["हाँ", "हां", "जी हाँ", "ஆம்", "ஆமா"].some((word) => value.includes(word));
}

export function isNo(text: string): boolean {
  const value = text.toLowerCase();
  if (/\b(no|nope|nah|nahi)\b/i.test(value)) return true;
  return ["नहीं", "मत", "வேண்டாம்", "இல்லை"].some((word) => value.includes(word));
}

function hasName(text: string, name: string): boolean {
  const needle = name.trim().toLowerCase();
  if (!needle) return false;
  if (/^[a-z0-9]+$/i.test(needle)) return new RegExp(`\\b${needle}\\b`, "i").test(text);
  return text.toLowerCase().includes(needle);
}

function findContact(text: string, contacts: Contact[]): Contact | undefined {
  const value = text.toLowerCase();
  const byName = contacts.find((contact) => hasName(value, contact.name));
  if (byName) return byName;

  const rules: { relation: Contact["relation"]; words: string[] }[] = [
    { relation: "grandson", words: ["grandson", "pota", "पोता", "पोते", "பேரன்"] },
    { relation: "daughter", words: ["daughter", "beti", "बेटी", "மகள்"] },
    { relation: "son", words: ["son", "beta", "बेटा", "बेटे", "மகன்"] },
  ];
  for (const rule of rules) {
    if (!has(value, rule.words)) continue;
    const match = contacts.find((contact) => contact.relation === rule.relation);
    if (match) return match;
  }

  return contacts.find((contact) => {
    if (contact.relation !== "other") return false;
    return [contact.relationLabel.en, contact.relationLabel.hi, contact.relationLabel.ta].some(
      (label) => Boolean(label && label.trim().length > 1 && value.includes(label.toLowerCase())),
    );
  });
}

function leftoverName(raw: string): string {
  if (/ramesh|रमेश|ரமேஷ/i.test(raw)) return "Ramesh";
  const parts = raw
    .replace(/[?.!।,]/g, " ")
    .split(/\s+/)
    .map((part) => part.trim())
    .filter((part) => part && !STOP.has(part.toLowerCase()));
  const generic = /^(family|परिवार|குடும்பம்|someone|किसी)$/i;
  const name = parts.find((part) => !generic.test(part));
  return name ?? "";
}

function isGenericFamily(text: string): boolean {
  return has(text, ["family", "परिवार", "குடும்ப"]);
}

const NAME_SKIP = new Set([
  ...STOP,
  "son",
  "daughter",
  "grandson",
  "beta",
  "beti",
  "pota",
  "remind",
  "reminder",
  "medicine",
  "tablet",
  "tablets",
  "take",
  "taking",
  "about",
  "at",
  "am",
  "pm",
  "morning",
  "evening",
  "night",
  "afternoon",
  "hello",
  "hear",
  "noise",
  "noisy",
  "background",
  "today",
  "todays",
  "what",
  "is",
  "the",
  "my",
  "me",
  "to",
  "for",
  "in",
  "on",
  "of",
  "if",
  "i",
  "you",
  "can",
  "your",
]);

export function extractTime(raw: string): string | null {
  const text = raw.toLowerCase().replace(/\./g, "");
  const match = text.match(/\b(\d{1,2})(?::(\d{2}))?\s*(am|pm)?\b/);
  if (!match) return null;
  let hour = Number(match[1]);
  const minute = Number(match[2] ?? "0");
  if (!Number.isFinite(hour) || !Number.isFinite(minute) || minute > 59 || hour > 23) return null;
  const meridiem = match[3];
  if (meridiem === "pm" && hour < 12) hour += 12;
  if (meridiem === "am" && hour === 12) hour = 0;
  if (!meridiem && hour <= 12 && /\b(evening|night|afternoon)\b/.test(text)) hour += hour === 12 ? 0 : 12;
  if (hour > 23) return null;
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function unknownCalledName(raw: string, contacts: Contact[]): string {
  const parts = raw.replace(/[?.!।,()]/g, " ").split(/\s+/).filter(Boolean);
  let unknown = "";
  for (const part of parts) {
    const low = part.toLowerCase();
    if (NAME_SKIP.has(low) || low.length < 2 || /^\d/.test(low)) continue;
    if (contacts.some((contact) => contact.name.toLowerCase() === low)) continue;
    if (!/^[a-z][a-z'-]{1,}$/i.test(part)) continue;
    unknown = part[0].toUpperCase() + part.slice(1).toLowerCase();
  }
  return unknown;
}

export function parseUtterance(
  raw: string,
  contacts: Contact[],
  mode?: "confirm" | "medicine",
): Intent {
  const text = raw.trim().toLowerCase();
  if (!text) return { type: "unknown" };

  if (
    has(text, [
      "two tablet",
      "2 tablet",
      "double dose",
      "side effect",
      "should i take",
      "medical advice",
      "two dose",
      "doses",
      "missed one",
      "missed a dose",
      "stop my medicine",
      "दो गोली",
      "दो गोल",
      "इलाज",
      "खुराक बदल",
      "இரண்டு மாத்திரை",
      "மருத்துவ ஆலோசனை",
    ])
  ) {
    return { type: "advice" };
  }

  if (
    has(text, [
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
      "மூச்சு",
    ])
  ) {
    return { type: "unwell" };
  }

  if (mode === "confirm") {
    if (isNo(text)) return { type: "no" };
    if (isYes(text)) return { type: "yes" };
  }

  if (has(text, ["noise", "noisy", "background", "शोर", "இரைச்சல்", "গোলমাল", "శబ్దం"])) {
    return { type: "noise" };
  }

  const wantsCall = has(text, ["call", "phone", "dial", "कॉल", "फोन", "बुलाओ", "அழை", "போன்"]);
  const wantsRemind = has(text, ["remind", "reminder", "याद", "நினைவூட்டு", "মনে করিয়ে"]);

  if (!wantsCall && !wantsRemind && has(text, ["can you hear", "hello", "hear me"])) {
    return { type: "hello" };
  }

  const named = contacts.find((contact) => hasName(text, contact.name));
  const unknownName = unknownCalledName(raw, contacts);
  if (wantsCall) {
    if (unknownName) return { type: "unknown_name", name: unknownName };
    if (named) return { type: "call", contactId: named.id };
    const byRelation = findContact(text, contacts);
    if (byRelation) return { type: "call", contactId: byRelation.id };
    return { type: "call_list" };
  }

  if (mode === "medicine") {
    if (has(text, ["later", "remind me later", "बाद में", "थोड़ी देर", "பிறகு"])) return { type: "later" };
    if (has(text, ["i took", "took it", "taken", "ले ली", "खा ली", "எடுத்துவிட்டேன்"]) || isYes(text)) {
      return { type: "took" };
    }
  }

  if (wantsRemind) {
    const clock = extractTime(raw);
    if (clock) return { type: "remind_set", time: clock };
    return { type: "need_time" };
  }

  if (
    has(text, [
      "weather",
      "मौसम",
      "வானிலை",
      "আবহাওয়া",
      "వాతావరణం",
      "हवामान",
      "موسم",
      "હવામાન",
      "ಹವಾಮಾನ",
      "ପାଣିପାଗ",
      "കാലാവസ്ഥ",
      "ਮੌਸਮ",
    ])
  ) {
    return { type: "weather" };
  }
  if (has(text, ["who are you", "who", "कौन हो", "कौन", "யார்", "நீ யார்"])) return { type: "who" };
  if (has(text, ["something kind", "kind word", "अच्छी बात", "நல்ல வார்த்தை"])) return { type: "kind" };
  if (has(text, ["next tablet", "next medicine", "when is my next", "अगली गोली", "अगली दवा", "அடுத்த மாத்திரை", "அடுத்த"])) {
    return { type: "next" };
  }
  if (has(text, ["date", "today's date", "तारीख", "दिनांक", "தேதி"])) return { type: "date" };
  if (has(text, ["tablet", "medicine", "pill", "dawai", "dawa", "goli", "दवा", "गोली", "दवाई", "மாத்திரை", "மருந்து", "நினைவூட்டு"])) {
    return { type: "medicine" };
  }
  if (has(text, ["time", "samay", "समय", "बजे", "நேரம்"])) return { type: "time" };
  if (has(text, ["i took", "took it", "taken", "ले ली", "खा ली", "எடுத்துவிட்டேன்"])) return { type: "took" };
  if (has(text, ["later", "remind me later", "बाद में", "பிறகு"])) return { type: "later" };
  if (isYes(text)) return { type: "yes" };
  if (isNo(text)) return { type: "no" };
  return { type: "unknown" };
}

export function intentKey(intent: Intent): CopyKey {
  switch (intent.type) {
    case "medicine":
      return "intentMedicine";
    case "call":
      return "intentCall";
    case "call_list":
      return "intentList";
    case "unknown_name":
      return "intentUnknownName";
    case "yes":
      return "intentCall";
    case "no":
      return "intentUnknown";
    case "time":
      return "intentTime";
    case "date":
      return "intentDate";
    case "weather":
      return "intentWeather";
    case "who":
      return "intentWho";
    case "kind":
      return "intentKind";
    case "next":
      return "intentNext";
    case "advice":
      return "intentAdvice";
    case "unwell":
      return "intentUnwell";
    case "hello":
      return "intentWho";
    case "need_time":
    case "remind_set":
      return "intentMedicine";
    case "noise":
      return "intentUnknown";
    case "took":
      return "intentTook";
    case "later":
      return "intentLater";
    default:
      return "intentUnknown";
  }
}
