import { useCallback } from "react";
import { startListening, stopListening, stopSpeak } from "@/lib/mitra/speech";
import { useMitra } from "@/lib/mitra/store";

export function useVoice() {
  const lang = useMitra((state) => state.lang);
  const submit = useMitra((state) => state.submit);
  const fail = useMitra((state) => state.fail);
  const setView = useMitra((state) => state.setView);
  const goHome = useMitra((state) => state.goHome);

  const start = useCallback(() => {
    const started = startListening(lang, {
      onText: (text) => submit(text),
      onFail: (reason) => fail(reason),
    });
    if (started) setView("listen");
  }, [fail, lang, setView, submit]);

  const cancel = useCallback(() => {
    stopListening();
    stopSpeak();
    goHome();
  }, [goHome]);

  return { start, cancel };
}
