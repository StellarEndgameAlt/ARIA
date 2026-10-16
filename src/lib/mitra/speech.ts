import type { Lang } from "./data";
import { localeOf } from "./data";

type RecResult = {
  results: ArrayLike<ArrayLike<{ transcript: string }>>;
};

type RecError = { error?: string };

type Rec = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((event: RecResult) => void) | null;
  onerror: ((event: RecError) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
  abort: () => void;
};

type Session = { settled: boolean; rec: Rec | null };

let active: Session | null = null;

function getRecognition(): (new () => Rec) | null {
  if (typeof window === "undefined") return null;
  const host = window as unknown as {
    SpeechRecognition?: new () => Rec;
    webkitSpeechRecognition?: new () => Rec;
  };
  return host.SpeechRecognition ?? host.webkitSpeechRecognition ?? null;
}

function pickVoice(lang: Lang): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;
  const voices = window.speechSynthesis.getVoices();
  const wanted = localeOf(lang).toLowerCase();
  const prefix = wanted.slice(0, 2);
  return (
    voices.find((voice) => voice.lang.toLowerCase().replace("_", "-") === wanted) ??
    voices.find((voice) => voice.lang.toLowerCase().replace("_", "-").startsWith(prefix)) ??
    null
  );
}

export function speak(text: string, lang: Lang, rate: number): void {
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

export function stopSpeak(): void {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
}

export function warmVoices(): void {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}

export function startListening(
  lang: Lang,
  handlers: {
    onText: (text: string) => void;
    onFail: (reason: "noise" | "nomic") => void;
  },
): boolean {
  stopListening();
  const Ctor = getRecognition();
  if (!Ctor) {
    handlers.onFail("nomic");
    return false;
  }

  const session: Session = { settled: false, rec: null };
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
    } catch {
      /* already stopped */
    }
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
    } catch {
      /* ignore */
    }
  }, 9000);

  return true;
}

export function stopListening(): void {
  const session = active;
  active = null;
  if (!session) return;
  session.settled = true;
  try {
    session.rec?.abort();
  } catch {
    /* ignore */
  }
}
