import { Platform } from "react-native";
import { useFontPreferenceStore } from "@/store/font-preference.store";

type FontFamilies = {
  regular: string;
  medium: string;
  semibold: string;
  bold: string;
};

type UseAppFontReturn = {
  mode: "default" | "custom";
  setMode: (mode: "default" | "custom") => void;
  families: FontFamilies;
};

function getDefaultFamilies(): FontFamilies {
  const systemDefault = Platform.select({
    ios: "System",
    android: "sans-serif",
    default: "System",
  });

  return {
    regular: systemDefault ?? "System",
    medium: Platform.select({ ios: "System", android: "sans-serif-medium", default: "System" }) ?? "System",
    semibold: Platform.select({ ios: "System", android: "sans-serif-medium", default: "System" }) ?? "System",
    bold: Platform.select({ ios: "System", android: "sans-serif-bold", default: "System" }) ?? "System",
  };
}

function getCustomFamilies(): FontFamilies {
  return {
    regular: "NotoSansDevanagari-Regular",
    medium: "NotoSansDevanagari-Medium",
    semibold: "NotoSansDevanagari-SemiBold",
    bold: "NotoSansDevanagari-Bold",
  };
}

export function useAppFont(): UseAppFontReturn {
  const mode = useFontPreferenceStore((state) => state.mode);
  const setMode = useFontPreferenceStore((state) => state.setMode);

  const families = mode === "custom" ? getCustomFamilies() : getDefaultFamilies();

  return { mode, setMode, families };
}
