import type { ThemeDefinition } from "../types";

export const catTheme: ThemeDefinition = {
  id: "cat",
  name: "Cat",
  description: "A playful, cozy theme inspired by cats.",
  colors: {
    background: "#fff7fb",
    foreground: "#35263b",
    primary: "#d966a5",
    primaryForeground: "#ffffff",
    secondary: "#fce7f3",
    secondaryForeground: "#831843",
    muted: "#fdf2f8",
    mutedForeground: "#8b718b",
    border: "#f3c8df",
    input: "#ffffff",
    ring: "#d966a5",
  },
  typography: {
    headingFont: "var(--font-geist-sans)",
    bodyFont: "var(--font-geist-sans)",
  },
  radius: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
  },
  shadows: {
    card: "0 4px 12px rgba(217, 102, 165, 0.10)",
    input: "0 2px 5px rgba(217, 102, 165, 0.06)",
    button: "0 3px 8px rgba(217, 102, 165, 0.18)",
  },
};