import { getLocales } from "expo-localization";
import { defaultLanguage, dictionaries, supportedLanguages, SupportedLanguage, TranslationKey } from "@/constants/i18n";
import { LanguageMode, useLanguagePreferenceStore } from "@/store/language-preference.store";

type UseAppLanguageReturn = {
  mode: LanguageMode;
  setMode: (mode: LanguageMode) => void;
  language: SupportedLanguage;
  t: (key: TranslationKey) => string;
};

function resolveSystemLanguage(): SupportedLanguage {
  const primaryLocale = getLocales()[0];
  const languageCode = (primaryLocale?.languageCode ?? defaultLanguage).toLowerCase();

  return supportedLanguages.includes(languageCode as SupportedLanguage)
    ? (languageCode as SupportedLanguage)
    : defaultLanguage;
}

export function useAppLanguage(): UseAppLanguageReturn {
  const mode = useLanguagePreferenceStore((state) => state.mode);
  const setMode = useLanguagePreferenceStore((state) => state.setMode);

  const language: SupportedLanguage = mode === "system" ? resolveSystemLanguage() : mode;

  const t = (key: TranslationKey): string => dictionaries[language][key];

  return { mode, setMode, language, t };
}
