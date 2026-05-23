import { useEffect, useState } from "react";
import { ImageBackground, Pressable, ScrollView, Text as RNText, View, useWindowDimensions } from "react-native";
import { router } from "expo-router";
import { ArrowRight, Brain, Camera, ChevronDown, ChevronRight, Dumbbell, Globe } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { LanguageSelectionSheet, type LanguageCode } from "@/components/LanguageSelectionSheet";
import { useAppLanguage } from "@/hooks/useAppLanguage";
import { useAppTheme } from "@/hooks/useAppTheme";
import { radius, spacing } from "@/theme/tokens";
import { LinearGradient } from "expo-linear-gradient";

type FeatureItemProps = {
  title: string;
  icon: "camera" | "workout" | "ai";
};

function FeatureItem({ title, icon }: FeatureItemProps) {
  const { colors } = useAppTheme();
  const Icon = icon === "camera" ? Camera : icon === "workout" ? Dumbbell : Brain;

  return (
    <Pressable
      accessibilityRole="button"
      style={({ pressed }) => ({
        width: "100%",
        minHeight: 86,
        marginTop: spacing[3],
        borderRadius: radius.lg,
        backgroundColor: "#111622",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.22)",
        opacity: pressed ? 0.92 : 1,
        shadowColor: "#000000",
        shadowOpacity: 0.92,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 8 },
        elevation: 5,
        justifyContent: "center",
        paddingHorizontal: spacing[4],
      })}
    >
      <View
        pointerEvents="none"
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 52,
            height: 52,
            borderRadius: radius.lg,
            backgroundColor: "rgba(255,255,255,0.06)",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.16)",
            flexShrink: 0,
          }}
        >
          <Icon color={colors.accent.nutrition} size={27} />
        </View>

        <RNText
          numberOfLines={2}
          style={{
            flex: 1,
            minWidth: 0,
            marginLeft: spacing[4],
            marginRight: spacing[3],
            color: colors.text.primary,
            fontSize: 17,
            lineHeight: 23,
            fontWeight: "700",
            includeFontPadding: false,
          }}
        >
          {title}
        </RNText>

        <ChevronRight color={colors.text.muted} size={22} />
      </View>
    </Pressable>
  );
}

export default function WelcomeScreen() {
  const { t, mode, setMode } = useAppLanguage();
  const { colors } = useAppTheme();
  const { width, height } = useWindowDimensions();
  const [isLanguageSheetVisible, setIsLanguageSheetVisible] = useState(false);

  const currentLanguage: LanguageCode = mode === "hi" ? "hi" : "en";
  const languageLabel = currentLanguage.toUpperCase();
  const isSmallWidth = width < 180;
  const heroFontSize = isSmallWidth ? 30 : 44;
  const heroLineHeight = isSmallWidth ? 42 : 50;
  const heroTopMargin = height < 760 ? spacing[10] : spacing[10] + 100;

  useEffect(() => {
    if (mode === "system") {
      setMode("en");
    }
  }, [mode, setMode]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg.primary }}>
      <StatusBar style="light" />

      <View pointerEvents="none" style={style.absoluteFill}>
        <ImageBackground
          source={require("../../assets/welcome_hero.png")}
          resizeMode="cover"
          style={{ 
            position: "absolute", 
            left: 0, 
            right: 0, 
            top: 0, 
            height: "78%", }}
          imageStyle={{ opacity: 0.96 }}
        >
          <View style={{ flex: 1, backgroundColor: "rgba(5, 8, 14, 0.52)" }} />
        </ImageBackground>

        <LinearGradient
           pointerEvents="none"
           colors={[
            "rgba(5, 8, 14, 0)",
            "rgba(5, 8, 14, 0.45)",
            "rgba(5, 8, 14, 0.82)",
          ]}
           locations={[0, 0.05, 1]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "60%",
          }}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: spacing[4],
          paddingTop: spacing[2],
          paddingBottom: spacing[2],
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: spacing[2],
          }}
        >
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Open language selection"
            onPress={() => setIsLanguageSheetVisible(true)}
            style={({ pressed }) => ({
              height: 42,
              minWidth: 92,
              borderRadius: radius.full,
              backgroundColor: "rgba(19, 24, 35, 0.78)",
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.18)",
              opacity: pressed ? 0.9 : 1,
              justifyContent: "center",
              paddingHorizontal: spacing[4],
            })}
          >
            <View pointerEvents="none" style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
              <Globe color={colors.accent.nutrition} size={20} />
              <RNText
                numberOfLines={1}
                style={{
                  marginLeft: spacing[2],
                  color: colors.text.primary,
                  fontSize: 15,
                  lineHeight: 20,
                  fontWeight: "800",
                  includeFontPadding: false,
                }}
              >
                {languageLabel}
              </RNText>
              <ChevronDown color={colors.text.secondary} size={18} style={{ marginLeft: spacing[2] }} />
            </View>
          </Pressable>

          <Pressable
            accessibilityRole="button"
            onPress={() => router.replace("/(tabs)/home")}
            hitSlop={10}
            style={({ pressed }) => ({ opacity: pressed ? 0.78 : 1, padding: spacing[2] })}
          >
            <RNText
              numberOfLines={1}
              style={{
                color: colors.text.primary,
                fontSize: 18,
                lineHeight: 24,
                fontWeight: "800",
                includeFontPadding: false,
              }}
            >
              {t("welcomeSkip")}
            </RNText>
          </Pressable>
        </View>

        <View style={{ marginTop: heroTopMargin }}>
  <RNText
    numberOfLines={1}
    adjustsFontSizeToFit
    minimumFontScale={0.68}
    style={{
      color: colors.text.primary,
      fontSize: heroFontSize,
      lineHeight: heroLineHeight,
      fontWeight: "900",
      letterSpacing: -1.2,
      includeFontPadding: false,
    }}
           >
    {t("welcomeHeadlineLine1")}{" "}
    {t("welcomeHeadlineLine2Start")}
    <RNText style={{ color: colors.accent.nutrition }}>
      {t("welcomeHeadlineLine2Accent")}
    </RNText>
  </RNText>

           <RNText
    numberOfLines={1}
    adjustsFontSizeToFit
    minimumFontScale={0.72}
    style={{
      color: colors.text.primary,
      fontSize: heroFontSize,
      lineHeight: heroLineHeight,
      fontWeight: "900",
      letterSpacing: -1.2,
      includeFontPadding: false,
      marginTop: spacing[1],
    }}
  >
    {t("welcomeHeadlineLine3")}
  </RNText>

          <RNText
            style={{
              marginTop: spacing[4],
              color: colors.text.secondary,
              fontSize: 16,
              lineHeight: 24,
              fontWeight: "500",
              includeFontPadding: false,
            }}
          >
            {t("welcomeSubtextLine1")} {t("welcomeSubtextLine2")}
          </RNText>
        </View>

        <View style={{ marginTop: spacing[6] }}>
          <FeatureItem title={t("welcomeFeature1")} icon="camera" />
          <FeatureItem title={t("welcomeFeature2")} icon="workout" />
          <FeatureItem title={t("welcomeFeature3")} icon="ai" />
        </View>

        <View style={{ marginTop: spacing[8] }}>
          <Pressable
            accessibilityRole="button"
            onPress={() => router.replace("/(tabs)/home")}
            style={({ pressed }) => ({
              height: 62,
              borderRadius: radius.full,
              backgroundColor: "#B8FF3D",
              opacity: pressed ? 0.9 : 1,
              justifyContent: "center",
              
              shadowColor: "#ffffff",
              shadowOpacity: 0.35,
              shadowRadius: 18,
              shadowOffset: { width: 0, height: 10 },
              elevation: 6,
            })}
          >
            <View pointerEvents="none" style={{ width: "100%", alignItems: "center", justifyContent: "center" }}>
              <RNText
                numberOfLines={1}
                style={{
                  color: colors.bg.primary,
                  fontSize: 18,
                  lineHeight: 24,
                  fontWeight: "900",
                  includeFontPadding: false,
                }}
              >
                {t("welcomeGetStarted")}
              </RNText>
              <View style={{ position: "absolute", right: spacing[5] }}>
                <ArrowRight color={colors.bg.primary} size={25} />
              </View>
            </View>
          </Pressable>

          <Pressable
  accessibilityRole="button"
  onPress={() => router.push("/profile")}
  style={({ pressed }) => ({
    marginTop: spacing[3],
    height: 56,
    width: "80%",
    alignSelf: "center",
    borderRadius: radius.full,

    backgroundColor: "transparent",
    borderWidth: 2,
    elevation: 1,
    borderColor: "#B8FF3D",

    alignItems: "center",
    justifyContent: "center",
    opacity: pressed ? 0.9 : 1,
  })}
>
  <RNText
    numberOfLines={1}
    style={{
      width: "100%",
      textAlign: "center",
      color: colors.text.primary,
      fontSize: 16,
      lineHeight: 22,
      fontWeight: "800",
      includeFontPadding: false,
    }}
  >
    {t("welcomeSignIn")}
  </RNText>
</Pressable>
        </View>

        <View 
          style={{ 
            marginTop: "auto",
            paddingTop: spacing[6], 
            alignItems: "center", 
            paddingHorizontal: spacing[4] }}>
          <RNText
            style={{
              textAlign: "center",
              color: colors.text.muted,
              fontSize: 14,
              lineHeight: 22,
              fontWeight: "500",
              includeFontPadding: false,
            }}
          >
            {t("welcomeAgreementPrefix")}
            <RNText style={{ color: colors.accent.nutrition, textDecorationLine: "underline" }}>{t("welcomeTerms")}</RNText>
            {t("welcomeAgreementMiddle")}
            <RNText style={{ color: colors.accent.nutrition, textDecorationLine: "underline" }}>{t("welcomePrivacy")}</RNText>.
          </RNText>
        </View>
      </ScrollView>

      <LanguageSelectionSheet
        visible={isLanguageSheetVisible}
        selectedLanguage={currentLanguage}
        onDismiss={() => setIsLanguageSheetVisible(false)}
        onApplyLanguage={(language) => {
          setMode(language);
          setIsLanguageSheetVisible(false);
        }}
      />
    </SafeAreaView>
  );
}

const style = {
  absoluteFill: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
};