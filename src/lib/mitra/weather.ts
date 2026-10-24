import type { Lang } from "./languages";
import { phrase, type PhraseKey } from "./phrases";

type Sky = Extract<PhraseKey, "skyClear" | "skyPart" | "skyCloud" | "skyFog" | "skyRain" | "skySnow" | "skyStorm">;

type Cache = { at: number; lat: number; lon: number; lang: Lang; text: string };

let memory: Cache | null = null;

function skyKey(code: number): Sky {
  if (code === 0) return "skyClear";
  if (code === 1 || code === 2) return "skyPart";
  if (code === 3) return "skyCloud";
  if (code === 45 || code === 48) return "skyFog";
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return "skyRain";
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return "skySnow";
  if (code >= 95) return "skyStorm";
  return "skyCloud";
}

export function peekWeather(lang: Lang): string | null {
  if (!memory || memory.lang !== lang) return null;
  if (Date.now() - memory.at > 10 * 60 * 1000) return null;
  return memory.text;
}

export function loadWeather(lang: Lang): Promise<string> {
  const ready = peekWeather(lang);
  if (ready) return Promise.resolve(ready);

  return new Promise((resolve) => {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      resolve(phrase(lang, "weatherDenied"));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=auto`;
        void fetch(url)
          .then(async (response) => {
            if (!response.ok) throw new Error("weather");
            const body = (await response.json()) as {
              current?: { temperature_2m?: number; weather_code?: number };
            };
            const temp = body.current?.temperature_2m;
            const code = body.current?.weather_code;
            if (typeof temp !== "number" || typeof code !== "number") throw new Error("weather");
            const text = phrase(lang, "weatherLine", {
              temp: String(Math.round(temp)),
              sky: phrase(lang, skyKey(code)),
            });
            memory = { at: Date.now(), lat, lon, lang, text };
            resolve(text);
          })
          .catch(() => resolve(phrase(lang, "weatherFail")));
      },
      () => resolve(phrase(lang, "weatherDenied")),
      { enableHighAccuracy: false, timeout: 12000, maximumAge: 10 * 60 * 1000 },
    );
  });
}
