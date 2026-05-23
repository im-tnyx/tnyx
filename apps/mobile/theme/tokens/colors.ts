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
    primary: "#5EA2FF",
    success: "#31D0AA",
    warning: "#F7B546",
    error: "#FF5D7A",
    ai: "#8C7BFF",
    recovery: "#47D1C8",
    hydration: "#48A9FF",
    nutrition: "#7CE38B",
    workout: "#FF7E4E",
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
    primary: "#3B82F6",
    success: "#059669",
    warning: "#D97706",
    error: "#DC2626",
    ai: "#6366F1",
    recovery: "#0EA5A4",
    hydration: "#0284C7",
    nutrition: "#16A34A",
    workout: "#EA580C",
  },
};
