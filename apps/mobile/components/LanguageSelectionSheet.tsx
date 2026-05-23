import { Modal, Pressable, View } from "react-native";
import { CheckCircle, Circle, X } from "lucide-react-native";
import { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "@/components/ui";
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
  label: string;
};

const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: "en", flag: "🇺🇸", label: "English" },
  { code: "hi", flag: "🇮🇳", label: "हिंदी" },
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
      animationType="fade"
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
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.58)",
          }}
        />

        <View
          style={{
            width: "100%",
            borderTopLeftRadius: radius.lg,
            borderTopRightRadius: radius.lg,
            backgroundColor: colors.bg.primary,
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.12)",
            paddingHorizontal: spacing[4],
            paddingTop: spacing[3],
            paddingBottom: Math.max(insets.bottom, spacing[4]) + spacing[2],
            shadowColor: "#000000",
            shadowOpacity: 0.42,
            shadowRadius: 18,
            shadowOffset: { width: 0, height: -8 },
            elevation: 12,
          }}
        >
          <View
            style={{
              width: 44,
              height: 5,
              borderRadius: radius.full,
              backgroundColor: "rgba(255,255,255,0.22)",
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
            <Text variant="title" style={{ fontWeight: "700", fontSize: 20 }}>
              {title}
            </Text>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Close language selection"
              onPress={onDismiss}
              style={({ pressed }) => ({
                width: 36,
                height: 36,
                borderRadius: radius.full,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(255,255,255,0.08)",
                opacity: pressed ? 0.82 : 1,
              })}
            >
              <X color={colors.text.secondary} size={20} />
            </Pressable>
          </View>

          <View style={{ marginTop: spacing[2] }}>
            {LANGUAGE_OPTIONS.map((language) => {
              const isSelected = draftLanguage === language.code;

              return (
                <Pressable
                  key={language.code}
                  accessibilityRole="button"
                  accessibilityState={{ selected: isSelected }}
                  onPress={() => setDraftLanguage(language.code)}
                  style={({ pressed }) => ({
                    minHeight: 62,
                    width: "100%",
                    borderRadius: radius.lg,
                    borderWidth: isSelected ? 2 : 1,
                    borderColor: isSelected ? colors.accent.nutrition : "rgba(255,255,255,0.14)",
                    backgroundColor: isSelected ? "rgba(141, 255, 184, 0.11)" : "rgba(255,255,255,0.06)",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: spacing[4],
                    marginTop: spacing[3],
                    opacity: pressed ? 0.9 : 1,
                  })}
                >
                  <Text
                    variant="body"
                    style={{
                      width: 34,
                      fontSize: 22,
                      lineHeight: 28,
                      textAlign: "left",
                    }}
                  >
                    {language.flag}
                  </Text>

                  <Text
                    numberOfLines={1}
                    variant="title"
                    style={{
                      flex: 1,
                      minWidth: 0,
                      marginLeft: spacing[3],
                      fontWeight: "700",
                      fontSize: 17,
                      color: isSelected ? colors.accent.nutrition : colors.text.secondary,
                    }}
                  >
                    {language.label}
                  </Text>

                  <View
                    style={{
                      width: 32,
                      height: 32,
                      alignItems: "flex-end",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {isSelected ? (
                      <CheckCircle color={colors.accent.nutrition} size={25} />
                    ) : (
                      <Circle color={colors.text.muted} size={24} />
                    )}
                  </View>
                </Pressable>
              );
            })}
          </View>

          <Pressable
            accessibilityRole="button"
            onPress={() => onApplyLanguage(draftLanguage)}
            style={({ pressed }) => ({
              height: 56,
              width: "100%",
              borderRadius: radius.full,
              backgroundColor: colors.accent.nutrition,
              alignItems: "center",
              justifyContent: "center",
              marginTop: spacing[5],
              opacity: pressed ? 0.9 : 1,
            })}
          >
            <Text
              variant="title"
              style={{
                color: colors.bg.primary,
                fontWeight: "800",
                fontSize: 17,
              }}
            >
              {applyLabel}
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
