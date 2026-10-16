import { useEffect, useState } from "react";
import { hasLang, ensureLang } from "@/lib/mitra/i18n";
import { localeOf, preloadPickerFonts } from "@/lib/mitra/languages";
import { warmVoices } from "@/lib/mitra/speech";
import { takePendingLang, useMitra } from "@/lib/mitra/store";
import { Shell } from "@/components/mitra/ui";
import {
  AskScreen,
  CallListScreen,
  CallingScreen,
  ConfirmScreen,
  FallbackScreen,
  FamilyScreen,
  HomeScreen,
  LanguageScreen,
  ListenScreen,
  MedicineScreen,
  SafetyScreen,
} from "@/components/mitra/screens";

export function MitraApp() {
  const welcomed = useMitra((state) => state.welcomed);
  const view = useMitra((state) => state.view);
  const lang = useMitra((state) => state.lang);
  const [copyReady, setCopyReady] = useState(() => hasLang(lang));

  useEffect(() => {
    preloadPickerFonts();
    warmVoices();
    const finish = () => {
      const chosen = takePendingLang();
      if (chosen) useMitra.getState().chooseLang(chosen);
    };
    const unsub = useMitra.persist.onFinishHydration(finish);
    void useMitra.persist.rehydrate();
    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {
    let live = true;
    setCopyReady(hasLang(lang));
    void ensureLang(lang).then(() => {
      if (live) setCopyReady(true);
    });
    return () => {
      live = false;
    };
  }, [lang]);

  useEffect(() => {
    document.documentElement.lang = localeOf(lang);
    document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
  }, [lang]);

  const screen = !welcomed ? "language" : view;
  if (welcomed && !copyReady) {
    return (
      <Shell>
        <div className="flex flex-1 items-center justify-center text-2xl font-semibold text-forest">ARIA</div>
      </Shell>
    );
  }

  return (
    <Shell>
      {screen === "language" ? <LanguageScreen /> : null}
      {screen === "home" ? <HomeScreen /> : null}
      {screen === "listen" ? <ListenScreen /> : null}
      {screen === "medicine" ? <MedicineScreen /> : null}
      {screen === "call" ? <CallListScreen /> : null}
      {screen === "confirm" ? <ConfirmScreen /> : null}
      {screen === "calling" ? <CallingScreen /> : null}
      {screen === "ask" ? <AskScreen /> : null}
      {screen === "safety" ? <SafetyScreen /> : null}
      {screen === "fallback" ? <FallbackScreen /> : null}
      {screen === "family" ? <FamilyScreen /> : null}
    </Shell>
  );
}
