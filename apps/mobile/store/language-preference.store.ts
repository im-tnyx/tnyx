import { create } from "zustand";
import type { SupportedLanguage } from "@/constants/i18n";

export type LanguageMode = "system" | SupportedLanguage;

type LanguagePreferenceState = {
  mode: LanguageMode;
  setMode: (mode: LanguageMode) => void;
};

export const useLanguagePreferenceStore = create<LanguagePreferenceState>((set) => ({
  mode: "system",
  setMode: (mode) => set({ mode }),
}));
