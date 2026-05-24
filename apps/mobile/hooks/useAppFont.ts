import { Platform } from "react-native";
import { getLocales } from "expo-localization";
import { defaultLanguage, supportedLanguages, SupportedLanguage } from "@/constants/i18n";
import { useFontPreferenceStore } from "@/store/font-preference.store";
import { useLanguagePreferenceStore } from "@/store/language-preference.store";

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
  useSystemWeight: boolean;
};

function resolveSystemLanguage(): SupportedLanguage {
  const primaryLocale = getLocales()[0];
  const languageCode = (primaryLocale?.languageCode ?? defaultLanguage).toLowerCase();

  return supportedLanguages.includes(languageCode as SupportedLanguage)
    ? (languageCode as SupportedLanguage)
    : defaultLanguage;
}

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

function getCustomFamilies(language: SupportedLanguage): FontFamilies {
  if (language === "en") {
    return {
      regular: "PlusJakartaSans-Regular",
      medium: "PlusJakartaSans-Medium",
      semibold: "PlusJakartaSans-SemiBold",
      bold: "PlusJakartaSans-Bold",
    };
  }

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
  const languageMode = useLanguagePreferenceStore((state) => state.mode);
  const resolvedLanguage = languageMode === "system" ? resolveSystemLanguage() : languageMode;

  const families = mode === "custom" ? getCustomFamilies(resolvedLanguage) : getDefaultFamilies();
  const useSystemWeight = mode === "default";

  return { mode, setMode, families, useSystemWeight };
}
