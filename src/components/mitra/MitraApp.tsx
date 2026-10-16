import { useEffect } from "react";
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

  useEffect(() => {
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
    document.documentElement.lang = lang === "hi" ? "hi" : lang === "ta" ? "ta" : "en";
  }, [lang]);

  const screen = !welcomed ? "language" : view;

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
