import { LucideIcon } from "lucide-react-native";
import { useAppTheme } from "@/hooks/useAppTheme";

type IconProps = {
  icon: LucideIcon;
  size?: number;
  color?: string;
};

export function Icon({ icon: IconNode, size = 20, color }: IconProps) {
  const { colors } = useAppTheme();
  return <IconNode size={size} color={color ?? colors.text.secondary} />;
}
