import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { ArrowLeft, Volume2 } from "lucide-react";
import { t } from "@/lib/mitra/i18n";
import { intentKey } from "@/lib/mitra/intents";
import { speak } from "@/lib/mitra/speech";
import { useMitra } from "@/lib/mitra/store";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto h-dvh max-h-dvh w-full max-w-xl overflow-hidden">
      <div className="h-full overflow-y-auto overscroll-y-contain">
        <div className="flex min-h-full flex-col px-5 py-5">{children}</div>
      </div>
    </main>
  );
}

export function Mark({ className = "size-8", badge = false }: { className?: string; badge?: boolean }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      {badge ? <rect width="32" height="32" rx="8" fill="#1B4332" /> : null}
      <path
        d="M8 25.8 16 6.6 24 25.8"
        fill="none"
        stroke={badge ? "#F3EBDD" : "currentColor"}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3 18.8c1.5-2.2 3.05-3.2 4.7-3.2s3.2 1 4.7 3.2"
        fill="none"
        stroke={badge ? "#F0B48A" : "#7C2D12"}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Wordmark() {
  const lang = useMitra((state) => state.lang);
  return (
    <div className="flex min-w-0 items-center gap-2.5 text-forest">
      <Mark badge className="size-12 shrink-0" />
      <span className="min-w-0 leading-none">
        <span className="block text-2xl font-semibold tracking-tight">{t(lang, "brand")}</span>
        <span className="mt-1 block text-sm font-medium leading-tight text-pretty text-muted">
          {t(lang, "tagline")}
        </span>
      </span>
    </div>
  );
}

const toneClass = {
  forest: "bg-forest text-paper",
  clay: "bg-clay text-paper",
  card: "border border-line bg-card text-ink",
} as const;

export function BigButton({
  tone = "card",
  icon,
  title,
  sub,
  onClick,
}: {
  tone?: keyof typeof toneClass;
  icon?: ReactNode;
  title: string;
  sub?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex min-h-20 w-full items-center gap-4 rounded-3xl px-5 py-3 text-left transition-transform active:scale-[0.99] motion-reduce:transform-none ${toneClass[tone]}`}
    >
      {icon ? (
        <span className={`shrink-0 ${tone === "card" ? "text-forest" : "text-paper"}`}>{icon}</span>
      ) : null}
      <span className="min-w-0">
        <span className="block text-2xl leading-tight font-semibold text-balance">{title}</span>
        {sub ? <span className="mt-1 block text-lg leading-snug text-pretty">{sub}</span> : null}
      </span>
    </button>
  );
}

export function Bubble({ text }: { text: string }) {
  const lang = useMitra((state) => state.lang);
  const rate = useMitra((state) => state.rate);
  return (
    <div className="flex items-start gap-3 rounded-3xl border border-line bg-card p-4">
      <button
        type="button"
        aria-label={t(lang, "hear")}
        onClick={() => speak(text, lang, rate)}
        className="grid size-14 shrink-0 place-items-center rounded-2xl bg-forest text-paper"
      >
        <Volume2 className="size-7" strokeWidth={2.25} />
      </button>
      <p className="pt-2 text-xl leading-snug font-medium text-pretty" aria-live="polite">
        {text}
      </p>
    </div>
  );
}

export function useAutoSpeak(line: string | null) {
  const lang = useMitra((state) => state.lang);
  const rate = useMitra((state) => state.rate);
  const last = useRef<string | null>(null);

  useEffect(() => {
    if (!line || last.current === line) return;
    last.current = line;
    speak(line, lang, rate);
  }, [line, lang, rate]);
}

export function BackButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mb-4 inline-flex min-h-14 items-center gap-2 text-lg font-semibold text-forest"
    >
      <ArrowLeft className="size-6" strokeWidth={2.25} />
      {label}
    </button>
  );
}

export function Understood() {
  const lang = useMitra((state) => state.lang);
  const heard = useMitra((state) => state.heard);
  const intent = useMitra((state) => state.intent);
  if (!heard || !intent) return null;
  return (
    <p className="text-lg leading-snug text-pretty text-muted">
      {t(lang, "heard")}: {heard}
      <span className="mt-1 block">{t(lang, "matched", { what: t(lang, intentKey(intent)) })}</span>
    </p>
  );
}

export const fieldClass =
  "min-h-14 w-full rounded-2xl border border-line bg-card px-4 text-xl text-ink outline-none";
