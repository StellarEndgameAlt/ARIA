import type { Lang } from "./data";
import { localeOf } from "./data";
import { speakLine } from "./tts";

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
let ticket = 0;
let player: HTMLAudioElement | null = null;
const clips = new Map<string, string>();

function clipUrl(audio: string): string {
  const binary = atob(audio);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
  return URL.createObjectURL(new Blob([bytes], { type: "audio/mpeg" }));
}

function systemSpeak(text: string, lang: Lang, rate: number, voice: SpeechSynthesisVoice | null): void {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = localeOf(lang);
  utterance.rate = rate;
  utterance.pitch = 1;
  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
}

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
  if (typeof window === "undefined" || !text.trim()) return;
  stopSpeak();
  const mine = ticket;
  if (lang === "en") {
    systemSpeak(text, lang, rate, pickVoice(lang));
    return;
  }
  const key = `${lang}\n${text}`;
  const cached = clips.get(key);
  const play = (url: string) => {
    if (mine !== ticket) return;
    const audio = new Audio(url);
    audio.playbackRate = Math.min(1, Math.max(0.65, rate));
    player = audio;
    void audio.play().catch(() => {
      if (mine === ticket) systemSpeak(text, lang, rate, null);
    });
  };
  if (cached) {
    play(cached);
    return;
  }
  void speakLine({ data: { text, lang } })
    .then((result) => {
      if (!result.ok) {
        if (mine === ticket) systemSpeak(text, lang, rate, null);
        return;
      }
      const url = clipUrl(result.audio);
      if (clips.size > 24) {
        const first = clips.keys().next().value;
        if (first) {
          URL.revokeObjectURL(clips.get(first) ?? "");
          clips.delete(first);
        }
      }
      clips.set(key, url);
      play(url);
    })
    .catch(() => {
      if (mine === ticket) systemSpeak(text, lang, rate, null);
    });
}

export function stopSpeak(): void {
  ticket += 1;
  if (typeof window !== "undefined" && window.speechSynthesis) window.speechSynthesis.cancel();
  if (player) {
    player.pause();
    player.src = "";
    player = null;
  }
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
