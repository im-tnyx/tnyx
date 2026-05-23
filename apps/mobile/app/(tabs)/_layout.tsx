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
        tabBarLabelStyle: {
          fontSize: 11,
          marginTop: 2,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: t("tabHome"),
          tabBarIcon: ({ color, size }) => (
            <TabAssetIcon source={require("../../assets/ic_home.png")} color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="nutrition"
        options={{
          title: t("tabNutrition"),
          tabBarIcon: ({ color, size }) => (
            <TabAssetIcon source={require("../../assets/ic_apple.png")} color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="ai"
        options={{
          title: t("tabAi"),
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                width: 42,
                height: 42,
                borderRadius: 21,
                borderWidth: 1.6,
                borderColor: focused ? colors.accent.ai : colors.bg.input,
                backgroundColor: colors.bg.card,
                alignItems: "center",
                justifyContent: "center",
                shadowColor: focused ? colors.accent.ai : "transparent",
                shadowOpacity: focused ? 0.35 : 0,
                shadowRadius: 8,
                shadowOffset: { width: 0, height: 0 },
                elevation: focused ? 5 : 0,
              }}
            >
              <Sparkles color={color} size={size} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="workout"
        options={{
          title: t("tabWorkout"),
          tabBarIcon: ({ color, size }) => (
            <TabAssetIcon source={require("../../assets/ic_muscle.png")} color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: t("tabProgress"),
          tabBarIcon: ({ color, size }) => (
            <TabAssetIcon source={require("../../assets/ic_cup.png")} color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
