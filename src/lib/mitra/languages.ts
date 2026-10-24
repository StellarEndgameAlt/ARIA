export const LANGUAGES = [
  { code: "en", native: "English", english: "English", locale: "en-IN" },
  { code: "hi", native: "हिन्दी", english: "Hindi", locale: "hi-IN" },
  { code: "bn", native: "বাংলা", english: "Bengali", locale: "bn-IN" },
  { code: "te", native: "తెలుగు", english: "Telugu", locale: "te-IN" },
  { code: "mr", native: "मराठी", english: "Marathi", locale: "mr-IN" },
  { code: "ta", native: "தமிழ்", english: "Tamil", locale: "ta-IN" },
  { code: "ur", native: "اردو", english: "Urdu", locale: "ur-IN" },
  { code: "gu", native: "ગુજરાતી", english: "Gujarati", locale: "gu-IN" },
  { code: "kn", native: "ಕನ್ನಡ", english: "Kannada", locale: "kn-IN" },
  { code: "or", native: "ଓଡ଼ିଆ", english: "Odia", locale: "or-IN" },
  { code: "ml", native: "മലയാളം", english: "Malayalam", locale: "ml-IN" },
  { code: "pa", native: "ਪੰਜਾਬੀ", english: "Punjabi", locale: "pa-IN" },
] as const;

export type Lang = (typeof LANGUAGES)[number]["code"];

const codes = new Set<string>(LANGUAGES.map((item) => item.code));

export function isLang(value: string): value is Lang {
  return codes.has(value);
}

export function localeOf(lang: Lang): string {
  return LANGUAGES.find((item) => item.code === lang)?.locale ?? "en-IN";
}

const PICKER_FONTS =
  "https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@600;700&family=Noto+Sans+Bengali:wght@600;700&family=Noto+Sans+Devanagari:wght@600;700&family=Noto+Sans+Gujarati:wght@600;700&family=Noto+Sans+Gurmukhi:wght@600;700&family=Noto+Sans+Kannada:wght@600;700&family=Noto+Sans+Malayalam:wght@600;700&family=Noto+Sans+Oriya:wght@600;700&family=Noto+Sans+Tamil:wght@600;700&family=Noto+Sans+Telugu:wght@600;700&display=swap";

export function preloadPickerFonts(): void {
  if (typeof document === "undefined" || document.getElementById("aria-fonts")) return;
  const link = document.createElement("link");
  link.id = "aria-fonts";
  link.rel = "stylesheet";
  link.href = PICKER_FONTS;
  document.head.appendChild(link);
}
