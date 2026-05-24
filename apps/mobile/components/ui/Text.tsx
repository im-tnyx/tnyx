import { Text as RNText, TextProps } from "react-native";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useAppFont } from "@/hooks/useAppFont";
import { typography } from "@/theme/tokens";

type AppTextVariant = "hero" | "heading" | "title" | "body" | "caption" | "label";

type AppTextProps = TextProps & {
  variant?: AppTextVariant;
};

const variantStyleMap = {
  hero: { fontSize: typography.text["3xl"], lineHeightMultiplier: typography.leading.tight, fontWeight: typography.weight.bold },
  heading: { fontSize: typography.text["2xl"], lineHeightMultiplier: typography.leading.tight, fontWeight: typography.weight.semibold },
  title: { fontSize: typography.text.xl, lineHeightMultiplier: typography.leading.normal, fontWeight: typography.weight.semibold },
  body: { fontSize: typography.text.md, lineHeightMultiplier: typography.leading.normal, fontWeight: typography.weight.regular },
  caption: { fontSize: typography.text.sm, lineHeightMultiplier: typography.leading.normal, fontWeight: typography.weight.regular },
  label: { fontSize: typography.text.xs, lineHeightMultiplier: typography.leading.normal, fontWeight: typography.weight.medium },
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
  const { families, useSystemWeight } = useAppFont();
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
          fontSize: variantStyle.fontSize,
          lineHeight: Math.round(variantStyle.fontSize * variantStyle.lineHeightMultiplier),
          fontWeight: useSystemWeight ? variantStyle.fontWeight : undefined,
          letterSpacing: 0,
        },
        style,
      ]}
      {...props}
    />
  );
}
