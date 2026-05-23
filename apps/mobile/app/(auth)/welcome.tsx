import { useEffect, useState } from "react";
import { ImageBackground, Pressable, ScrollView, Text as RNText, View, useWindowDimensions } from "react-native";
import { router } from "expo-router";
import { ArrowRight, Brain, Camera, ChevronRight, Dumbbell } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { LanguageSelectionSheet, type LanguageCode } from "@/components/LanguageSelectionSheet";
import { useAppLanguage } from "@/hooks/useAppLanguage";
import { useAppFont } from "@/hooks/useAppFont";
import { useAppTheme } from "@/hooks/useAppTheme";
import { radius, spacing } from "@/theme/tokens";

type FeatureItemProps = {
  title: string;
  icon: "camera" | "workout" | "ai";
  titleFontFamily: string;
};

function FeatureItem({ title, icon, titleFontFamily }: FeatureItemProps) {
  const { colors } = useAppTheme();
  const Icon = icon === "camera" ? Camera : icon === "workout" ? Dumbbell : Brain;

  return (
    <Pressable
      accessibilityRole="button"
      style={({ pressed }) => ({
        width: "100%",
        opacity: pressed ? 0.92 : 1,
      })}
    >
      <View
        style={{
          width: "100%",
          minHeight: 86,
          marginTop: spacing[3],
          borderRadius: radius.lg,
          backgroundColor: "rgba(16, 23, 38, 0.98)",
          borderWidth: 1.5,
          borderColor: "#B8FF3D",
          shadowColor: "#000000",
          shadowOpacity: 0.45,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 8 },
          elevation: 8,
          justifyContent: "center",
          paddingHorizontal: spacing[4],
        }}
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
            fontFamily: titleFontFamily,
            fontWeight: "700",
            includeFontPadding: false,
          }}
        >
          {title}
        </RNText>

        <ChevronRight color={colors.text.muted} size={22} />
      </View>
      </View>
    </Pressable>
  );
}

export default function WelcomeScreen() {
  const { t, mode, setMode } = useAppLanguage();
  const { families } = useAppFont();
  const { colors } = useAppTheme();
  const { width, height } = useWindowDimensions();
  const [isLanguageSheetVisible, setIsLanguageSheetVisible] = useState(false);

  const currentLanguage: LanguageCode = mode === "hi" ? "hi" : "en";
  const languageLabel = currentLanguage.toUpperCase();
  const isSmallWidth = width < 380;
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

        <View
          pointerEvents="none"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "60%",
            backgroundColor: "rgba(5, 8, 14, 0.66)",
          }}
        />
      </View>

      <ScrollView
        style={{ zIndex: 1 }}
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
            <RNText
              numberOfLines={1}
              style={{
                color: colors.text.primary,
                fontSize: 15,
                lineHeight: 20,
                fontFamily: families.semibold,
                fontWeight: "800",
                includeFontPadding: false,
                textAlign: "center",
              }}
            >
              {languageLabel}
            </RNText>
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
                fontFamily: families.semibold,
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
      fontFamily: families.bold,
      fontWeight: "900",
      letterSpacing: 0,
      includeFontPadding: false,
    }}
           >
    {t("welcomeHeadlineLine1")}{" "}
    {t("welcomeHeadlineLine2Start")}
    <RNText style={{ color: colors.accent.nutrition, fontFamily: families.bold }}>
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
      fontFamily: families.bold,
      fontWeight: "900",
      letterSpacing: 0,
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
              fontFamily: families.medium,
              fontWeight: "500",
              includeFontPadding: false,
            }}
          >
            {t("welcomeSubtextLine1")} {t("welcomeSubtextLine2")}
          </RNText>
        </View>

        <View style={{ marginTop: spacing[6] }}>
          <FeatureItem title={t("welcomeFeature1")} icon="camera" titleFontFamily={families.bold} />
          <FeatureItem title={t("welcomeFeature2")} icon="workout" titleFontFamily={families.bold} />
          <FeatureItem title={t("welcomeFeature3")} icon="ai" titleFontFamily={families.bold} />
        </View>

        <View style={{ marginTop: spacing[8] }}>
          <Pressable
            accessibilityRole="button"
            onPress={() => router.replace("/(tabs)/home")}
            style={({ pressed }) => ({
              opacity: pressed ? 0.9 : 1,
            })}
          >
            <View
              style={{
                height: 55,
                borderRadius: radius.full,
                backgroundColor: "#B8FF3D",
                borderWidth: 2,
                borderColor: "rgba(255,255,255,0.75)",
                justifyContent: "center",
                shadowColor: "#000000",
                shadowOpacity: 0.35,
                shadowRadius: 18,
                shadowOffset: { width: 0, height: 10 },
                elevation: 8,
              }}
            >
              <View pointerEvents="none" style={{ width: "100%", alignItems: "center", justifyContent: "center" }}>
                <RNText
                  numberOfLines={1}
                  style={{
                    color: colors.bg.primary,
                    fontSize: 18,
                    lineHeight: 24,
                    fontFamily: families.bold,
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
            </View>
          </Pressable>

          <Pressable
            accessibilityRole="button"
            onPress={() => router.push("/profile")}
            style={({ pressed }) => ({
              marginTop: spacing[8],
              width: "80%",
              alignSelf: "center",
              opacity: pressed ? 0.9 : 1,
            })}
          >
            <View
              style={{
                height: 56,
                borderRadius: radius.full,
                backgroundColor: "rgba(5, 8, 14, 0.72)",
                borderWidth: 2,
                borderColor: "#B8FF3D",
                alignItems: "center",
                justifyContent: "center",
                elevation: 2,
              }}
            >
              <RNText
                numberOfLines={1}
                style={{
                  width: "100%",
                  textAlign: "center",
                  color: colors.text.primary,
                  fontSize: 16,
                  lineHeight: 22,
                  fontFamily: families.semibold,
                  fontWeight: "800",
                  includeFontPadding: false,
                }}
              >
                {t("welcomeSignIn")}
              </RNText>
            </View>
          </Pressable>
        </View>

        <View 
          style={{ 
            marginTop: "auto",
            paddingTop: spacing[8], 
            alignItems: "center", 
            paddingHorizontal: spacing[4] }}>
          <RNText
            style={{
              textAlign: "center",
              color: colors.text.muted,
              fontSize: 14,
              lineHeight: 22,
              fontFamily: families.regular,
              fontWeight: "500",
              includeFontPadding: false,
            }}
          >
            {t("welcomeAgreementPrefix")}
            <RNText style={{ color: colors.accent.nutrition, textDecorationLine: "underline", fontFamily: families.medium }}>{t("welcomeTerms")}</RNText>
            {t("welcomeAgreementMiddle")}
            <RNText style={{ color: colors.accent.nutrition, textDecorationLine: "underline", fontFamily: families.medium }}>{t("welcomePrivacy")}</RNText>.
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
