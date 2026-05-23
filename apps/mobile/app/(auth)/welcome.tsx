import { useEffect, useState } from "react";
import { ImageBackground, Modal, Pressable, ScrollView, View, useWindowDimensions } from "react-native";
import { router } from "expo-router";
import { ArrowRight, Brain, Camera, ChevronDown, ChevronRight, Dumbbell, Globe } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Text } from "@/components/ui";
import { useAppLanguage } from "@/hooks/useAppLanguage";
import { useAppTheme } from "@/hooks/useAppTheme";
import { radius, spacing } from "@/theme/tokens";

type AppLanguage = "en" | "hi";

type FeatureItemProps = {
  title: string;
  icon: "camera" | "workout" | "ai";
};

type LanguageOption = {
  value: AppLanguage;
  flag: string;
  label: string;
  nativeLabel: string;
};

type LanguageSelectionSheetProps = {
  visible: boolean;
  selectedLanguage: AppLanguage;
  onSelectLanguage: (language: AppLanguage) => void;
  onApply: () => void;
  onDismiss: () => void;
};

const languageOptions: LanguageOption[] = [
  { value: "en", flag: "🇺🇸", label: "English", nativeLabel: "English" },
  { value: "hi", flag: "🇮🇳", label: "Hindi", nativeLabel: "हिंदी" },
];

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
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 8 },
        elevation: 5,
      })}
    >
      <View
        style={{
          width: 40,
          height: 40,
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

function LanguageSelectionSheet({
  visible,
  selectedLanguage,
  onSelectLanguage,
  onApply,
  onDismiss,
}: LanguageSelectionSheetProps) {
  const { colors } = useAppTheme();
  const isHindiSelected = selectedLanguage === "hi";

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onDismiss}>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Close language selector"
          onPress={onDismiss}
          style={{ ...style.absoluteFill, backgroundColor: "rgba(0,0,0,0.56)" }}
        />

        <SafeAreaView
          edges={["bottom"]}
          style={{
            backgroundColor: colors.bg.primary,
            borderTopLeftRadius: radius.lg,
            borderTopRightRadius: radius.lg,
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.12)",
            paddingHorizontal: spacing[4],
            paddingTop: spacing[4],
            paddingBottom: spacing[4],
          }}
        >
          <View
            style={{
              alignSelf: "center",
              width: 44,
              height: 5,
              borderRadius: radius.full,
              backgroundColor: "rgba(255,255,255,0.24)",
              marginBottom: spacing[4],
            }}
          />

          <Text variant="title" style={{ fontWeight: "700", fontSize: 22 }}>
            {isHindiSelected ? "भाषा चुनें" : "Select language"}
          </Text>

          <View style={{ marginTop: spacing[3] }}>
            {languageOptions.map((language) => {
              const isSelected = selectedLanguage === language.value;

              return (
                <Pressable
                  key={language.value}
                  onPress={() => onSelectLanguage(language.value)}
                  style={({ pressed }) => ({
                    minHeight: 64,
                    marginTop: spacing[3],
                    borderRadius: radius.lg,
                    backgroundColor: isSelected ? "rgba(82, 255, 168, 0.12)" : "rgba(255,255,255,0.05)",
                    borderWidth: isSelected ? 2 : 1,
                    borderColor: isSelected ? colors.accent.nutrition : "rgba(255,255,255,0.14)",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: spacing[4],
                    opacity: pressed ? 0.9 : 1,
                  })}
                >
                  <Text variant="title" style={{ fontSize: 22 }}>
                    {language.flag}
                  </Text>

                  <View style={{ flex: 1, marginLeft: spacing[3] }}>
                    <Text
                      variant="title"
                      style={{
                        color: isSelected ? colors.accent.nutrition : colors.text.secondary,
                        fontWeight: "700",
                        fontSize: 17,
                      }}
                    >
                      {language.nativeLabel}
                    </Text>
                    <Text variant="caption" style={{ color: colors.text.muted, marginTop: 2 }}>
                      {language.label}
                    </Text>
                  </View>

                  <View
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 12,
                      borderWidth: isSelected ? 0 : 1,
                      borderColor: "rgba(255,255,255,0.35)",
                      backgroundColor: isSelected ? colors.accent.nutrition : "transparent",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {isSelected ? (
                      <Text variant="caption" style={{ color: colors.bg.primary, fontWeight: "800", lineHeight: 18 }}>
                        ✓
                      </Text>
                    ) : null}
                  </View>
                </Pressable>
              );
            })}
          </View>

          <Pressable
            onPress={onApply}
            style={({ pressed }) => ({
              height: 56,
              marginTop: spacing[5],
              borderRadius: radius.full,
              backgroundColor: colors.accent.nutrition,
              alignItems: "center",
              justifyContent: "center",
              opacity: pressed ? 0.92 : 1,
            })}
          >
            <Text variant="title" style={{ color: colors.bg.primary, fontWeight: "700", fontSize: 17 }}>
              {isHindiSelected ? "लागू करें" : "Apply"}
            </Text>
          </Pressable>
        </SafeAreaView>
      </View>
    </Modal>
  );
}

export default function WelcomeScreen() {
  const { t, mode, setMode } = useAppLanguage();
  const { colors } = useAppTheme();
  const { width } = useWindowDimensions();
  const currentLanguage: AppLanguage = mode === "hi" ? "hi" : "en";
  const [isLanguageSheetVisible, setIsLanguageSheetVisible] = useState(false);
  const [draftLanguage, setDraftLanguage] = useState<AppLanguage>(currentLanguage);

  const languageLabel = currentLanguage.toUpperCase();
  const heroFontSize = width < 350 ? 46 : 54; // Text overlaps standard screen width if too large
  const heroLineHeight = width < 350 ? 50 : 58;

  useEffect(() => {
    if (mode === "system") {
      setMode("en");
    }
  }, [mode, setMode]);

  const openLanguageSheet = () => {
    setDraftLanguage(currentLanguage);
    setIsLanguageSheetVisible(true);
  };

  const applyLanguage = () => {
    setMode(draftLanguage);
    setIsLanguageSheetVisible(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg.primary }}>
      <StatusBar style="light" />

      {/* Background Container - Purely behind everything */}
      <View style={{ ...style.absoluteFill, zIndex: -1 }}>
        <ImageBackground
          source={require("../../assets/welcome_hero.png")}
          resizeMode="cover"
          style={{ flex: 1 }}
          imageStyle={{ opacity: 0.94 }}
        >
          {/* Top dark overlay to blend the image */}
          <View style={{ flex: 1, backgroundColor: "rgba(5, 8, 14, 0.58)" }} />
        </ImageBackground>

        {/* Bottom solid-to-gradient background for text readability */}
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "15%", // Increased height to make sure text is fully readable
            backgroundColor: colors.bg.primary,
            opacity: 0.92,
          }}
        />
      </View>

      {/* Main Content ScrollView - Normal layout without absolute positioning */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: spacing[4],
          paddingTop: spacing[2],
          paddingBottom: spacing[10], // Added extra bottom padding for spacing below terms
        }}
      >
        {/* Header Options */}
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: spacing[2] }}>
          <Pressable
            onPress={openLanguageSheet}
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

        {/* Hero Headline Section */}
        <View style={{ marginTop: spacing[10] }}>
          <Text variant="hero" style={{ fontSize: heroFontSize, lineHeight: heroLineHeight, fontWeight: "800" }}>
            {t("welcomeHeadlineLine1")}
          </Text>
          <Text variant="hero" style={{ fontSize: heroFontSize, lineHeight: heroLineHeight, fontWeight: "800", marginTop: spacing[1] }}>
            {t("welcomeHeadlineLine2Start")}
            <Text variant="hero" style={{ color: colors.accent.nutrition, fontSize: heroFontSize, lineHeight: heroLineHeight, fontWeight: "800" }}>
              {t("welcomeHeadlineLine2Accent")}
            </Text>
          </Text>
          <Text variant="hero" style={{ fontSize: heroFontSize, lineHeight: heroLineHeight, fontWeight: "800", marginTop: spacing[1] }}>
            {t("welcomeHeadlineLine3")}
          </Text>

          <View style={{ marginTop: spacing[4] }}>
            <Text variant="body" style={{ color: colors.text.secondary, fontSize: 16, lineHeight: 24 }}>
              {t("welcomeSubtextLine1")} {t("welcomeSubtextLine2")}
            </Text>
          </View>
        </View>

        {/* Features List */}
        <View style={{ marginTop: spacing[6] }}>
          <FeatureItem title={t("welcomeFeature1")} icon="camera" />
          <FeatureItem title={t("welcomeFeature2")} icon="workout" />
          <FeatureItem title={t("welcomeFeature3")} icon="ai" />
        </View>

        {/* Action Buttons */}
        <View style={{ marginTop: spacing[6] }}>
          <Pressable
            onPress={() => router.replace("/(tabs)/home")}
            style={({ pressed }) => ({
              height: 62,
              borderRadius: radius.full,
              backgroundColor: colors.accent.nutrition,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              opacity: pressed ? 0.92 : 1,
            })}
          >
            <Text variant="title" style={{ color: colors.bg.primary, fontWeight: "700", fontSize: 18 }}>
              {t("welcomeGetStarted")}
            </Text>
            <View style={{ position: "absolute", right: spacing[5] }}>
              <ArrowRight color={colors.bg.primary} size={24} />
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
            <Text variant="title" style={{ fontWeight: "600", fontSize: 16 }}>
              {t("welcomeSignIn")}
            </Text>
          </Pressable>
        </View>

        {/* Terms and Privacy Footer */}
        <View style={{ marginTop: spacing[6], alignItems: "center", paddingHorizontal: spacing[2] }}>
          <Text variant="caption" style={{ textAlign: "center", color: colors.text.muted, lineHeight: 18 }}>
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

      <LanguageSelectionSheet
        visible={isLanguageSheetVisible}
        selectedLanguage={draftLanguage}
        onSelectLanguage={setDraftLanguage}
        onApply={applyLanguage}
        onDismiss={() => setIsLanguageSheetVisible(false)}
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
