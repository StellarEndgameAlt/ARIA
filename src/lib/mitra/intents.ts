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
      (label) => label.trim().length > 1 && value.includes(label.toLowerCase()),
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

  const wantsCall = has(text, ["call", "phone", "dial", "कॉल", "फोन", "बुलाओ", "அழை", "போன்"]);
  const contact = findContact(text, contacts);
  if (contact) return { type: "call", contactId: contact.id };

  if (wantsCall) {
    if (isGenericFamily(text) || !leftoverName(raw)) return { type: "call_list" };
    return { type: "unknown_name", name: leftoverName(raw) };
  }

  if (mode === "medicine") {
    if (has(text, ["later", "remind me later", "बाद में", "थोड़ी देर", "பிறகு"])) return { type: "later" };
    if (has(text, ["i took", "took it", "taken", "ले ली", "खा ली", "எடுத்துவிட்டேன்"]) || isYes(text)) {
      return { type: "took" };
    }
  }

  if (has(text, ["weather", "मौसम", "வானிலை"])) return { type: "weather" };
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
    case "took":
      return "intentTook";
    case "later":
      return "intentLater";
    default:
      return "intentUnknown";
  }
}
