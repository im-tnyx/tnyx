import { create } from "zustand";

export type FontMode = "default" | "custom";

type FontPreferenceState = {
  mode: FontMode;
  setMode: (mode: FontMode) => void;
};

export const useFontPreferenceStore = create<FontPreferenceState>((set) => ({
  mode: "custom",
  setMode: (mode) => set({ mode }),
}));
