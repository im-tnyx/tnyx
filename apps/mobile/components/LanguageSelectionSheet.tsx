import { Modal, Pressable, Text as RNText, View } from "react-native";
import { CheckCircle, Circle, X } from "lucide-react-native";
import { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
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
  { code: "en", flag: "🇺🇸", title: "English" },
  { code: "hi", flag: "🇮🇳", title: "हिंदी" },
];

export function LanguageSelectionSheet({
  visible,
  selectedLanguage,
  onDismiss,
  onApplyLanguage,
}: LanguageSelectionSheetProps) {
  const { colors } = useAppTheme();
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
            paddingBottom: Math.max(insets.bottom, spacing[4]) + spacing[2],
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
                fontWeight: "800",
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
              style={{
                width: 38,
                height: 38,
                borderRadius: radius.full,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(255,255,255,0.08)",
                marginLeft: spacing[3],
              }}
            >
              <X color={colors.text.secondary} size={20} />
            </Pressable>
          </View>

          <View style={{ width: "100%", marginTop: spacing[2] }}>
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
                    minHeight: 76,
                    borderRadius: radius.lg,
                    borderWidth: isSelected ? 2 : 1,
                    borderColor: isSelected ? colors.accent.nutrition : "rgba(255,255,255,0.14)",
                    backgroundColor: isSelected ? "rgba(141, 255, 184, 0.12)" : "rgba(255,255,255,0.06)",
                    marginTop: spacing[3],
                    paddingHorizontal: spacing[4],
                    opacity: pressed ? 0.9 : 1,
                    justifyContent: "center",
                  })}
                >
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <RNText
                      style={{
                        width: 36,
                        fontSize: 24,
                        lineHeight: 30,
                        includeFontPadding: false,
                      }}
                    >
                      {language.flag}
                    </RNText>

                    <View style={{ flex: 1, minWidth: 0, marginLeft: spacing[3], marginRight: spacing[3] }}>
                      <RNText
                        numberOfLines={1}
                        style={{
                          color: isSelected ? colors.accent.nutrition : colors.text.primary,
                          fontSize: 17,
                          lineHeight: 22,
                          fontWeight: "800",
                          includeFontPadding: false,
                        }}
                      >
                        {language.title}
                      </RNText>
                      <RNText
                        numberOfLines={1}
                        style={{
                          marginTop: 4,
                          color: colors.text.muted,
                          fontSize: 13,
                          lineHeight: 17,
                          fontWeight: "500",
                          includeFontPadding: false,
                        }}
                      >
                        {language.subtitle}
                      </RNText>
                    </View>

                    <View
                      style={{
                        width: 30,
                        height: 30,
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
                </Pressable>
              );
            })}
          </View>

          <Pressable
            accessibilityRole="button"
            onPress={() => onApplyLanguage(draftLanguage)}
            style={({ pressed }) => ({
              width: "100%",
              height: 56,
              borderRadius: radius.full,
              backgroundColor: colors.accent.nutrition,
              alignItems: "center",
              justifyContent: "center",
              marginTop: spacing[5],
              opacity: pressed ? 0.9 : 1,
            })}
          >
            <RNText
              numberOfLines={1}
              style={{
                color: colors.bg.primary,
                fontSize: 17,
                lineHeight: 22,
                fontWeight: "900",
                includeFontPadding: false,
              }}
            >
              {applyLabel}
            </RNText>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
