export type ThemeId = "base";

export interface ThemeColors {
  background: string;
  foreground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  border: string;
  input: string;
  ring: string;
}

export interface ThemeTypography {
  headingFont: string;
  bodyFont: string;
}

export interface ThemeRadius {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface ThemeShadows {
  card: string;
  input: string;
  button: string;
}

export interface ThemeDefinition {
  id: ThemeId;
  name: string;
  description: string;
  colors: ThemeColors;
  typography: ThemeTypography;
  radius: ThemeRadius;
  shadows: ThemeShadows;
}