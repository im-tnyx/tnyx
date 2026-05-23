import { ReactNode } from "react";
import { View } from "react-native";
import { radius } from "@/theme/tokens";
import { useAppTheme } from "@/hooks/useAppTheme";

type CardProps = {
  children: ReactNode;
  className?: string; // kept for optional utility spacing usage
};

export function Card({ children, className }: CardProps) {
  const { colors } = useAppTheme();

  return (
    <View
      className={className}
      style={{
        borderRadius: radius.lg,
        backgroundColor: colors.bg.card,
        padding: 16,
      }}
    >
      {children}
    </View>
  );
}
