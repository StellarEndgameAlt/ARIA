import { useEffect, useState } from "react";
import {
  Check,
  CloudSun,
  MessageCircle,
  Mic,
  Phone,
  PhoneOff,
  Pill,
  Plus,
  UserRound,
  Volume2,
} from "lucide-react";
import {
  type Contact,
  type Medicine,
  type MedStatus,
  type Relation,
  editLocalized,
  fillLang,
  focusMedicine,
  formatClockLabel,
  formatDate,
  formatTime,
  joinList,
  medStatus,
  practicePhrases,
  relationForCall,
  todayKey,
  tx,
} from "@/lib/mitra/data";
import { t } from "@/lib/mitra/i18n";
import { LANGUAGES, preloadPickerFonts, type Lang } from "@/lib/mitra/languages";
import { phrase, yearsOld } from "@/lib/mitra/phrases";
import { speak } from "@/lib/mitra/speech";
import { noteLangChoice, type Role, useMitra } from "@/lib/mitra/store";
import { loadWeather, peekWeather } from "@/lib/mitra/weather";
import {
  BackButton,
  BigButton,
  Bubble,
  Mark,
  Understood,
  Wordmark,
  fieldClass,
  useAutoSpeak,
} from "@/components/mitra/ui";
import { useVoice } from "@/components/mitra/voice";

function useNow() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = window.setInterval(tick, 15000);
    return () => window.clearInterval(id);
  }, []);
  return now;
}

export function LanguageScreen({ mode }: { mode: "first" | "change" }) {
  const lang = useMitra((state) => state.lang);
  const chooseLang = useMitra((state) => state.chooseLang);
  const setLang = useMitra((state) => state.setLang);
  const goHome = useMitra((state) => state.goHome);
  const name = useMitra((state) => state.seniorName);
  const rate = useMitra((state) => state.rate);

  useEffect(() => {
    preloadPickerFonts();
  }, []);

  function pick(code: Lang) {
    noteLangChoice(code);
    if (mode === "first") {
      chooseLang(code);
      speak(t(code, "welcomeSpeak", { name }), code, rate);
      return;
    }
    setLang(code);
    speak(phrase(code, "switched"), code, rate);
  }

  return (
    <div className="flex flex-col gap-4 pb-4">
      {mode === "change" ? <BackButton label={t(lang, "back")} onClick={goHome} /> : null}
      <div className="sticky top-0 z-10 -mx-5 bg-paper px-5 pb-3">
        <div className="flex items-center gap-3">
          <Mark badge className="size-14 shrink-0" />
          <div className="min-w-0">
            <h1 className="text-3xl font-semibold tracking-tight text-forest">ARIA</h1>
            <p className="text-base font-medium text-muted">{t(lang, "tagline")}</p>
          </div>
        </div>
        <p className="mt-4 text-2xl font-semibold">{phrase(lang, "chooseTitle")}</p>
        <p className="mt-1 text-lg leading-snug text-pretty text-muted">{phrase(lang, "chooseHint")}</p>
      </div>
      <div className="overflow-hidden rounded-3xl border border-line bg-card" role="listbox" aria-label={phrase(lang, "chooseTitle")}>
        {LANGUAGES.map((option, index) => {
          const selected = mode === "change" && option.code === lang;
          return (
            <button
              key={option.code}
              type="button"
              role="option"
              lang={option.locale}
              dir={option.code === "ur" ? "rtl" : "ltr"}
              aria-selected={selected}
              onClick={() => pick(option.code)}
              className={`flex min-h-20 w-full items-center justify-between gap-3 px-5 text-left ${
                index > 0 ? "border-t border-line" : ""
              } ${selected ? "bg-forest text-paper" : "text-ink"}`}
            >
              <span className="min-w-0">
                <span className="block text-3xl leading-tight font-semibold">{option.native}</span>
                {option.code === "en" ? null : (
                  <span className={`block text-lg ${selected ? "text-paper/80" : "text-muted"}`}>{option.english}</span>
                )}
              </span>
              {selected ? <Check className="size-7 shrink-0" strokeWidth={2.5} /> : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function HomeScreen() {
  const lang = useMitra((state) => state.lang);
  const name = useMitra((state) => state.seniorName);
  const medicines = useMitra((state) => state.medicines);
  const taken = useMitra((state) => state.taken);
  const snooze = useMitra((state) => state.snooze);
  const openMedicine = useMitra((state) => state.openMedicine);
  const openCall = useMitra((state) => state.openCall);
  const openAsk = useMitra((state) => state.openAsk);
  const openWeather = useMitra((state) => state.openWeather);
  const openFamily = useMitra((state) => state.openFamily);
  const openAbout = useMitra((state) => state.openAbout);
  const openLanguages = useMitra((state) => state.openLanguages);
  const role = useMitra((state) => state.role);
  const now = useNow();
  const { start } = useVoice();
  const due = now
    ? medicines.find(
        (med) => medStatus(med, now, taken[todayKey(now)] ?? [], snooze[med.id]) === "due",
      )
    : null;

  return (
    <div className="flex flex-1 flex-col gap-5">
      <div className="flex items-center justify-between gap-3">
        <Wordmark />
        <span className="shrink-0 rounded-full bg-forest px-3 py-1 text-lg font-semibold text-paper">
          {t(lang, "ready")}
        </span>
      </div>
      <button
        type="button"
        onClick={openLanguages}
        className="flex min-h-16 items-center justify-between gap-3 rounded-3xl border border-line bg-card px-5 text-left"
      >
        <span className="text-xl font-semibold">{phrase(lang, "languageBtn")}</span>
        <span className="text-2xl font-semibold text-forest">
          {LANGUAGES.find((item) => item.code === lang)?.native}
        </span>
      </button>
      <div>
        <p className="text-2xl text-muted">{t(lang, "hello")}</p>
        <h1 className="text-5xl leading-tight font-semibold">{name}</h1>
        <Clock />
      </div>
      <Bubble text={t(lang, "homeLine")} />
      <p className="text-lg leading-snug text-pretty text-muted">{t(lang, "safetyHome")}</p>
      <div className="flex flex-col items-center gap-3 py-2">
        <button
          type="button"
          onClick={start}
          aria-label={t(lang, "tapSpeak")}
          className="grid size-36 place-items-center rounded-full border-8 border-line bg-forest text-paper transition-transform active:scale-95 motion-reduce:transform-none"
        >
          <Mic className="size-14" strokeWidth={2.25} />
        </button>
        <p className="text-xl font-semibold">{t(lang, "tapSpeak")}</p>
      </div>
      {due ? (
        <button
          type="button"
          onClick={openMedicine}
          className="min-h-16 rounded-3xl bg-clay px-5 py-4 text-left text-xl font-semibold text-paper"
        >
          {t(lang, "dueBanner", { med: tx(due.name, lang) })}
        </button>
      ) : null}
      <div className="flex flex-col gap-3">
        <BigButton
          title={t(lang, "medicine")}
          sub={t(lang, "medicineSub")}
          icon={<Pill className="size-8" strokeWidth={2.25} />}
          onClick={openMedicine}
        />
        <BigButton
          title={t(lang, "call")}
          sub={t(lang, "callSub")}
          icon={<Phone className="size-8" strokeWidth={2.25} />}
          onClick={openCall}
        />
        <BigButton
          title={phrase(lang, "weatherBtn")}
          sub={phrase(lang, "weatherSub")}
          icon={<CloudSun className="size-8" strokeWidth={2.25} />}
          onClick={openWeather}
        />
        <BigButton
          title={t(lang, "ask")}
          sub={t(lang, "askSub")}
          icon={<MessageCircle className="size-8" strokeWidth={2.25} />}
          onClick={openAsk}
        />
      </div>
      <div className="flex flex-col gap-2">
        <button
          type="button"
          onClick={openAbout}
          className="flex min-h-14 flex-wrap items-center justify-center gap-x-2 gap-y-1 px-3 text-center text-lg font-semibold text-forest"
        >
          <UserRound className="size-5" strokeWidth={2.25} />
          {phrase(lang, "about")}
          <span className="text-muted">· {phrase(lang, role === "parent" ? "roleParent" : role === "student" ? "roleStudent" : "roleSenior")}</span>
        </button>
        <button
          type="button"
          onClick={openFamily}
          className="mx-auto min-h-14 px-3 text-lg font-semibold text-forest"
        >
          {t(lang, "family")}
        </button>
      </div>
    </div>
  );
}

function Clock() {
  const lang = useMitra((state) => state.lang);
  const now = useNow();
  return (
    <p className="mt-1 min-h-10 text-2xl font-semibold text-forest tabular-nums">
      <span className="sr-only">{t(lang, "clockNow")} </span>
      {now ? formatTime(now, lang) : "\u00a0"}
    </p>
  );
}

export function ListenScreen() {
  const lang = useMitra((state) => state.lang);
  const { cancel } = useVoice();
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 text-center">
      <div className="relative grid size-44 place-items-center">
        <span className="mitra-ring absolute inset-0 rounded-full border-4 border-forest" />
        <span className="mitra-ring mitra-ring-late absolute inset-0 rounded-full border-4 border-forest" />
        <span className="grid size-28 place-items-center rounded-full bg-forest text-paper">
          <Mic className="size-12" strokeWidth={2.25} />
        </span>
      </div>
      <div>
        <h1 className="text-4xl font-semibold">{t(lang, "listening")}</h1>
        <p className="mt-2 text-xl text-muted">{t(lang, "speakSlowly")}</p>
      </div>
      <button
        type="button"
        onClick={cancel}
        className="min-h-16 w-full max-w-sm rounded-3xl border border-line bg-card text-2xl font-semibold"
      >
        {t(lang, "cancel")}
      </button>
    </div>
  );
}

export function MedicineScreen() {
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
  const [now] = useState(() => new Date());
  const takenToday = taken[todayKey(now)] ?? [];
  const focused = focusMedicine(medicines, now, takenToday, snooze);
  const focusedStatus = focused ? medStatus(focused, now, takenToday, snooze[focused.id]) : null;

  let line = t(lang, "noMeds");
  if (medicines.length === 0) line = t(lang, "noMeds");
  else if (banner === "marked") line = t(lang, "marked", { name });
  else if (banner === "snoozed") line = t(lang, "snoozed");
  else if (banner === "scheduled" && focused) {
    line = t(lang, "stillScheduled", { time: formatClockLabel(focused.time, lang) });
  } else if (!focused) line = t(lang, "allDoneLine", { name });
  else if (focusedStatus === "due") {
    line = t(lang, "dueLine", {
      name,
      med: tx(focused.name, lang),
      dose: tx(focused.dose, lang),
    });
  } else if (focused) {
    line = t(lang, "nextLine", {
      name,
      med: tx(focused.name, lang),
      time: formatClockLabel(focused.time, lang),
    });
  }

  useAutoSpeak(line);
  const showActions = Boolean(focused) && !banner;
  const ordered = [...medicines].sort((a, b) => a.time.localeCompare(b.time));

  return (
    <div className="flex flex-col gap-4">
      <BackButton label={t(lang, "backHome")} onClick={goHome} />
      <h1 className="text-4xl font-semibold">{t(lang, "medicine")}</h1>
      <Bubble text={line} />
      <Understood />
      {medicines.length > 0 ? (
        <p className="text-lg leading-snug text-pretty text-muted">{t(lang, "medIntro")}</p>
      ) : (
        <BigButton tone="forest" title={t(lang, "family")} onClick={openFamily} />
      )}
      {banner ? <BigButton tone="forest" title={t(lang, "goOn")} onClick={clearBanner} /> : null}
      {showActions && focused ? (
        <div className="flex flex-col gap-3">
          <BigButton
            tone="forest"
            title={t(lang, "yesTook")}
            onClick={() => markTaken(focused.id, "", null)}
          />
          <BigButton title={t(lang, "remindLater")} onClick={() => remindLater(focused.id, "", null)} />
          <BigButton title={t(lang, "feelUnwell")} onClick={() => openSafety("unwell")} />
        </div>
      ) : null}
      <div className="flex flex-col gap-3">
        {ordered.map((med) => (
          <MedicineRow
            key={med.id}
            med={med}
            status={medStatus(med, now, takenToday, snooze[med.id])}
            onHear={() =>
              speak(
                t(lang, "rowLine", {
                  time: formatClockLabel(med.time, lang),
                  med: tx(med.name, lang),
                  dose: tx(med.dose, lang),
                }),
                lang,
                rate,
              )
            }
          />
        ))}
      </div>
    </div>
  );
}

function MedicineRow({
  med,
  status,
  onHear,
}: {
  med: Medicine;
  status: MedStatus;
  onHear: () => void;
}) {
  const lang = useMitra((state) => state.lang);
  const label =
    status === "due"
      ? t(lang, "statusDue")
      : status === "taken"
        ? t(lang, "statusTaken")
        : status === "later"
          ? t(lang, "statusLater")
          : t(lang, "statusWaiting");
  const pillClass =
    status === "due"
      ? "bg-clay text-paper"
      : status === "taken"
        ? "bg-forest text-paper"
        : "border border-line bg-card text-ink";

  return (
    <article className="rounded-3xl border border-line bg-card p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-3xl font-semibold text-forest tabular-nums">
            {formatClockLabel(med.time, lang)}
          </p>
          <h2 className="text-2xl leading-tight font-semibold">{tx(med.name, lang)}</h2>
          <p className="text-lg text-muted">{tx(med.dose, lang)}</p>
        </div>
        <span className={`inline-flex min-h-10 shrink-0 items-center rounded-full px-3 text-lg font-semibold ${pillClass}`}>
          {label}
        </span>
      </div>
      <button
        type="button"
        onClick={onHear}
        className="mt-3 flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl border border-line text-lg font-semibold"
      >
        <Volume2 className="size-5" strokeWidth={2.25} />
        {t(lang, "hear")}
      </button>
    </article>
  );
}

export function CallListScreen() {
  const lang = useMitra((state) => state.lang);
  const contacts = useMitra((state) => state.contacts);
  const goHome = useMitra((state) => state.goHome);
  const openConfirm = useMitra((state) => state.openConfirm);
  const line = t(lang, "callIntro");
  useAutoSpeak(line);

  return (
    <div className="flex flex-col gap-4">
      <BackButton label={t(lang, "backHome")} onClick={goHome} />
      <h1 className="text-4xl font-semibold">{t(lang, "call")}</h1>
      <Bubble text={line} />
      <Understood />
      <div className="flex flex-col gap-3">
        {contacts.map((contact) => (
          <ContactButton key={contact.id} contact={contact} onClick={() => openConfirm(contact.id)} />
        ))}
      </div>
    </div>
  );
}

function ContactButton({ contact, onClick }: { contact: Contact; onClick: () => void }) {
  const lang = useMitra((state) => state.lang);
  const relation =
    contact.relation === "other"
      ? tx(contact.relationLabel, lang) || t(lang, "other")
      : t(lang, contact.relation);
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex min-h-24 w-full items-center gap-4 rounded-3xl border border-line bg-card px-5 py-3 text-left"
    >
      <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-forest text-3xl font-semibold text-paper">
        {contact.name.slice(0, 1)}
      </span>
      <span className="min-w-0">
        <span className="block text-2xl font-semibold">{contact.name}</span>
        <span className="block text-lg text-muted">{relation}</span>
        <span className="block text-lg text-muted tabular-nums">{contact.phone}</span>
      </span>
    </button>
  );
}

export function ConfirmScreen() {
  const lang = useMitra((state) => state.lang);
  const contacts = useMitra((state) => state.contacts);
  const contactId = useMitra((state) => state.contactId);
  const backToCall = useMitra((state) => state.backToCall);
  const startCall = useMitra((state) => state.startCall);
  const contact = contacts.find((item) => item.id === contactId);
  const line = contact
    ? t(lang, "confirmLine", { name: contact.name, relation: relationForCall(contact, lang) })
    : t(lang, "callIntro");
  useAutoSpeak(contact ? line : null);

  useEffect(() => {
    if (!contact) backToCall();
  }, [contact, backToCall]);

  if (!contact) return null;

  return (
    <div className="flex flex-col gap-4">
      <BackButton label={t(lang, "back")} onClick={backToCall} />
      <h1 className="text-4xl font-semibold">{contact.name}</h1>
      <Bubble text={line} />
      <Understood />
      <p className="text-center text-3xl font-semibold tabular-nums">{contact.phone}</p>
      <p className="text-center text-lg text-muted">{t(lang, "sample")}</p>
      <BigButton tone="forest" title={t(lang, "yesCall")} icon={<Phone className="size-8" strokeWidth={2.25} />} onClick={startCall} />
      <BigButton title={t(lang, "noBack")} onClick={backToCall} />
    </div>
  );
}

export function CallingScreen() {
  const lang = useMitra((state) => state.lang);
  const rate = useMitra((state) => state.rate);
  const contacts = useMitra((state) => state.contacts);
  const contactId = useMitra((state) => state.contactId);
  const goHome = useMitra((state) => state.goHome);
  const contact = contacts.find((item) => item.id === contactId);
  const [phase, setPhase] = useState<"ringing" | "connected" | "ended">("ringing");
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!contact) return;
    speak(t(lang, "calling", { name: contact.name }), lang, rate);
    const timer = window.setTimeout(() => {
      setPhase("connected");
      speak(
        `${t(lang, "connected", { name: contact.name })} ${t(lang, "practice")}`,
        lang,
        rate,
      );
    }, 2600);
    return () => window.clearTimeout(timer);
  }, [contact, lang, rate]);

  useEffect(() => {
    if (phase !== "connected") return;
    const id = window.setInterval(() => setSeconds((value) => value + 1), 1000);
    return () => window.clearInterval(id);
  }, [phase]);

  if (!contact) return null;

  const hangUp = () => {
    setPhase("ended");
    speak(t(lang, "ended"), lang, rate);
  };

  const clock = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
      <span className="grid size-28 place-items-center rounded-full bg-forest text-5xl font-semibold text-paper">
        {contact.name.slice(0, 1)}
      </span>
      <div>
        <h1 className="text-4xl font-semibold">{contact.name}</h1>
        <p className="mt-2 text-xl text-muted">
          {phase === "ringing"
            ? t(lang, "calling", { name: contact.name })
            : phase === "connected"
              ? t(lang, "connected", { name: contact.name })
              : t(lang, "ended")}
        </p>
      </div>
      {phase === "connected" ? (
        <p className="text-4xl font-semibold tabular-nums">{clock}</p>
      ) : null}
      <p className="max-w-sm text-lg leading-snug text-pretty text-muted">{t(lang, "practice")}</p>
      {phase === "ended" ? (
        <BigButton tone="forest" title={t(lang, "backHome")} onClick={goHome} />
      ) : (
        <button
          type="button"
          onClick={hangUp}
          className="inline-flex min-h-16 items-center gap-3 rounded-full bg-clay px-8 text-2xl font-semibold text-paper"
        >
          <PhoneOff className="size-7" strokeWidth={2.25} />
          {t(lang, "hangUp")}
        </button>
      )}
    </div>
  );
}

export function AskScreen() {
  const lang = useMitra((state) => state.lang);
  const ask = useMitra((state) => state.ask);
  const name = useMitra((state) => state.seniorName);
  const medicines = useMitra((state) => state.medicines);
  const taken = useMitra((state) => state.taken);
  const snooze = useMitra((state) => state.snooze);
  const goHome = useMitra((state) => state.goHome);
  const submit = useMitra((state) => state.submit);
  const [now] = useState(() => new Date());
  const [forecast, setForecast] = useState<{ lang: Lang; text: string } | null>(null);
  const { start } = useVoice();
  const next = focusMedicine(medicines, now, taken[todayKey(now)] ?? [], snooze);

  useEffect(() => {
    if (ask !== "weather") return;
    let live = true;
    const cached = peekWeather(lang);
    setForecast({ lang, text: cached ?? phrase(lang, "weatherWait") });
    if (!cached) {
      void loadWeather(lang).then((text) => {
        if (live) setForecast({ lang, text });
      });
    }
    return () => {
      live = false;
    };
  }, [ask, lang]);

  let line = t(lang, "askIntro");
  if (ask === "time") line = t(lang, "aTime", { time: formatTime(now, lang) });
  if (ask === "date") line = t(lang, "aDate", { date: formatDate(now, lang) });
  if (ask === "weather") line = forecast?.lang === lang ? forecast.text : phrase(lang, "weatherWait");
  if (ask === "who") line = t(lang, "aWho");
  if (ask === "kind") line = t(lang, "aKind", { name });
  if (ask === "next") {
    line = next
      ? t(lang, "aNext", { med: tx(next.name, lang), time: formatClockLabel(next.time, lang) })
      : t(lang, "aNone");
  }
  useAutoSpeak(line);

  const prompts: { key: "qTime" | "qDate" | "qNext" | "qWho" | "qKind" | "qWeather" }[] = [
    { key: "qTime" },
    { key: "qDate" },
    { key: "qNext" },
    { key: "qWho" },
    { key: "qKind" },
    { key: "qWeather" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <BackButton label={t(lang, "backHome")} onClick={goHome} />
      <h1 className="text-4xl font-semibold">{t(lang, "ask")}</h1>
      <Bubble text={line} />
      <Understood />
      <BigButton
        tone="forest"
        title={t(lang, "tapSpeak")}
        icon={<Mic className="size-8" strokeWidth={2.25} />}
        onClick={start}
      />
      <div className="flex flex-col gap-3">
        {prompts.map((prompt) => (
          <BigButton key={prompt.key} title={t(lang, prompt.key)} onClick={() => submit(t(lang, prompt.key))} />
        ))}
      </div>
    </div>
  );
}

export function SafetyScreen() {
  const lang = useMitra((state) => state.lang);
  const safety = useMitra((state) => state.safety);
  const goHome = useMitra((state) => state.goHome);
  const openMedicine = useMitra((state) => state.openMedicine);
  const callFamily = useMitra((state) => state.callFamily);
  const line = t(lang, safety === "advice" ? "safetyAdvice" : "safetyUnwell");
  useAutoSpeak(line);

  return (
    <div className="flex flex-col gap-4">
      <BackButton label={t(lang, "backHome")} onClick={goHome} />
      <Wordmark />
      <Bubble text={line} />
      <Understood />
      <BigButton
        tone="forest"
        title={t(lang, "callThem")}
        icon={<Phone className="size-8" strokeWidth={2.25} />}
        onClick={callFamily}
      />
      <BigButton title={t(lang, "seeTablets")} onClick={openMedicine} />
    </div>
  );
}

export function FallbackScreen() {
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

  const line =
    fallback === "noise"
      ? t(lang, "noisy")
      : fallback === "nomic"
        ? t(lang, "noMic")
        : fallback === "name"
          ? t(lang, "unknownLine", {
              name: unknownName || t(lang, "someone"),
              list: joinList(
                contacts.map((contact) => contact.name),
                t(lang, "andWord"),
              ),
            })
          : t(lang, "notUnderstood");
  useAutoSpeak(line);

  return (
    <div className="flex flex-col gap-4">
      <BackButton label={t(lang, "backHome")} onClick={goHome} />
      <Bubble text={line} />
      {heard ? (
        <p className="text-lg text-muted">
          {t(lang, "heard")}: {heard}
        </p>
      ) : null}
      {fallback === "name" ? (
        <div className="flex flex-col gap-3">
          {contacts.map((contact) => (
            <ContactButton key={contact.id} contact={contact} onClick={() => openConfirm(contact.id)} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <BigButton
            tone="forest"
            title={t(lang, "tryAgain")}
            icon={<Mic className="size-8" strokeWidth={2.25} />}
            onClick={start}
          />
          <BigButton title={t(lang, "medicine")} onClick={openMedicine} />
          <BigButton title={t(lang, "call")} onClick={openCall} />
        </div>
      )}
    </div>
  );
}

const relations: Relation[] = ["son", "daughter", "grandson", "other"];

export function FamilyScreen() {
  const lang = useMitra((state) => state.lang);
  const seniorName = useMitra((state) => state.seniorName);
  const setSeniorName = useMitra((state) => state.setSeniorName);
  const rate = useMitra((state) => state.rate);
  const setRate = useMitra((state) => state.setRate);
  const medicines = useMitra((state) => state.medicines);
  const contacts = useMitra((state) => state.contacts);
  const goHome = useMitra((state) => state.goHome);
  const openLanguages = useMitra((state) => state.openLanguages);
  const addMedicine = useMitra((state) => state.addMedicine);
  const addContact = useMitra((state) => state.addContact);
  const restore = useMitra((state) => state.restore);
  const submit = useMitra((state) => state.submit);
  const showNoise = useMitra((state) => state.showNoise);
  const [draftName, setDraftName] = useState(seniorName);
  const [addingMed, setAddingMed] = useState(false);
  const [addingPerson, setAddingPerson] = useState(false);
  const [askRestore, setAskRestore] = useState(false);
  const [note, setNote] = useState("");

  useEffect(() => {
    setDraftName(seniorName);
  }, [seniorName]);

  return (
    <div className="flex flex-col gap-5">
      <BackButton label={t(lang, "backHome")} onClick={goHome} />
      <div>
        <p className="text-lg font-semibold text-forest">{t(lang, "familyTitle")}</p>
        <h1 className="text-4xl font-semibold">{t(lang, "family")}</h1>
      </div>
      <p className="text-lg leading-snug text-pretty text-muted">{t(lang, "familyLead")}</p>
      <section className="rounded-3xl border border-line border-l-8 border-l-forest bg-card p-4">
        <h2 className="text-2xl font-semibold">{t(lang, "personaTitle")}</h2>
        <p className="mt-2 text-lg leading-snug text-pretty">{t(lang, "personaBody")}</p>
      </section>

      <label className="flex flex-col gap-2 text-lg font-semibold">
        {t(lang, "elderName")}
        <input
          className={fieldClass}
          value={draftName}
          maxLength={24}
          onChange={(event) => setDraftName(event.target.value)}
          onBlur={() => {
            if (draftName.trim()) setSeniorName(draftName);
            else setDraftName(seniorName);
          }}
        />
      </label>

      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">{t(lang, "language")}</p>
        <button
          type="button"
          onClick={openLanguages}
          className="flex min-h-16 items-center justify-between gap-3 rounded-3xl border border-line bg-card px-5 text-left"
        >
          <span className="text-xl font-semibold">{phrase(lang, "languageBtn")}</span>
          <span className="text-2xl font-semibold text-forest">
            {LANGUAGES.find((item) => item.code === lang)?.native}
          </span>
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">{t(lang, "speech")}</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { value: 0.85, label: t(lang, "slow") },
            { value: 0.7, label: t(lang, "slower") },
          ].map((option) => (
            <button
              key={option.label}
              type="button"
              aria-pressed={rate === option.value}
              onClick={() => setRate(option.value)}
              className={`min-h-14 rounded-2xl text-xl font-semibold ${
                rate === option.value ? "bg-forest text-paper" : "border border-line bg-card text-ink"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">{t(lang, "tablets")}</h2>
        <p className="text-lg text-muted">{t(lang, "typeNote")}</p>
        {medicines.map((med) => (
          <MedicineEditor key={med.id} med={med} onNote={setNote} />
        ))}
        {addingMed ? (
          <NewMedicineForm
            onCancel={() => setAddingMed(false)}
            onSave={(patch) => {
              addMedicine(patch);
              setAddingMed(false);
              setNote(t(lang, "savedOk"));
            }}
          />
        ) : (
          <button
            type="button"
            onClick={() => setAddingMed(true)}
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-line bg-card text-xl font-semibold"
          >
            <Plus className="size-5" />
            {t(lang, "addTablet")}
          </button>
        )}
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">{t(lang, "contactsTitle")}</h2>
        {contacts.map((contact) => (
          <ContactEditor key={contact.id} contact={contact} onNote={setNote} />
        ))}
        {addingPerson ? (
          <NewContactForm
            onCancel={() => setAddingPerson(false)}
            onSave={(patch) => {
              addContact(patch);
              setAddingPerson(false);
              setNote(t(lang, "savedOk"));
            }}
          />
        ) : (
          <button
            type="button"
            onClick={() => setAddingPerson(true)}
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-line bg-card text-xl font-semibold"
          >
            <Plus className="size-5" />
            {t(lang, "addContact")}
          </button>
        )}
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">{t(lang, "practiceTitle")}</h2>
        <p className="text-lg leading-snug text-pretty text-muted">{t(lang, "practiceLead")}</p>
        {practicePhrases.map((phrase) => (
          <button
            key={phrase.id}
            type="button"
            onClick={() => {
              const text = tx(phrase.text, lang);
              if (phrase.noise) showNoise(text);
              else submit(text);
            }}
            className="min-h-14 rounded-2xl border border-line bg-card px-4 text-left text-lg font-semibold"
          >
            {phrase.tricky ? (
              <span className="mr-2 text-clay">{t(lang, "tricky")}</span>
            ) : null}
            {tx(phrase.text, lang)}
          </button>
        ))}
      </section>

      {note ? (
        <p className="text-lg font-semibold text-forest" aria-live="polite">
          {note}
        </p>
      ) : null}

      {askRestore ? (
        <div className="flex flex-col gap-3 rounded-3xl border border-line bg-card p-4">
          <p className="text-xl leading-snug text-pretty">{t(lang, "restoreAsk")}</p>
          <BigButton
            tone="clay"
            title={t(lang, "restore")}
            onClick={() => {
              restore();
              setAskRestore(false);
              setNote(t(lang, "savedOk"));
            }}
          />
          <BigButton title={t(lang, "keep")} onClick={() => setAskRestore(false)} />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setAskRestore(true)}
          className="min-h-14 text-lg font-semibold text-clay"
        >
          {t(lang, "restore")}
        </button>
      )}
    </div>
  );
}

function MedicineEditor({ med, onNote }: { med: Medicine; onNote: (note: string) => void }) {
  const lang = useMitra((state) => state.lang);
  const saveMedicine = useMitra((state) => state.saveMedicine);
  const removeMedicine = useMitra((state) => state.removeMedicine);
  const [open, setOpen] = useState(false);
  const [ask, setAsk] = useState(false);
  const [name, setName] = useState(tx(med.name, lang));
  const [dose, setDose] = useState(tx(med.dose, lang));
  const [time, setTime] = useState(med.time);
  const [error, setError] = useState("");

  useEffect(() => {
    setName(tx(med.name, lang));
    setDose(tx(med.dose, lang));
    setTime(med.time);
  }, [med, lang]);

  return (
    <div className="rounded-3xl border border-line bg-card p-4">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex min-h-16 w-full items-center justify-between text-left"
      >
        <span>
          <span className="block text-2xl font-semibold tabular-nums">{formatClockLabel(med.time, lang)}</span>
          <span className="block text-lg">{tx(med.name, lang)}</span>
        </span>
      </button>
      {open ? (
        <div className="mt-3 flex flex-col gap-3">
          <Field label={t(lang, "medName")} value={name} onChange={setName} />
          <Field label={t(lang, "dose")} value={dose} onChange={setDose} />
          <label className="flex flex-col gap-2 text-lg font-semibold">
            {t(lang, "timeLabel")}
            <input
              type="time"
              className={fieldClass}
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />
          </label>
          {error ? <p className="text-lg text-clay">{error}</p> : null}
          <button
            type="button"
            onClick={() => {
              if (!name.trim()) return setError(t(lang, "nameMissing"));
              if (!dose.trim()) return setError(t(lang, "doseMissing"));
              saveMedicine(med.id, {
                name: editLocalized(med.name, lang, name),
                dose: editLocalized(med.dose, lang, dose),
                time: time || med.time,
              });
              setError("");
              onNote(t(lang, "savedOk"));
            }}
            className="min-h-14 rounded-2xl bg-forest text-xl font-semibold text-paper"
          >
            {t(lang, "save")}
          </button>
          {ask ? (
            <div className="flex flex-col gap-2">
              <p className="text-lg">{t(lang, "removeAsk")}</p>
              <button
                type="button"
                onClick={() => removeMedicine(med.id)}
                className="min-h-14 rounded-2xl bg-clay text-xl font-semibold text-paper"
              >
                {t(lang, "remove")}
              </button>
              <button type="button" onClick={() => setAsk(false)} className="min-h-14 text-lg font-semibold">
                {t(lang, "keep")}
              </button>
            </div>
          ) : (
            <button type="button" onClick={() => setAsk(true)} className="min-h-12 text-lg font-semibold text-clay">
              {t(lang, "remove")}
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
}

function NewMedicineForm({
  onCancel,
  onSave,
}: {
  onCancel: () => void;
  onSave: (patch: { name: ReturnType<typeof fillLang>; dose: ReturnType<typeof fillLang>; time: string }) => void;
}) {
  const lang = useMitra((state) => state.lang);
  const [name, setName] = useState("");
  const [dose, setDose] = useState("");
  const [time, setTime] = useState("08:00");
  const [error, setError] = useState("");
  return (
    <div className="flex flex-col gap-3 rounded-3xl border border-line bg-card p-4">
      <Field label={t(lang, "medName")} value={name} onChange={setName} />
      <Field label={t(lang, "dose")} value={dose} onChange={setDose} />
      <label className="flex flex-col gap-2 text-lg font-semibold">
        {t(lang, "timeLabel")}
        <input type="time" className={fieldClass} value={time} onChange={(event) => setTime(event.target.value)} />
      </label>
      {error ? <p className="text-lg text-clay">{error}</p> : null}
      <button
        type="button"
        onClick={() => {
          if (!name.trim()) return setError(t(lang, "nameMissing"));
          if (!dose.trim()) return setError(t(lang, "doseMissing"));
          onSave({ name: fillLang(name), dose: fillLang(dose), time: time || "08:00" });
        }}
        className="min-h-14 rounded-2xl bg-forest text-xl font-semibold text-paper"
      >
        {t(lang, "save")}
      </button>
      <button type="button" onClick={onCancel} className="min-h-12 text-lg font-semibold">
        {t(lang, "cancel")}
      </button>
    </div>
  );
}

function ContactEditor({ contact, onNote }: { contact: Contact; onNote: (note: string) => void }) {
  const lang = useMitra((state) => state.lang);
  const saveContact = useMitra((state) => state.saveContact);
  const removeContact = useMitra((state) => state.removeContact);
  const [open, setOpen] = useState(false);
  const [ask, setAsk] = useState(false);
  const [name, setName] = useState(contact.name);
  const [relation, setRelation] = useState<Relation>(contact.relation);
  const [relationText, setRelationText] = useState(tx(contact.relationLabel, lang));
  const [phone, setPhone] = useState(contact.phone);
  const [error, setError] = useState("");

  useEffect(() => {
    setName(contact.name);
    setRelation(contact.relation);
    setRelationText(tx(contact.relationLabel, lang));
    setPhone(contact.phone);
  }, [contact, lang]);

  return (
    <div className="rounded-3xl border border-line bg-card p-4">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex min-h-16 w-full flex-col items-start text-left"
      >
        <span className="text-2xl font-semibold">{contact.name}</span>
        <span className="text-lg text-muted">
          {contact.relation === "other"
            ? tx(contact.relationLabel, lang) || t(lang, "other")
            : t(lang, contact.relation)}
        </span>
      </button>
      {open ? (
        <div className="mt-3 flex flex-col gap-3">
          <Field label={t(lang, "personName")} value={name} onChange={setName} />
          <RelationPicker relation={relation} onChange={setRelation} />
          {relation === "other" ? (
            <Field label={t(lang, "otherRelation")} value={relationText} onChange={setRelationText} />
          ) : null}
          <Field label={t(lang, "phone")} value={phone} onChange={setPhone} />
          <p className="text-lg text-muted">{t(lang, "sample")}</p>
          {error ? <p className="text-lg text-clay">{error}</p> : null}
          <button
            type="button"
            onClick={() => {
              if (!name.trim()) return setError(t(lang, "nameMissing"));
              saveContact(contact.id, {
                name: name.trim(),
                relation,
                relationLabel: editLocalized(contact.relationLabel, lang, relationText),
                phone: phone.trim() || contact.phone,
              });
              setError("");
              onNote(t(lang, "savedOk"));
            }}
            className="min-h-14 rounded-2xl bg-forest text-xl font-semibold text-paper"
          >
            {t(lang, "save")}
          </button>
          {ask ? (
            <div className="flex flex-col gap-2">
              <p className="text-lg">{t(lang, "removeAsk")}</p>
              <button
                type="button"
                onClick={() => {
                  const removed = removeContact(contact.id);
                  if (!removed) setError(t(lang, "keepOne"));
                }}
                className="min-h-14 rounded-2xl bg-clay text-xl font-semibold text-paper"
              >
                {t(lang, "remove")}
              </button>
              <button type="button" onClick={() => setAsk(false)} className="min-h-14 text-lg font-semibold">
                {t(lang, "keep")}
              </button>
            </div>
          ) : (
            <button type="button" onClick={() => setAsk(true)} className="min-h-12 text-lg font-semibold text-clay">
              {t(lang, "remove")}
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
}

function NewContactForm({
  onCancel,
  onSave,
}: {
  onCancel: () => void;
  onSave: (patch: Omit<Contact, "id">) => void;
}) {
  const lang = useMitra((state) => state.lang);
  const [name, setName] = useState("");
  const [relation, setRelation] = useState<Relation>("other");
  const [relationText, setRelationText] = useState("");
  const [phone, setPhone] = useState("98000 00000");
  const [error, setError] = useState("");
  return (
    <div className="flex flex-col gap-3 rounded-3xl border border-line bg-card p-4">
      <Field label={t(lang, "personName")} value={name} onChange={setName} />
      <RelationPicker relation={relation} onChange={setRelation} />
      {relation === "other" ? (
        <Field label={t(lang, "otherRelation")} value={relationText} onChange={setRelationText} />
      ) : null}
      <Field label={t(lang, "phone")} value={phone} onChange={setPhone} />
      <p className="text-lg text-muted">{t(lang, "sample")}</p>
      {error ? <p className="text-lg text-clay">{error}</p> : null}
      <button
        type="button"
        onClick={() => {
          if (!name.trim()) return setError(t(lang, "nameMissing"));
          onSave({
            name: name.trim(),
            relation,
            relationLabel: fillLang(relationText),
            phone: phone.trim() || "98000 00000",
          });
        }}
        className="min-h-14 rounded-2xl bg-forest text-xl font-semibold text-paper"
      >
        {t(lang, "save")}
      </button>
      <button type="button" onClick={onCancel} className="min-h-12 text-lg font-semibold">
        {t(lang, "cancel")}
      </button>
    </div>
  );
}

function RelationPicker({
  relation,
  onChange,
}: {
  relation: Relation;
  onChange: (relation: Relation) => void;
}) {
  const lang = useMitra((state) => state.lang);
  return (
    <div className="grid grid-cols-2 gap-2">
      {relations.map((item) => (
        <button
          key={item}
          type="button"
          aria-pressed={relation === item}
          onClick={() => onChange(item)}
          className={`min-h-14 rounded-2xl text-lg font-semibold ${
            relation === item ? "bg-forest text-paper" : "border border-line bg-card text-ink"
          }`}
        >
          {t(lang, item)}
        </button>
      ))}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="flex flex-col gap-2 text-lg font-semibold">
      {label}
      <input className={fieldClass} value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}

const roles: { id: Role; key: "roleSenior" | "roleParent" | "roleStudent" }[] = [
  { id: "senior", key: "roleSenior" },
  { id: "parent", key: "roleParent" },
  { id: "student", key: "roleStudent" },
];

export function AboutScreen() {
  const lang = useMitra((state) => state.lang);
  const name = useMitra((state) => state.seniorName);
  const setSeniorName = useMitra((state) => state.setSeniorName);
  const birth = useMitra((state) => state.birth);
  const setBirth = useMitra((state) => state.setBirth);
  const role = useMitra((state) => state.role);
  const setRole = useMitra((state) => state.setRole);
  const rate = useMitra((state) => state.rate);
  const goHome = useMitra((state) => state.goHome);
  const [draft, setDraft] = useState(name);
  const [note, setNote] = useState("");
  const age = yearsOld(birth);

  useEffect(() => {
    setDraft(name);
  }, [name]);

  function save() {
    if (draft.trim()) setSeniorName(draft);
    else setDraft(name);
    setNote(phrase(lang, "savedHere"));
    speak(phrase(lang, "savedHere"), lang, rate);
  }

  return (
    <div className="flex flex-col gap-5 pb-6">
      <BackButton label={t(lang, "backHome")} onClick={goHome} />
      <div>
        <h1 className="text-4xl font-semibold">{phrase(lang, "about")}</h1>
        <p className="mt-2 text-lg leading-snug text-pretty text-muted">{phrase(lang, "aboutLead")}</p>
      </div>
      <label className="flex flex-col gap-2 text-lg font-semibold">
        {phrase(lang, "yourName")}
        <input
          className={fieldClass}
          value={draft}
          maxLength={24}
          autoComplete="name"
          onChange={(event) => setDraft(event.target.value)}
        />
      </label>
      <label className="flex flex-col gap-2 text-lg font-semibold">
        {phrase(lang, "birth")}
        <input
          className={fieldClass}
          type="date"
          value={birth}
          min="1900-01-01"
          max={todayKey()}
          onChange={(event) => {
            setBirth(event.target.value);
            setNote(phrase(lang, "savedHere"));
          }}
        />
        {age !== null ? (
          <span className="text-xl font-semibold text-forest">{phrase(lang, "years", { n: String(age) })}</span>
        ) : null}
      </label>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">{phrase(lang, "who")}</p>
        {roles.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={role === item.id}
            onClick={() => {
              setRole(item.id);
              setNote(phrase(lang, "savedHere"));
            }}
            className={`min-h-16 rounded-3xl px-5 text-left text-2xl font-semibold ${
              role === item.id ? "bg-forest text-paper" : "border border-line bg-card text-ink"
            }`}
          >
            {phrase(lang, item.key)}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={save}
        className="min-h-16 rounded-3xl bg-forest text-2xl font-semibold text-paper"
      >
        {t(lang, "save")}
      </button>
      {note ? <p className="text-center text-lg font-semibold text-forest">{note}</p> : null}
    </div>
  );
}
