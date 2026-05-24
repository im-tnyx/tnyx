import { en } from "./en";
import { hi } from "./hi";

export const dictionaries = {
  en,
  hi,
} as const;

export type SupportedLanguage = keyof typeof dictionaries;
export type TranslationKey = keyof typeof en;

export const defaultLanguage: SupportedLanguage = "en";
export const supportedLanguages = Object.keys(dictionaries) as SupportedLanguage[];

export const languageFlagByCode: Partial<Record<SupportedLanguage, string>> = {
  en: "🇺🇸",
  hi: "🇮🇳",
} as const;
