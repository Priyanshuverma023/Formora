"use client";

import * as React from "react";
import type { ThemeId } from "./types";
import { getTheme } from "./registry";

interface ThemeProviderProps {
  themeId?: ThemeId;
  children: React.ReactNode;
}

export function ThemeProvider({
  themeId = "base",
  children,
}: ThemeProviderProps) {
  const theme = getTheme(themeId);

  const themeStyle = {
  // Formora theme variables
  "--formora-background": theme.colors.background,
  "--formora-foreground": theme.colors.foreground,
  "--formora-primary": theme.colors.primary,
  "--formora-primary-foreground": theme.colors.primaryForeground,
  "--formora-secondary": theme.colors.secondary,
  "--formora-secondary-foreground": theme.colors.secondaryForeground,
  "--formora-muted": theme.colors.muted,
  "--formora-muted-foreground": theme.colors.mutedForeground,
  "--formora-border": theme.colors.border,
  "--formora-input": theme.colors.input,
  "--formora-ring": theme.colors.ring,

  "--formora-heading-font": theme.typography.headingFont,
  "--formora-body-font": theme.typography.bodyFont,

  "--formora-radius-sm": theme.radius.sm,
  "--formora-radius-md": theme.radius.md,
  "--formora-radius-lg": theme.radius.lg,
  "--formora-radius-xl": theme.radius.xl,

  "--formora-shadow-card": theme.shadows.card,
  "--formora-shadow-input": theme.shadows.input,
  "--formora-shadow-button": theme.shadows.button,

  // Connect Formora to the existing shadcn/Tailwind system
  "--background": theme.colors.background,
  "--foreground": theme.colors.foreground,
  "--primary": theme.colors.primary,
  "--primary-foreground": theme.colors.primaryForeground,
  "--secondary": theme.colors.secondary,
  "--secondary-foreground": theme.colors.secondaryForeground,
  "--muted": theme.colors.muted,
  "--muted-foreground": theme.colors.mutedForeground,
  "--border": theme.colors.border,
  "--input": theme.colors.input,
  "--ring": theme.colors.ring,
} as React.CSSProperties;

  return (
    <div
      data-formora-theme={theme.id}
      style={themeStyle}
      className="min-h-screen"
    >
      {children}
    </div>
  );
}