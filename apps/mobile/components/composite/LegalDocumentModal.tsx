import { Modal, Pressable, ScrollView, Text as RNText, View } from "react-native";
import { CircleAlert, X } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppFont } from "@/hooks/useAppFont";
import { useAppTheme } from "@/hooks/useAppTheme";
import type { LegalDocumentContent } from "@/constants/legal/documents";
import { spacing } from "@/theme/tokens";

type LegalDocumentModalProps = {
  visible: boolean;
  document: LegalDocumentContent;
  onClose: () => void;
};

export function LegalDocumentModal({ visible, document, onClose }: LegalDocumentModalProps) {
  const { colors } = useAppTheme();
  const { families, useSystemWeight } = useAppFont();
  const insets = useSafeAreaInsets();
  const w = (weight: "500" | "600" | "700" | "800") => (useSystemWeight ? weight : undefined);

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose} statusBarTranslucent>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: spacing[3],
          paddingTop: Math.max(spacing[3], insets.top + spacing[2]),
          paddingBottom: Math.max(spacing[3], insets.bottom + spacing[2]),
        }}
      >
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Close legal document"
          onPress={onClose}
          style={{ position: "absolute", left: 0, top: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.72)" }}
        />

        <View
          style={{
            height: "94%",
            marginTop: spacing[12],
            borderRadius: 24,
            backgroundColor: "#0D0F13",
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.12)",
            overflow: "hidden",
          }}
        >
          <View
            pointerEvents="box-none"
            style={{
              position: "absolute",
              top: spacing[1],
              left: spacing[1],
              right: spacing[1],
              zIndex: 3,
              elevation: 12,
              alignItems: "flex-end",
            }}
          >
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Close"
              onPress={onClose}
              style={({ pressed }) => ({
                opacity: pressed ? 0.88 : 1,
              })}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#E05D5D",
                  borderWidth: 1.5,
                  borderColor: "rgba(255,255,255,0.45)",
                  alignItems: "center",
                  justifyContent: "center",
                  shadowColor: "#E05D5D",
                  shadowOpacity: 0.35,
                  shadowRadius: 10,
                  shadowOffset: { width: 0, height: 2 },
                  elevation: 8,
                }}
              >
                <X color="#FFFFFF" size={18} strokeWidth={2.6} />
              </View>
            </Pressable>
          </View>

          <View style={{ flex: 1 }}>
            <ScrollView
              style={{ flex: 1 }}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: spacing[4],
                paddingTop: spacing[4],
                paddingBottom: spacing[4],
              }}
            >
              <View style={{ marginBottom: spacing[3], paddingRight: spacing[12] }}>
                <RNText
                  style={{
                    color: colors.text.primary,
                    fontSize: 27,
                    lineHeight: 30,
                    fontFamily: families.bold,
                    fontWeight: w("800"),
                    includeFontPadding: false,
                  }}
                >
                  {document.title}
                </RNText>
              </View>

              <RNText
                style={{
                  color: colors.text.primary,
                  fontSize: 17,
                  lineHeight: 27,
                  fontFamily: families.regular,
                  fontWeight: w("500"),
                  includeFontPadding: false,
                }}
              >
                {document.intro}
              </RNText>

              {document.sections.map((section) => (
                <View key={section.title} style={{ marginTop: spacing[4] }}>
                  <RNText
                    style={{
                      color: colors.text.primary,
                      fontSize: 21,
                      lineHeight: 26,
                      fontFamily: families.bold,
                      fontWeight: w("700"),
                      includeFontPadding: false,
                    }}
                  >
                    {section.title}
                  </RNText>
                  <RNText
                    style={{
                      marginTop: spacing[2],
                      color: colors.text.primary,
                      fontSize: 17,
                      lineHeight: 27,
                      fontFamily: families.regular,
                      fontWeight: w("500"),
                      includeFontPadding: false,
                    }}
                  >
                    {section.body}
                  </RNText>
                </View>
              ))}

              <View
                style={{
                  marginTop: spacing[5],
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: "rgba(255,255,255,0.18)",
                  backgroundColor: "rgba(255,255,255,0.04)",
                  paddingHorizontal: spacing[3],
                  paddingVertical: spacing[3],
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: spacing[3],
                }}
              >
                <CircleAlert color="rgba(255,255,255,0.75)" size={18} style={{ marginTop: 2 }} />
                <RNText
                  style={{
                    flex: 1,
                    color: colors.text.secondary,
                    fontSize: 14,
                    lineHeight: 20,
                    fontFamily: families.medium,
                    fontWeight: w("600"),
                    includeFontPadding: false,
                    fontStyle: "italic",
                  }}
                >
                  {document.footerNote}
                </RNText>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </Modal>
  );
}
