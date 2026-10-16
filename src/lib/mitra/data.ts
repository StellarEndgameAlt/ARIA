import { t } from "./i18n";
import { LANGUAGES, type Lang, localeOf } from "./languages";

export type { Lang };
export { LANGUAGES, localeOf };

export type Localized = Partial<Record<Lang, string>> & { en: string };
export type Relation = "son" | "daughter" | "grandson" | "other";
export type MedStatus = "due" | "taken" | "later" | "waiting";

export type Medicine = {
  id: string;
  name: Localized;
  dose: Localized;
  time: string;
};

export type Contact = {
  id: string;
  name: string;
  relation: Relation;
  relationLabel: Localized;
  phone: string;
};

export type PracticePhrase = {
  id: string;
  text: Localized;
  tricky?: boolean;
  noise?: boolean;
};

function loc(en: string, hi: string, ta: string): Localized {
  return { en, hi, ta };
}

export function tx(value: Partial<Record<Lang, string>> | undefined, lang: Lang): string {
  if (!value) return "";
  const direct = value[lang];
  if (direct && direct.trim()) return direct;
  return value.en ?? "";
}

export function fillLang(text: string): Localized {
  const value = text.trim();
  return Object.fromEntries(LANGUAGES.map((item) => [item.code, value])) as Localized;
}

export function editLocalized(current: Localized, lang: Lang, text: string): Localized {
  return { ...current, en: current.en, [lang]: text.trim() };
}

export function todayKey(date = new Date()): string {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

export function medStatus(
  med: Medicine,
  now: Date,
  takenIds: string[],
  snoozeUntil?: number,
): MedStatus {
  if (takenIds.includes(med.id)) return "taken";
  if (snoozeUntil && snoozeUntil > now.getTime()) return "later";
  const [hour, minute] = med.time.split(":").map(Number);
  const dueAt = new Date(now);
  dueAt.setHours(hour || 0, minute || 0, 0, 0);
  return now.getTime() >= dueAt.getTime() ? "due" : "waiting";
}

export function focusMedicine(
  medicines: Medicine[],
  now: Date,
  takenIds: string[],
  snooze: Record<string, number>,
): Medicine | null {
  const ordered = [...medicines].sort((a, b) => a.time.localeCompare(b.time));
  const due = ordered.find((med) => medStatus(med, now, takenIds, snooze[med.id]) === "due");
  if (due) return due;
  return (
    ordered.find((med) => {
      const status = medStatus(med, now, takenIds, snooze[med.id]);
      return status === "waiting" || status === "later";
    }) ?? null
  );
}

export function formatTime(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(localeOf(lang), { hour: "numeric", minute: "2-digit" }).format(date);
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(localeOf(lang), {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(date);
}

export function formatClockLabel(time: string, lang: Lang): string {
  const [hour, minute] = time.split(":").map(Number);
  const date = new Date();
  date.setHours(hour || 0, minute || 0, 0, 0);
  return formatTime(date, lang);
}

export function joinList(items: string[], andWord: string): string {
  if (items.length <= 1) return items[0] ?? "";
  return `${items.slice(0, -1).join(", ")} ${andWord} ${items[items.length - 1]}`;
}

export function relationForCall(contact: Contact, lang: Lang): string {
  if (contact.relation === "other") return tx(contact.relationLabel, lang);
  return t(lang, contact.relation);
}

export const defaultMedicines: Medicine[] = [
  {
    id: "bp",
    name: loc("Blood pressure tablet", "ब्लड प्रेशर की गोली", "இரத்த அழுத்த மாத்திரை"),
    dose: loc("One tablet", "एक गोली", "ஒரு மாத்திரை"),
    time: "08:00",
  },
  {
    id: "sugar",
    name: loc("Sugar tablet", "शुगर की गोली", "சர்க்கரை மாத்திரை"),
    dose: loc("One tablet after food", "खाने के बाद एक गोली", "சாப்பிட்ட பிறகு ஒரு மாத்திரை"),
    time: "14:00",
  },
  {
    id: "calcium",
    name: loc("Calcium tablet", "कैल्शियम की गोली", "கால்சியம் மாத்திரை"),
    dose: loc("One tablet", "एक गोली", "ஒரு மாத்திரை"),
    time: "20:00",
  },
];

export const defaultContacts: Contact[] = [
  {
    id: "arun",
    name: "Arun",
    relation: "son",
    relationLabel: loc("son", "बेटा", "மகன்"),
    phone: "98000 11111",
  },
  {
    id: "meera",
    name: "Meera",
    relation: "daughter",
    relationLabel: loc("daughter", "बेटी", "மகள்"),
    phone: "98000 22222",
  },
  {
    id: "rohan",
    name: "Rohan",
    relation: "grandson",
    relationLabel: loc("grandson", "पोता", "பேரன்"),
    phone: "98000 33333",
  },
];

export const practicePhrases: PracticePhrase[] = [
  { id: "time", text: loc("What is the time?", "समय क्या है?", "இப்போது நேரம் என்ன?") },
  { id: "tablets", text: loc("Remind me about my tablets", "मेरी दवा याद दिलाओ", "என் மாத்திரையை நினைவூட்டு") },
  { id: "son", text: loc("Call my son", "बेटे को कॉल करो", "மகனை அழை") },
  { id: "date", text: loc("What is today's date?", "आज की तारीख क्या है?", "இன்றைய தேதி என்ன?") },
  { id: "next", text: loc("When is my next tablet?", "अगली गोली कब है?", "அடுத்த மாத்திரை எப்போது?") },
  { id: "kind", text: loc("Say something kind", "कोई अच्छी बात बताओ", "ஒரு நல்ல வார்த்தை சொல்") },
  { id: "weather", text: loc("How is the weather?", "मौसम कैसा है?", "வானிலை எப்படி உள்ளது?") },
  {
    id: "advice",
    text: loc("Should I take two tablets?", "क्या मैं दो गोली ले लूँ?", "இரண்டு மாத்திரை எடுக்கலாமா?"),
    tricky: true,
  },
  {
    id: "unwell",
    text: loc("I do not feel well", "तबीयत ठीक नहीं", "உடல்நிலை சரியில்லை"),
    tricky: true,
  },
  {
    id: "ramesh",
    text: loc("Call Ramesh", "रमेश को कॉल करो", "ரமேஷை அழை"),
    tricky: true,
  },
  {
    id: "noise",
    text: loc("Too much noise around me", "आस-पास बहुत शोर है", "சுற்றி நிறைய இரைச்சல்"),
    noise: true,
  },
];
