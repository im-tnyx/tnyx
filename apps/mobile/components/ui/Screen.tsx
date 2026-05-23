import { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View } from "react-native";
import { useAppTheme } from "@/hooks/useAppTheme";

type ScreenProps = {
  children: ReactNode;
  className?: string;
  scrollable?: boolean;
};

export function Screen({ children, className, scrollable = false }: ScreenProps) {
  const { colors, isDark } = useAppTheme();

  return (
    <SafeAreaView className={`flex-1 ${className ?? ""}`} style={{ backgroundColor: colors.bg.primary }}>
      <StatusBar style={isDark ? "light" : "dark"} />
      {scrollable ? <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingHorizontal: 16 }}>{children}</ScrollView> : <View style={{ flex: 1, paddingHorizontal: 16 }}>{children}</View>}
    </SafeAreaView>
  );
}
