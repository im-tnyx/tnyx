import { Image, View } from "react-native";
import { Text } from "@/components/ui/Text";
import { radius } from "@/theme/tokens";
import { useAppTheme } from "@/hooks/useAppTheme";

type AvatarProps = {
  uri?: string;
  initials?: string;
  size?: "sm" | "md" | "lg";
};

export function Avatar({ uri, initials = "TN", size = "md" }: AvatarProps) {
  const { colors } = useAppTheme();
  const sizeValue = size === "sm" ? 32 : size === "md" ? 40 : 56;

  if (uri) {
    return (
      <Image
        source={{ uri }}
        accessibilityLabel="avatar-image"
        style={{ width: sizeValue, height: sizeValue, borderRadius: radius.full }}
      />
    );
  }

  return (
    <View
      className="items-center justify-center overflow-hidden"
      style={{
        width: sizeValue,
        height: sizeValue,
        borderRadius: radius.full,
        backgroundColor: colors.bg.elevated,
      }}
    >
      <Text variant="caption" style={{ color: colors.text.secondary, fontWeight: "600" }}>
        {initials}
      </Text>
    </View>
  );
}
