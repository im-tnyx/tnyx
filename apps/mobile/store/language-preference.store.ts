import { create } from "zustand";

export type LanguageMode = "system" | "en" | "hi";

type LanguagePreferenceState = {
  mode: LanguageMode;
  setMode: (mode: LanguageMode) => void;
};

export const useLanguagePreferenceStore = create<LanguagePreferenceState>((set) => ({
  mode: "system",
  setMode: (mode) => set({ mode }),
}));
