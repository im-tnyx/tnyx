import { ImageBackground, Pressable, ScrollView, View, useWindowDimensions } from "react-native";
import { router } from "expo-router";
import { ArrowRight, Brain, Camera, ChevronDown, ChevronRight, Dumbbell, Globe } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Text } from "@/components/ui";
import { useAppLanguage } from "@/hooks/useAppLanguage";
import { useAppTheme } from "@/hooks/useAppTheme";
import { radius, spacing } from "@/theme/tokens";

type FeatureItemProps = {
  title: string;
  icon: "camera" | "workout" | "ai";
};

function FeatureItem({ title, icon }: FeatureItemProps) {
  const { colors } = useAppTheme();

  const Icon = icon === "camera" ? Camera : icon === "workout" ? Dumbbell : Brain;

  return (
    <Pressable
      style={({ pressed }) => ({
        minHeight: 86,
        marginTop: spacing[3],
        borderRadius: radius.lg,
        backgroundColor: "rgba(17, 22, 34, 0.86)",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.12)",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: spacing[4],
        opacity: pressed ? 0.92 : 1,
        shadowColor: "#000000",
        shadowOpacity: 0.32,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 8 },
        elevation: 5,
      })}
    >
      <View
        style={{
          width: 52,
          height: 52,
          borderRadius: radius.lg,
          backgroundColor: "rgba(255,255,255,0.05)",
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1,
          borderColor: "rgba(255,255,255,0.16)",
        }}
      >
        <Icon color={colors.accent.nutrition} size={24} />
      </View>

      <View style={{ flex: 1, marginLeft: spacing[4] }}>
        <Text variant="body" style={{ fontWeight: "600", fontSize: 34 / 2, lineHeight: 23 }}>
          {title}
        </Text>
      </View>

      <ChevronRight color={colors.text.muted} size={22} />
    </Pressable>
  );
}

export default function WelcomeScreen() {
  const { t, mode, setMode } = useAppLanguage();
  const { colors } = useAppTheme();
  const { width } = useWindowDimensions();

  const languageLabel = mode === "system" ? "SYS" : mode.toUpperCase();
  const heroFontSize = width < 370 ? 52 : 60;
  const heroLineHeight = width < 370 ? 54 : 62;

  const toggleLanguage = () => {
    if (mode === "en") {
      setMode("hi");
      return;
    }
    if (mode === "hi") {
      setMode("system");
      return;
    }
    setMode("en");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg.primary }}>
      <StatusBar style="light" />
      <View style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
        <ImageBackground
          source={require("../../assets/tnyx_logo_dark_bg.png")}
          resizeMode="cover"
          style={{ flex: 1 }}
          imageStyle={{ opacity: 0.94 }}
        >
          <View style={{ flex: 1, backgroundColor: "rgba(5, 8, 14, 0.58)" }} />
        </ImageBackground>
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "54%",
            backgroundColor: colors.bg.primary,
            opacity: 0.85,
          }}
        />
      </View>

      <ScrollView
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: spacing[4],
          paddingTop: spacing[4],
          paddingBottom: spacing[8],
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: spacing[2] }}>
          <Pressable
            onPress={toggleLanguage}
            style={({ pressed }) => ({
              height: 42,
              minWidth: 92,
              borderRadius: radius.full,
              backgroundColor: "rgba(19, 24, 35, 0.78)",
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.18)",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: spacing[4],
              opacity: pressed ? 0.92 : 1,
            })}
          >
            <Globe color={colors.accent.nutrition} size={19} />
            <Text variant="body" style={{ marginLeft: spacing[2], fontWeight: "600" }}>
              {languageLabel}
            </Text>
            <ChevronDown color={colors.text.secondary} size={18} style={{ marginLeft: spacing[2] }} />
          </Pressable>

          <Pressable onPress={() => router.replace("/(tabs)/home")}>
            <Text variant="title" style={{ fontWeight: "700" }}>
              {t("welcomeSkip")}
            </Text>
          </Pressable>
        </View>

        <View style={{ marginTop: spacing[12] + spacing[1] }}>
          <Text variant="hero" style={{ fontSize: heroFontSize, lineHeight: heroLineHeight }}>
            {t("welcomeHeadlineLine1")}
          </Text>
          <Text variant="hero" style={{ fontSize: heroFontSize, lineHeight: heroLineHeight, marginTop: spacing[1] }}>
            {t("welcomeHeadlineLine2Start")}
            <Text variant="hero" style={{ color: colors.accent.nutrition, fontSize: heroFontSize, lineHeight: heroLineHeight }}>
              {t("welcomeHeadlineLine2Accent")}
            </Text>
          </Text>
          <Text variant="hero" style={{ fontSize: heroFontSize, lineHeight: heroLineHeight, marginTop: spacing[1] }}>
            {t("welcomeHeadlineLine3")}
          </Text>

          <View style={{ marginTop: spacing[4] + spacing[1] }}>
            <Text variant="body" style={{ color: colors.text.secondary, fontSize: 18, lineHeight: 28 }}>
              {t("welcomeSubtextLine1")}
            </Text>
            <Text variant="body" style={{ color: colors.text.secondary, fontSize: 18, lineHeight: 28 }}>
              {t("welcomeSubtextLine2")}
            </Text>
          </View>
        </View>

        <View style={{ marginTop: spacing[4] + spacing[2] }}>
          <FeatureItem title={t("welcomeFeature1")} icon="camera" />
          <FeatureItem title={t("welcomeFeature2")} icon="workout" />
          <FeatureItem title={t("welcomeFeature3")} icon="ai" />
        </View>

        <Pressable
          onPress={() => router.replace("/(tabs)/home")}
          style={({ pressed }) => ({
            marginTop: spacing[4],
            height: 68,
            borderRadius: radius.full,
            backgroundColor: colors.accent.nutrition,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            opacity: pressed ? 0.92 : 1,
          })}
        >
          <Text variant="title" style={{ color: colors.bg.primary, fontWeight: "700", fontSize: 38 / 2 }}>
            {t("welcomeGetStarted")}
          </Text>
          <View style={{ position: "absolute", right: spacing[5] }}>
            <ArrowRight color={colors.bg.primary} size={28} />
          </View>
        </Pressable>

        <Pressable
          onPress={() => router.push("/profile")}
          style={({ pressed }) => ({
            marginTop: spacing[3],
            height: 56,
            borderRadius: radius.full,
            backgroundColor: "rgba(19, 24, 35, 0.84)",
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.15)",
            alignItems: "center",
            justifyContent: "center",
            opacity: pressed ? 0.92 : 1,
          })}
        >
          <Text variant="title">{t("welcomeSignIn")}</Text>
        </Pressable>

        <View style={{ marginTop: spacing[4], marginBottom: spacing[2], alignItems: "center", paddingHorizontal: spacing[2] }}>
          <Text variant="caption" style={{ textAlign: "center" }}>
            {t("welcomeAgreementPrefix")}
            <Text variant="caption" style={{ color: colors.accent.nutrition }}>
              {t("welcomeTerms")}
            </Text>
            {t("welcomeAgreementMiddle")}
            <Text variant="caption" style={{ color: colors.accent.nutrition }}>
              {t("welcomePrivacy")}
            </Text>
            .
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
