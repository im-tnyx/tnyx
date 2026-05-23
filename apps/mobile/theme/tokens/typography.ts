export const typography = {
  font: {
    // Resolved at runtime by useAppFont hook (default/custom).
    primary: "System",
    heading: "System",
    mono: "monospace",
  },
  text: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 30,
  },
  weight: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  leading: {
    tight: 1.2,
    normal: 1.4,
    relaxed: 1.6,
  },
} as const;
