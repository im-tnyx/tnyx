import { en } from "./en";
import { hi } from "./hi";

export const dictionaries = {
  en,
  hi,
} as const;

export type SupportedLanguage = keyof typeof dictionaries;
export type TranslationKey = keyof typeof en;
