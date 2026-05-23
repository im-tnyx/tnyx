/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./features/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0A0D14",
        "bg-secondary": "#101522",
        "bg-elevated": "#121A2A",
        "bg-card": "#151B2C",
        "bg-modal": "#1A2236",
        "bg-input": "#1E2840",
        "text-primary": "#F5F7FF",
        "text-secondary": "#B8C1D9",
        "text-muted": "#7A849F",
        "text-inverse": "#0A0D14",
        "text-disabled": "#58627C",
        "accent-primary": "#5B8CFF",
        "accent-success": "#31D0AA",
        "accent-warning": "#F7B546",
        "accent-error": "#FF5D7A",
      },
      borderRadius: {
        md: "12px",
        lg: "16px",
        xl: "20px",
      },
    },
  },
  plugins: [],
};
