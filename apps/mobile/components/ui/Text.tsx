import { Text as RNText, TextProps } from "react-native";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useAppFont } from "@/hooks/useAppFont";
import { typography } from "@/theme/tokens";

type AppTextVariant = "hero" | "heading" | "title" | "body" | "caption" | "label";

type AppTextProps = TextProps & {
  variant?: AppTextVariant;
};

const variantStyleMap = {
  hero: { fontSize: typography.text["3xl"], fontWeight: "700" },
  heading: { fontSize: typography.text["2xl"], fontWeight: "600" },
  title: { fontSize: typography.text.xl, fontWeight: "600" },
  body: { fontSize: typography.text.md, fontWeight: "400" },
  caption: { fontSize: typography.text.sm, fontWeight: "400" },
  label: { fontSize: typography.text.xs, fontWeight: "500" },
} as const;

const variantColorKeyMap: Record<AppTextVariant, "primary" | "secondary" | "muted"> = {
  hero: "primary",
  heading: "primary",
  title: "primary",
  body: "primary",
  caption: "secondary",
  label: "muted",
};

export function Text({ variant = "body", style, ...props }: AppTextProps) {
  const { colors } = useAppTheme();
  const { families } = useAppFont();
  const variantStyle = variantStyleMap[variant];
  const color = colors.text[variantColorKeyMap[variant]];
  const fontFamily =
    variant === "hero"
      ? families.bold
      : variant === "heading" || variant === "title"
      ? families.semibold
      : variant === "label"
      ? families.medium
      : families.regular;

  return (
    <RNText
      style={[
        {
          fontFamily,
          color,
          lineHeight: Math.round(variantStyle.fontSize * typography.leading.normal),
        },
        variantStyle,
        style,
      ]}
      {...props}
    />
  );
}
