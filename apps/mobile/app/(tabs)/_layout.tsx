import { Tabs } from "expo-router";
import { Sparkles } from "lucide-react-native";
import { ColorValue, Image, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useAppLanguage } from "@/hooks/useAppLanguage";

type TabAssetIconProps = {
  source: number;
  color: ColorValue;
  size: number;
};

function TabAssetIcon({ source, color, size }: TabAssetIconProps) {
  return (
    <Image
      source={source}
      style={{
        width: size,
        height: size,
        tintColor: color,
      }}
      resizeMode="contain"
    />
  );
}

export default function TabsLayout() {
  const { colors } = useAppTheme();
  const { t } = useAppLanguage();
  const insets = useSafeAreaInsets();
  const tabBottomInset = Math.max(insets.bottom, 8);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.accent.primary,
        tabBarInactiveTintColor: colors.text.muted,
        tabBarStyle: {
          backgroundColor: colors.bg.secondary,
          borderTopColor: colors.bg.elevated,
          height: 58 + tabBottomInset,
          paddingBottom: tabBottomInset,
          paddingTop: 8,
        },
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: t("tabHome"),
          tabBarIcon: ({ color }) => (
            <TabAssetIcon source={require("../../assets/ic_home.png")} color={color} size={28} />
          ),
        }}
      />
      <Tabs.Screen
        name="nutrition"
        options={{
          title: t("tabNutrition"),
          tabBarIcon: ({ color }) => (
            <TabAssetIcon source={require("../../assets/ic_apple.png")} color={color} size={35} />
          ),
        }}
      />
      <Tabs.Screen
        name="ai"
        options={{
          title: t("tabAi"),
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                width: 46,
                height: 46,
                borderRadius: 23,
                borderWidth: 1.6,
                borderColor: colors.accent.ai,
                backgroundColor: colors.bg.card,
                alignItems: "center",
                justifyContent: "center",
                shadowColor: colors.accent.ai,
                shadowOpacity: focused ? 0.35 : 0.18,
                shadowRadius: 8,
                shadowOffset: { width: 0, height: 0 },
                elevation: focused ? 5 : 2,
              }}
            >
              <Sparkles color={color} size={24} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="workout"
        options={{
          title: t("tabWorkout"),
          tabBarIcon: ({ color }) => (
            <TabAssetIcon source={require("../../assets/ic_muscle.png")} color={color} size={28} />
          ),
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: t("tabProgress"),
          tabBarIcon: ({ color }) => (
            <TabAssetIcon source={require("../../assets/ic_cup.png")} color={color} size={32} />
          ),
        }}
      />
    </Tabs>
  );
}
