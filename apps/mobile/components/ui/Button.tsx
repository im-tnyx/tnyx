import { ActivityIndicator, Pressable, PressableProps } from "react-native";
import { Text } from "@/components/ui/Text";
import { radius } from "@/theme/tokens";
import { useAppTheme } from "@/hooks/useAppTheme";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = Omit<PressableProps, "style"> & {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
};

export function Button({
  label,
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled,
  ...props
}: ButtonProps) {
  const { colors } = useAppTheme();
  const isDisabled = disabled || isLoading;
  const height = size === "sm" ? 40 : size === "md" ? 48 : 56;
  const horizontalPadding = size === "sm" ? 16 : size === "md" ? 20 : 24;

  return (
    <Pressable
      style={({ pressed }) => ({
        height,
        paddingHorizontal: horizontalPadding,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: radius.lg,
        opacity: pressed ? 0.9 : 1,
        backgroundColor: variant === "primary" ? colors.accent.primary : colors.bg.elevated,
        borderWidth: variant === "secondary" ? 1 : 0,
        borderColor: variant === "secondary" ? colors.bg.input : "transparent",
      })}
      disabled={isDisabled}
      accessibilityRole="button"
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color={colors.text.inverse} />
      ) : (
        <Text
          variant="body"
          style={{
            color: variant === "primary" ? colors.text.inverse : colors.text.primary,
            fontWeight: "600",
          }}
        >
          {label}
        </Text>
      )}
    </Pressable>
  );
}
