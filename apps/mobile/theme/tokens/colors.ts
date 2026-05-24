export type ThemeColors = {
  bg: {
    primary: string;
    secondary: string;
    elevated: string;
    card: string;
    modal: string;
    input: string;
  };
  text: {
    primary: string;
    secondary: string;
    muted: string;
    inverse: string;
    disabled: string;
  };
  accent: {
    primary: string;
    success: string;
    warning: string;
    error: string;
    ai: string;
    recovery: string;
    hydration: string;
    nutrition: string;
    workout: string;
  };
  overlay: {
    backdrop: string;
    scrim: string;
  };
  border: {
    subtle: string;
    soft: string;
    strong: string;
    contrast: string;
  };
  surface: {
    chip: string;
    chipMuted: string;
    cardTranslucent: string;
    selectedTint: string;
    note: string;
  };
  shadow: {
    base: string;
  };
  icon: {
    onAccent: string;
  };
  gradient: {
    heroTop: readonly string[];
    heroBottom: readonly string[];
  };
};

export const darkColors: ThemeColors = {
  bg: {
    primary: "#0B0F1A",
    secondary: "#101522",
    elevated: "#121A2A",
    card: "#121826",
    modal: "#1A2236",
    input: "#1E2840",
  },
  text: {
    primary: "#F5F7FA",
    secondary: "#B8C1D9",
    muted: "#94A3B8",
    inverse: "#0B0F1A",
    disabled: "#58627C",
  },
  accent: {
    primary: "#6366F1",
    success: "#16A34A",
    warning: "#E7A73E",
    error: "#EF4444",
    ai: "#6366F1",
    recovery: "#6366F1",
    hydration: "#6366F1",
    nutrition: "#6366F1",
    workout: "#6366F1",
  },
  overlay: {
    backdrop: "rgba(0,0,0,0.72)",
    scrim: "rgba(0,0,0,0.62)",
  },
  border: {
    subtle: "rgba(255,255,255,0.12)",
    soft: "rgba(255,255,255,0.16)",
    strong: "rgba(255,255,255,0.45)",
    contrast: "rgba(255,255,255,0.75)",
  },
  surface: {
    chip: "rgba(19, 24, 35, 0.78)",
    chipMuted: "rgba(255,255,255,0.08)",
    cardTranslucent: "rgba(16, 23, 38, 0.95)",
    selectedTint: "rgba(124, 227, 139, 0.12)",
    note: "rgba(255,255,255,0.04)",
  },
  shadow: {
    base: "#000000",
  },
  icon: {
    onAccent: "#FFFFFF",
  },
  gradient: {
    heroTop: ["rgba(5, 8, 14, 0.18)", "rgba(5, 8, 14, 0.08)", "rgba(5, 8, 14, 0)"],
    heroBottom: [
      "rgba(5, 8, 14, 0)",
      "rgba(5, 8, 14, 0.50)",
      "rgba(5, 8, 14, 1)",
      "rgba(5, 8, 14, 1)",
      "rgba(5, 8, 14, 1)",
      "rgba(5, 8, 14, 1)",
      "rgba(5, 8, 14, 1)",
      "rgba(5, 8, 14, 1)",
    ],
  },
} as const;

export const lightColors: ThemeColors = {
  bg: {
    primary: "#F4F7FC",
    secondary: "#EAF0FA",
    elevated: "#FFFFFF",
    card: "#FFFFFF",
    modal: "#FFFFFF",
    input: "#E5ECF8",
  },
  text: {
    primary: "#0F172A",
    secondary: "#334155",
    muted: "#64748B",
    inverse: "#F8FAFC",
    disabled: "#94A3B8",
  },
  accent: {
    primary: "#6366F1",
    success: "#16A34A",
    warning: "#B77924",
    error: "#EF4444",
    ai: "#6366F1",
    recovery: "#6366F1",
    hydration: "#6366F1",
    nutrition: "#6366F1",
    workout: "#6366F1",
  },
  overlay: {
    backdrop: "rgba(15,23,42,0.42)",
    scrim: "rgba(15,23,42,0.36)",
  },
  border: {
    subtle: "rgba(15,23,42,0.12)",
    soft: "rgba(15,23,42,0.18)",
    strong: "rgba(15,23,42,0.24)",
    contrast: "rgba(15,23,42,0.2)",
  },
  surface: {
    chip: "rgba(255,255,255,0.84)",
    chipMuted: "rgba(15,23,42,0.08)",
    cardTranslucent: "rgba(255,255,255,0.96)",
    selectedTint: "rgba(22, 163, 74, 0.10)",
    note: "rgba(15,23,42,0.04)",
  },
  shadow: {
    base: "#0F172A",
  },
  icon: {
    onAccent: "#FFFFFF",
  },
  gradient: {
    heroTop: ["rgba(244, 247, 252, 0.08)", "rgba(244, 247, 252, 0.22)", "rgba(244, 247, 252, 0.36)"],
    heroBottom: [
      "rgba(244, 247, 252, 0)",
      "rgba(244, 247, 252, 0.28)",
      "rgba(244, 247, 252, 0.72)",
      "rgba(244, 247, 252, 0.86)",
      "rgba(244, 247, 252, 0.92)",
      "rgba(244, 247, 252, 0.96)",
      "rgba(244, 247, 252, 1)",
      "rgba(244, 247, 252, 1)",
    ],
  },
};
