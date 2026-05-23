import { useColorScheme as useNativeColorScheme } from "react-native";
import { darkColors, lightColors, ThemeColors } from "@/theme/tokens/colors";
import { useThemePreferenceStore } from "@/store/theme-preference.store";

type ResolvedTheme = "light" | "dark";

type UseAppThemeReturn = {
  mode: "system" | "light" | "dark";
  setMode: (mode: "system" | "light" | "dark") => void;
  resolvedTheme: ResolvedTheme;
  colors: ThemeColors;
  isDark: boolean;
};

export function useAppTheme(): UseAppThemeReturn {
  const deviceScheme = useNativeColorScheme();
  const mode = useThemePreferenceStore((state) => state.mode);
  const setMode = useThemePreferenceStore((state) => state.setMode);

  const resolvedTheme: ResolvedTheme =
    mode === "system" ? (deviceScheme === "dark" ? "dark" : "light") : mode;

  const colors = resolvedTheme === "dark" ? darkColors : lightColors;

  return {
    mode,
    setMode,
    resolvedTheme,
    colors,
    isDark: resolvedTheme === "dark",
  };
}
