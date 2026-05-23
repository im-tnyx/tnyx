import { ActivityIndicator, View } from "react-native";
import { useAppTheme } from "@/hooks/useAppTheme";

type SpinnerProps = {
  size?: "small" | "large";
};

export function Spinner({ size = "small" }: SpinnerProps) {
  const { colors } = useAppTheme();
  return (
    <View className="items-center justify-center py-2">
      <ActivityIndicator size={size} color={colors.accent.primary} />
    </View>
  );
}
