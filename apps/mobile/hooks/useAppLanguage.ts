import { getLocales } from "expo-localization";
import { dictionaries, SupportedLanguage, TranslationKey } from "@/constants/i18n";
import { useLanguagePreferenceStore } from "@/store/language-preference.store";

type UseAppLanguageReturn = {
  mode: "system" | "en" | "hi";
  setMode: (mode: "system" | "en" | "hi") => void;
  language: SupportedLanguage;
  t: (key: TranslationKey) => string;
};

function resolveSystemLanguage(): SupportedLanguage {
  const primaryLocale = getLocales()[0];
  const languageCode = (primaryLocale?.languageCode ?? "en").toLowerCase();
  return languageCode === "hi" ? "hi" : "en";
}

export function useAppLanguage(): UseAppLanguageReturn {
  const mode = useLanguagePreferenceStore((state) => state.mode);
  const setMode = useLanguagePreferenceStore((state) => state.setMode);

  const language: SupportedLanguage = mode === "system" ? resolveSystemLanguage() : mode;

  const t = (key: TranslationKey): string => dictionaries[language][key];

  return { mode, setMode, language, t };
}
