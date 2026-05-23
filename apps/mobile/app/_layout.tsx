import "../global.css";

import { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync().catch(() => {
  // no-op: splash may already be hidden in dev reloads
});

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "NotoSansDevanagari-Regular": require("../assets/fonts/NotoSansDevanagari-Regular.ttf"),
    "NotoSansDevanagari-Medium": require("../assets/fonts/NotoSansDevanagari-Medium.ttf"),
    "NotoSansDevanagari-SemiBold": require("../assets/fonts/NotoSansDevanagari-SemiBold.ttf"),
    "NotoSansDevanagari-Bold": require("../assets/fonts/NotoSansDevanagari-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync().catch(() => {
        // no-op
      });
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false, animation: "fade" }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(onboarding)" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </SafeAreaProvider>
  );
}
