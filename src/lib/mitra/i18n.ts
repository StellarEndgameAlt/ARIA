import type { Lang } from "./languages";
import bn from "./copy/bn";
import gu from "./copy/gu";
import hi from "./copy/hi";
import kn from "./copy/kn";
import ml from "./copy/ml";
import mr from "./copy/mr";
import or from "./copy/or";
import pa from "./copy/pa";
import ta from "./copy/ta";
import te from "./copy/te";
import ur from "./copy/ur";

const en = {
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
  notUnderstood: "I did not understand. Please say that again, or tap a button.",
  noisy: "I could not hear you clearly. Please say it again somewhere quiet.",
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
  medIntro:
    "These tablets were saved by your family from the doctor's note. ARIA never changes the dose, and never gives medical advice.",
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
  safetyAdvice:
    "I cannot give a medical decision. Please check with your doctor or pharmacist, and take only what they prescribed. If you are unsure, I can call your family.",
  safetyUnwell:
    "I am sorry you feel unwell. I cannot give medical advice. If you need help, I can call your family now.",
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
  familyLead:
    "Set this up once. Copy tablets from the doctor's note. ARIA will only remind. ARIA will never give medical advice.",
  personaTitle: "Who this practice is for",
  personaBody:
    "Kamala is 74. She uses the language you set here. Small phone text is hard on her eyes, and stiff fingers miss tiny buttons. She needs tablet reminders, a careful call to family, and simple answers. She does not need medical advice from an app.",
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
  langTa: "தமிழ்",
} as const;

export type CopyKey = keyof typeof en;

export type Copy = { [K in CopyKey]: string };

const dicts: Record<Lang, Copy> = { en, hi, bn, te, mr, ta, ur, gu, kn, or, ml, pa };

export function hasLang(_lang: Lang): boolean {
  return true;
}

export function ensureLang(lang: Lang): Promise<Copy> {
  return Promise.resolve(dicts[lang] ?? en);
}

export function prefetchLangs(): void {}

export function t(lang: Lang, key: CopyKey, vars?: Record<string, string>): string {
  const dict = dicts[lang] ?? en;
  let text = dict[key] ?? en[key];
  if (vars) {
    for (const [name, value] of Object.entries(vars)) text = text.replaceAll(`{${name}}`, value);
  }
  return text;
}
