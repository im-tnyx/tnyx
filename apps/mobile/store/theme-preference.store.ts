import { create } from "zustand";

export type ThemeMode = "system" | "light" | "dark";

type ThemePreferenceState = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
};

export const useThemePreferenceStore = create<ThemePreferenceState>((set) => ({
  mode: "system",
  setMode: (mode) => set({ mode }),
}));
