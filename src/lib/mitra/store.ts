import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import {
  type Contact,
  type Lang,
  type Localized,
  type Medicine,
  defaultContacts,
  defaultMedicines,
  focusMedicine,
  medStatus,
  todayKey,
} from "@/lib/mitra/data";
import { type Intent, parseUtterance } from "@/lib/mitra/intents";
import { stopListening, stopSpeak } from "@/lib/mitra/speech";

export type View =
  | "home"
  | "listen"
  | "medicine"
  | "call"
  | "confirm"
  | "calling"
  | "ask"
  | "safety"
  | "fallback"
  | "family";

export type AskKind = "time" | "date" | "weather" | "who" | "kind" | "next";
export type SafetyKind = "advice" | "unwell";
export type FallbackKind = "unknown" | "noise" | "nomic" | "name";
export type BannerKind = "marked" | "snoozed" | "scheduled";

let pendingLang: Lang | null = null;

export function noteLangChoice(lang: Lang) {
  if (!useMitra.persist.hasHydrated()) pendingLang = lang;
}

export function takePendingLang(): Lang | null {
  const lang = pendingLang;
  pendingLang = null;
  return lang;
}

const SNOOZE_MS = 10 * 60 * 1000;

type Memory = {
  welcomed: boolean;
  lang: Lang;
  seniorName: string;
  rate: number;
  medicines: Medicine[];
  contacts: Contact[];
  taken: Record<string, string[]>;
  snooze: Record<string, number>;
  view: View;
  heard: string;
  intent: Intent | null;
  contactId: string | null;
  ask: AskKind | null;
  safety: SafetyKind | null;
  fallback: FallbackKind | null;
  unknownName: string;
  banner: BannerKind | null;
};

type Actions = {
  chooseLang: (lang: Lang) => void;
  setLang: (lang: Lang) => void;
  setRate: (rate: number) => void;
  setSeniorName: (name: string) => void;
  setView: (view: View) => void;
  submit: (raw: string) => void;
  fail: (reason: "noise" | "nomic") => void;
  showNoise: (heard: string) => void;
  goHome: () => void;
  openMedicine: () => void;
  openCall: () => void;
  openAsk: () => void;
  openFamily: () => void;
  openConfirm: (contactId: string) => void;
  startCall: () => void;
  backToCall: () => void;
  markTaken: (id: string, heard?: string, intent?: Intent | null) => void;
  remindLater: (id: string, heard?: string, intent?: Intent | null) => void;
  clearBanner: () => void;
  openSafety: (safety: SafetyKind) => void;
  callFamily: () => void;
  saveMedicine: (id: string, patch: { name: Localized; dose: Localized; time: string }) => void;
  addMedicine: (patch: { name: Localized; dose: Localized; time: string }) => void;
  removeMedicine: (id: string) => void;
  saveContact: (id: string, patch: Omit<Contact, "id">) => void;
  addContact: (patch: Omit<Contact, "id">) => void;
  removeContact: (id: string) => boolean;
  restore: () => void;
};

const cleared = {
  heard: "",
  intent: null as Intent | null,
  banner: null as BannerKind | null,
  ask: null as AskKind | null,
  safety: null as SafetyKind | null,
  fallback: null as FallbackKind | null,
  unknownName: "",
};

function memoryStorage() {
  return {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
  };
}

export const useMitra = create<Memory & Actions>()(
  persist(
    (set, get) => ({
      welcomed: false,
      lang: "en",
      seniorName: "Kamala",
      rate: 0.85,
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

      chooseLang: (lang) => set({ lang, welcomed: true, view: "home", ...cleared }),
      setLang: (lang) => set({ lang }),
      setRate: (rate) => set({ rate }),
      setSeniorName: (name) => set({ seniorName: name.trim() || get().seniorName }),
      setView: (view) => set({ view }),

      submit: (raw) => {
        const state = get();
        const now = new Date();
        const mode = state.view === "confirm" ? "confirm" : state.view === "medicine" ? "medicine" : undefined;
        const intent = parseUtterance(raw, state.contacts, mode);
        const takenToday = state.taken[todayKey(now)] ?? [];
        const focused = focusMedicine(state.medicines, now, takenToday, state.snooze);
        const heard = raw.trim();

        if (state.view === "confirm" && state.contactId) {
          if (intent.type === "yes") {
            set({ heard, intent, view: "calling", banner: null });
            return;
          }
          if (intent.type === "no") {
            set({ heard, intent, view: "call", contactId: null, banner: null });
            return;
          }
        }

        if (intent.type === "took") {
          if (focused) get().markTaken(focused.id, heard, intent);
          else set({ heard, intent, view: "medicine", banner: null });
          return;
        }
        if (intent.type === "later") {
          if (focused) get().remindLater(focused.id, heard, intent);
          else set({ heard, intent, view: "medicine", banner: null });
          return;
        }

        switch (intent.type) {
          case "medicine":
            set({ heard, intent, view: "medicine", banner: null, safety: null });
            return;
          case "call":
            set({ heard, intent, view: "confirm", contactId: intent.contactId, banner: null });
            return;
          case "call_list":
            set({ heard, intent, view: "call", contactId: null, banner: null });
            return;
          case "unknown_name":
            set({
              heard,
              intent,
              view: "fallback",
              fallback: "name",
              unknownName: intent.name,
              banner: null,
            });
            return;
          case "time":
          case "date":
          case "weather":
          case "who":
          case "kind":
          case "next":
            set({ heard, intent, view: "ask", ask: intent.type, banner: null });
            return;
          case "advice":
            set({ heard, intent, view: "safety", safety: "advice", banner: null });
            return;
          case "unwell":
            set({ heard, intent, view: "safety", safety: "unwell", banner: null });
            return;
          case "yes":
            set({ heard, intent, view: "fallback", fallback: "unknown", banner: null });
            return;
          case "no":
            set({ heard, intent, view: "home", banner: null });
            return;
          default:
            set({ heard, intent, view: "fallback", fallback: "unknown", banner: null });
        }
      },

      fail: (reason) => {
        stopListening();
        set({ view: "fallback", fallback: reason, heard: "", intent: null, banner: null });
      },

      showNoise: (heard) =>
        set({ view: "fallback", fallback: "noise", heard, intent: { type: "unknown" }, banner: null }),

      goHome: () => {
        stopListening();
        stopSpeak();
        set({ view: "home", contactId: null, ...cleared });
      },

      openMedicine: () => {
        stopSpeak();
        set({ view: "medicine", contactId: null, ...cleared });
      },

      openCall: () => {
        stopSpeak();
        set({ view: "call", contactId: null, ...cleared });
      },

      openAsk: () => {
        stopSpeak();
        set({ view: "ask", ...cleared });
      },

      openFamily: () => {
        stopSpeak();
        set({ view: "family", contactId: null, ...cleared });
      },

      openConfirm: (contactId) => {
        stopSpeak();
        set({ view: "confirm", contactId, ...cleared });
      },

      startCall: () => set({ view: "calling", banner: null }),

      backToCall: () => {
        stopSpeak();
        set({ view: "call", contactId: null, heard: "", intent: null, banner: null });
      },

      markTaken: (id, heard, intent) => {
        const key = todayKey();
        set((state) => {
          const prev = state.taken[key] ?? [];
          return {
            taken: { ...state.taken, [key]: prev.includes(id) ? prev : [...prev, id] },
            snooze: { ...state.snooze, [id]: 0 },
            view: "medicine",
            banner: "marked",
            heard: heard ?? "",
            intent: intent === undefined ? state.intent : intent,
          };
        });
      },

      remindLater: (id, heard, intent) => {
        const state = get();
        const now = new Date();
        const med = state.medicines.find((item) => item.id === id);
        const status = med
          ? medStatus(med, now, state.taken[todayKey(now)] ?? [], state.snooze[id])
          : "waiting";
        if (status === "due") {
          set({
            snooze: { ...state.snooze, [id]: now.getTime() + SNOOZE_MS },
            view: "medicine",
            banner: "snoozed",
            heard: heard ?? "",
            intent: intent === undefined ? state.intent : intent,
          });
          return;
        }
        set({
          view: "medicine",
          banner: "scheduled",
          heard: heard ?? "",
          intent: intent === undefined ? state.intent : intent,
        });
      },

      clearBanner: () => set({ banner: null, heard: "", intent: null }),

      openSafety: (safety) => {
        stopSpeak();
        set({ ...cleared, view: "safety", safety });
      },

      callFamily: () => {
        const contacts = get().contacts;
        const person = contacts.find((contact) => contact.relation === "son") ?? contacts[0];
        if (!person) return;
        stopSpeak();
        set({ ...cleared, view: "confirm", contactId: person.id });
      },

      saveMedicine: (id, patch) =>
        set((state) => ({
          medicines: state.medicines.map((med) => (med.id === id ? { ...med, ...patch } : med)),
        })),

      addMedicine: (patch) =>
        set((state) => ({
          medicines: [...state.medicines, { id: crypto.randomUUID(), ...patch }].sort((a, b) =>
            a.time.localeCompare(b.time),
          ),
        })),

      removeMedicine: (id) =>
        set((state) => ({ medicines: state.medicines.filter((med) => med.id !== id) })),

      saveContact: (id, patch) =>
        set((state) => ({
          contacts: state.contacts.map((contact) => (contact.id === id ? { id, ...patch } : contact)),
        })),

      addContact: (patch) =>
        set((state) => ({
          contacts: [...state.contacts, { id: crypto.randomUUID(), ...patch }],
        })),

      removeContact: (id) => {
        if (get().contacts.length <= 1) return false;
        set((state) => ({ contacts: state.contacts.filter((contact) => contact.id !== id) }));
        return true;
      },

      restore: () =>
        set({
          seniorName: "Kamala",
          medicines: defaultMedicines,
          contacts: defaultContacts,
          taken: {},
          snooze: {},
          rate: 0.85,
          view: "family",
          contactId: null,
          ...cleared,
        }),
    }),
    {
      name: "mitra-v1",
      skipHydration: true,
      storage: createJSONStorage(() =>
        typeof window === "undefined" ? memoryStorage() : localStorage,
      ),
      partialize: (state) => ({
        welcomed: state.welcomed,
        lang: state.lang,
        seniorName: state.seniorName,
        rate: state.rate,
        medicines: state.medicines,
        contacts: state.contacts,
        taken: state.taken,
        snooze: state.snooze,
      }),
    },
  ),
);
