import { TextInput, TextInputProps, View } from "react-native";
import { Text } from "@/components/ui/Text";
import { radius } from "@/theme/tokens";
import { useAppTheme } from "@/hooks/useAppTheme";

type InputProps = TextInputProps & {
  label?: string;
  errorText?: string;
};

export function Input({ label, errorText, ...props }: InputProps) {
  const { colors } = useAppTheme();

  return (
    <View style={{ width: "100%", gap: 8 }}>
      {label ? <Text variant="caption">{label}</Text> : null}
      <TextInput
        style={{
          height: 48,
          width: "100%",
          borderRadius: radius.lg,
          borderWidth: 1,
          borderColor: colors.bg.input,
          backgroundColor: colors.bg.input,
          paddingHorizontal: 16,
          color: colors.text.primary,
          fontSize: 16,
        }}
        placeholderTextColor={colors.text.muted}
        {...props}
      />
      {errorText ? (
        <Text variant="label" style={{ color: colors.accent.error }}>
          {errorText}
        </Text>
      ) : null}
    </View>
  );
}
