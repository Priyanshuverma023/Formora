import type { ThemeDefinition } from "../types";

export const baseTheme: ThemeDefinition = {
  id: "base",
  name: "Base",
  description: "A clean and minimal Formora theme.",

  colors: {
    background: "#ffffff",
    foreground: "#111111",
    primary: "#111111",
    primaryForeground: "#ffffff",
    secondary: "#f4f4f5",
    secondaryForeground: "#18181b",
    muted: "#f4f4f5",
    mutedForeground: "#71717a",
    border: "#e4e4e7",
    input: "#ffffff",
    ring: "#18181b",
  },

  typography: {
    headingFont: "var(--font-geist-sans)",
    bodyFont: "var(--font-geist-sans)",
  },

  radius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
  },

  shadows: {
    card: "0 1px 3px rgba(0, 0, 0, 0.1)",
    input: "0 1px 2px rgba(0, 0, 0, 0.05)",
    button: "0 1px 2px rgba(0, 0, 0, 0.1)",
  },
};