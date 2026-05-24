import { useState } from "react";
import { ImageBackground, Pressable, ScrollView, Text as RNText, View, useWindowDimensions } from "react-native";
import { router } from "expo-router";
import { ArrowRight, Brain, Camera, ChevronRight, Dumbbell } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { LanguageSelectionSheet } from "@/components/LanguageSelectionSheet";
import { useAppLanguage } from "@/hooks/useAppLanguage";
import { useAppFont } from "@/hooks/useAppFont";
import { useAppTheme } from "@/hooks/useAppTheme";
import { radius, spacing } from "@/theme/tokens";
import { LinearGradient } from "expo-linear-gradient";

type FeatureItemProps = {
  title: string;
  icon: "camera" | "workout" | "ai";
  titleFontFamily: string;
  cardHeight: number;
  useSystemWeight: boolean;
};

function FeatureItem({ title, icon, titleFontFamily, cardHeight, useSystemWeight }: FeatureItemProps) {
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
          height: cardHeight,
          borderRadius: radius.lg,
          backgroundColor: "transparent",
          borderWidth: 0.5,
          borderColor: "#B8FF3D",
          shadowColor: "#000000",
          shadowOpacity: 0.45,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 8 },
          elevation: 4,
          justifyContent: "center",
          paddingHorizontal: spacing[1],
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
            width: 40,
            height: 40,
            borderRadius: 16,
            backgroundColor: "transparent",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 0.05,
            borderColor: "rgba(255,255,255,0.16)",
            flexShrink: 0,
          }}
        >
          <Icon color={colors.accent.nutrition} size={20} />
        </View>

        <RNText
          numberOfLines={2}
          style={{
            flex: 1,
            minWidth: 0,
            marginLeft: spacing[1],
            marginRight: spacing[1],
            color: colors.text.primary,
            fontSize: 16,
            lineHeight: 23,
            fontFamily: titleFontFamily,
            fontWeight: useSystemWeight ? "500" : undefined,
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
  const { t, mode, setMode, language } = useAppLanguage();
  const { families, useSystemWeight } = useAppFont();
  const { colors } = useAppTheme();
  const { width, height } = useWindowDimensions();
  const [isLanguageSheetVisible, setIsLanguageSheetVisible] = useState(false);

  const currentLanguage = language;
  const languageLabel = currentLanguage.toUpperCase();
  const isSmallWidth = width < 380;
  const isCompactHeight = height < 780;
  const isTinyHeight = height < 700;

  const shouldMiddleScroll = isCompactHeight;

  const heroFontSize = isSmallWidth ? (isTinyHeight ? 26 : 30) : isCompactHeight ? 36 : 42;
  const heroLineHeight = isSmallWidth ? (isTinyHeight ? 32 : 36) : isCompactHeight ? 42 : 48;

  const subtextFontSize = isTinyHeight ? 14 : 15;
  const subtextLineHeight = isTinyHeight ? 20 : 22;

  const heroToFeaturesGap = isTinyHeight ? spacing[1] : spacing[3];
  const featureGap = isTinyHeight ? spacing[1] : spacing[2];
  const featuresToButtonsGap = isTinyHeight ? spacing[3] : spacing[5];

  const featureCardHeight = isTinyHeight ? 48 : 52;
  const buttonHeight = isTinyHeight ? 48 : 52;
  const buttonGap = isTinyHeight ? spacing[3] : 18;

  const termsFontSize = isTinyHeight ? 11 : 12;
  const termsLineHeight = isTinyHeight ? 16 : 18;
  const weightOrUndefined = (weight: "500" | "700" | "800" | "900") =>
    useSystemWeight ? weight : undefined;

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
            height: "75%", }}
          imageStyle={{ opacity: 0.96 }}
        >
          <LinearGradient
            pointerEvents="none"
            colors={[
              "rgba(5, 8, 14, 0.18)",
              "rgba(5, 8, 14, 0.08)",
              "rgba(5, 8, 14, 0)",
            ]}
            locations={[0, 0.35, 1]}
            style={style.absoluteFill}
          />
        </ImageBackground>

        <LinearGradient
          pointerEvents="none"
          colors={[
            "rgba(5, 8, 14, 0)",
            "rgba(5, 8, 14, 0.50)",
            "rgba(5, 8, 14, 1)",
            "rgba(5, 8, 14, 1)",
            "rgba(5, 8, 14, 1)",
            "rgba(5, 8, 14, 1)",
            "rgba(5, 8, 14, 1)",
            "rgba(5, 8, 14, 1)",
          ]}
          locations={[0, 0.14, 0.28, 0.42, 0.56, 0.7, 0.84, 1]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "82%",
          }}
        />
      </View>

      <View
        style={{
          zIndex: 1,
          flex: 1,
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
              paddingHorizontal: spacing[2],
            })}
          >
            <RNText
              numberOfLines={1}
              style={{
                color: colors.text.primary,
                fontSize: 18,
                lineHeight: 20,
                fontFamily: families.semibold,
                fontWeight: weightOrUndefined("800"),
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
            style={({ pressed }) => ({ opacity: pressed ? 0.78 : 1, padding: spacing[1] })}
          >
            <RNText
              numberOfLines={1}
              style={{
                color: colors.text.primary,
                fontSize: 18,
                lineHeight: 24,
                fontFamily: families.semibold,
                fontWeight: weightOrUndefined("800"),
                includeFontPadding: false,
              }}
            >
              {t("welcomeSkip")}
            </RNText>
          </Pressable>
        </View>

        <ScrollView
          style={{ flex: 1 }}
          scrollEnabled={shouldMiddleScroll}
          bounces={false}
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "flex-end",
            paddingTop: spacing[6],
            paddingBottom: spacing[6],
          }}
        >
          <View>
            <RNText
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.68}
              style={{
                color: colors.text.primary,
                fontSize: heroFontSize,
                lineHeight: heroLineHeight,
                fontFamily: families.bold,
                fontWeight: weightOrUndefined("900"),
                letterSpacing: 0,
                includeFontPadding: false,
              }}
            >
              {t("welcomeHeadlineLine1")} {t("welcomeHeadlineLine2Start")}
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
                fontWeight: weightOrUndefined("900"),
                letterSpacing: 0,
                includeFontPadding: false,
                marginTop: spacing[1],
              }}
            >
              {t("welcomeHeadlineLine3")}
            </RNText>

            <RNText
              style={{
                marginTop: spacing[2],
                color: colors.text.secondary,
                fontSize: subtextFontSize,
                lineHeight: subtextLineHeight,
                fontFamily: families.medium,
                fontWeight: weightOrUndefined("500"),
                includeFontPadding: false,
              }}
            >
              {t("welcomeSubtextLine1")} {t("welcomeSubtextLine2")}
            </RNText>
          </View>

          <View style={{ marginTop: heroToFeaturesGap, gap: featureGap }}>
            <FeatureItem
              title={t("welcomeFeature1")}
              icon="camera"
              titleFontFamily={families.regular}
              cardHeight={featureCardHeight}
              useSystemWeight={useSystemWeight}
            />
            <FeatureItem
              title={t("welcomeFeature2")}
              icon="workout"
              titleFontFamily={families.regular}
              cardHeight={featureCardHeight}
              useSystemWeight={useSystemWeight}
            />
            <FeatureItem
              title={t("welcomeFeature3")}
              icon="ai"
              titleFontFamily={families.regular}
              cardHeight={featureCardHeight}
              useSystemWeight={useSystemWeight}
            />
          </View>

          <View style={{ marginTop: featuresToButtonsGap, gap: buttonGap }}>
            <Pressable
              accessibilityRole="button"
              onPress={() => router.replace("/(tabs)/home")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.9 : 1,
              })}
            >
              <View
                style={{
                  height: buttonHeight,
                  borderRadius: 16,
                  backgroundColor: "#B8FF3D",
                  borderWidth: 1,
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
                      fontWeight: weightOrUndefined("900"),
                      includeFontPadding: false,
                    }}
                  >
                    {t("welcomeGetStarted")}
                  </RNText>
                  <View style={{ position: "absolute", right: spacing[2] }}>
                    <ArrowRight color={colors.bg.primary} size={24} />
                  </View>
                </View>
              </View>
            </Pressable>

            <Pressable
              accessibilityRole="button"
              onPress={() => router.push("/profile")}
              style={({ pressed }) => ({
                width: "80%",
                alignSelf: "center",
                opacity: pressed ? 0.9 : 1,
              })}
            >
              <View
                style={{
                  height: buttonHeight,
                  borderRadius: 16,
                  backgroundColor: "transparent",
                  borderWidth: 1,
                  borderColor: "#B8FF3D",
                  alignItems: "center",
                  justifyContent: "center",
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
                    fontWeight: weightOrUndefined("800"),
                    includeFontPadding: false,
                  }}
                >
                  {t("welcomeSignIn")}
                </RNText>
              </View>
            </Pressable>
          </View>
        </ScrollView>

        <View
          style={{
            alignItems: "center",
            paddingHorizontal: spacing[4],
            paddingBottom: spacing[1],
          }}
        >
          <RNText
            style={{
              textAlign: "center",
              color: colors.text.muted,
              fontSize: termsFontSize,
              lineHeight: termsLineHeight,
              fontFamily: families.regular,
              fontWeight: weightOrUndefined("500"),
              includeFontPadding: false,
            }}
          >
            {t("welcomeAgreementPrefix")}
            <RNText style={{ color: colors.accent.nutrition, textDecorationLine: "underline", fontFamily: families.medium }}>
              {t("welcomeTerms")}
            </RNText>
            {t("welcomeAgreementMiddle")}
            <RNText style={{ color: colors.accent.nutrition, textDecorationLine: "underline", fontFamily: families.medium }}>
              {t("welcomePrivacy")}
            </RNText>
            .
          </RNText>
        </View>
      </View>

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
