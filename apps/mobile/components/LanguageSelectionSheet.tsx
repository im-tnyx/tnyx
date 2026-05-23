import { useEffect, useState } from "react";
import { Modal, Pressable, Text as RNText, View } from "react-native";
import { CheckCircle, Circle, X } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppFont } from "@/hooks/useAppFont";
import { useAppTheme } from "@/hooks/useAppTheme";
import { radius, spacing } from "@/theme/tokens";

export type LanguageCode = "en" | "hi";

type LanguageSelectionSheetProps = {
  visible: boolean;
  selectedLanguage: LanguageCode;
  onDismiss: () => void;
  onApplyLanguage: (language: LanguageCode) => void;
};

type LanguageOption = {
  code: LanguageCode;
  flag: string;
  title: string;
};

const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: "en", flag: "🇺🇸", title: "ENGLISH" },
  { code: "hi", flag: "🇮🇳", title: "हिंदी" },
];

export function LanguageSelectionSheet({
  visible,
  selectedLanguage,
  onDismiss,
  onApplyLanguage,
}: LanguageSelectionSheetProps) {
  const { colors } = useAppTheme();
  const { families } = useAppFont();
  const insets = useSafeAreaInsets();
  const [draftLanguage, setDraftLanguage] = useState<LanguageCode>(selectedLanguage);

  useEffect(() => {
    if (visible) {
      setDraftLanguage(selectedLanguage);
    }
  }, [selectedLanguage, visible]);

  const title = draftLanguage === "hi" ? "भाषा चुनें" : "Choose language";
  const applyLabel = draftLanguage === "hi" ? "लागू करें" : "Apply";

  return (
    <Modal
      animationType="slide"
      onRequestClose={onDismiss}
      transparent
      visible={visible}
      statusBarTranslucent
    >
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Close language selection"
          onPress={onDismiss}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,0.62)",
          }}
        />

        <View
          style={{
            width: "100%",
            borderTopLeftRadius: radius.lg,
            borderTopRightRadius: radius.lg,
            backgroundColor: colors.bg.primary,
            borderTopWidth: 1,
            borderColor: "rgba(255,255,255,0.12)",
            paddingHorizontal: spacing[4],
            paddingTop: spacing[3],
            paddingBottom: Math.max(insets.bottom, spacing[4]) + spacing[12],
          }}
        >
          <View
            style={{
              width: 44,
              height: 5,
              borderRadius: radius.full,
              backgroundColor: "rgba(255,255,255,0.24)",
              alignSelf: "center",
              marginBottom: spacing[4],
            }}
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: spacing[2],
            }}
          >
            <RNText
              numberOfLines={1}
              style={{
                flex: 1,
                color: colors.text.primary,
                fontSize: 22,
                lineHeight: 28,
                fontFamily: families.bold,
                includeFontPadding: false,
              }}
            >
              {title}
            </RNText>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Close language selection"
              onPress={onDismiss}
              hitSlop={10}
              style={({ pressed }) => ({
                width: 32,
                height: 32,
                borderRadius: radius.full,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(255,255,255,0.08)",
                marginLeft: spacing[3],
                opacity: pressed ? 0.85 : 1,
              })}
            >
              <X color={colors.text.secondary} size={20} />
            </Pressable>
          </View>

          <View style={{ width: "100%", marginTop: spacing[4] }}>
            {LANGUAGE_OPTIONS.map((language) => {
              const isSelected = draftLanguage === language.code;

              return (
                <Pressable
                  key={language.code}
                  accessibilityRole="button"
                  accessibilityState={{ selected: isSelected }}
                  onPress={() => setDraftLanguage(language.code)}
                  style={({ pressed }) => ({
                    width: "100%",
                    marginTop: spacing[3],
                    opacity: pressed ? 0.9 : 1,
                  })}
                >
                  <View
                    style={{
                      width: "100%",
                      minHeight: 84,
                      borderRadius: radius.lg,
                      borderWidth: isSelected ? 2 : 1.2,
                      borderColor: isSelected ? colors.accent.nutrition : "rgba(255,255,255,0.16)",
                      backgroundColor: isSelected ? "rgba(124, 227, 139, 0.12)" : "rgba(16, 23, 38, 0.95)",
                      paddingHorizontal: spacing[4],
                      justifyContent: "center",
                      shadowColor: "#000000",
                      shadowOpacity: isSelected ? 0.42 : 0.28,
                      shadowRadius: 10,
                      shadowOffset: { width: 0, height: 6 },
                      elevation: isSelected ? 7 : 4,
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
                      <RNText
                        style={{
                          width: 36,
                          color: colors.text.primary,
                          fontSize: 24,
                          lineHeight: 30,
                          textAlign: "center",
                          includeFontPadding: false,
                        }}
                      >
                        {language.flag}
                      </RNText>

                      <View style={{ flex: 1, minWidth: 0, marginLeft: spacing[4], marginRight: spacing[4] }}>
                        <RNText
                          numberOfLines={1}
                          style={{
                            color: isSelected ? colors.accent.nutrition : colors.text.primary,
                            fontSize: 17,
                            lineHeight: 22,
                            fontFamily: families.bold,
                            includeFontPadding: false,
                          }}
                        >
                          {language.title}
                        </RNText>
                      </View>

                      <View
                        style={{
                          width: 40,
                          height: 40,
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {isSelected ? (
                          <CheckCircle color={colors.accent.nutrition} size={26} />
                        ) : (
                          <Circle color={colors.text.muted} size={25} />
                        )}
                      </View>
                    </View>
                  </View>
                </Pressable>
              );
            })}
          </View>

          <Pressable
            accessibilityRole="button"
            onPress={() => onApplyLanguage(draftLanguage)}
            style={({ pressed }) => ({
              width: "100%",
              marginTop: spacing[5],
              opacity: pressed ? 0.9 : 1,
            })}
          >
            <View
              style={{
                height: 56,
                borderRadius: radius.full,
                backgroundColor: colors.accent.nutrition,
                borderWidth: 2,
                borderColor: "rgba(255,255,255,0.75)",
                alignItems: "center",
                justifyContent: "center",
                shadowColor: "#000000",
                shadowOpacity: 0.3,
                shadowRadius: 12,
                shadowOffset: { width: 0, height: 8 },
                elevation: 6,
              }}
            >
              <RNText
                numberOfLines={1}
                style={{
                  color: colors.bg.primary,
                  fontSize: 20,
                  lineHeight: 24,
                  fontFamily: families.bold,
                  includeFontPadding: false,
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                {applyLabel}
              </RNText>
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
