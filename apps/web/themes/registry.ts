import type { ThemeDefinition, ThemeId } from "./types";
import { baseTheme } from "./base/theme";

export const themeRegistry: Record<ThemeId, ThemeDefinition> = {
  base: baseTheme,
};

export function getTheme(themeId: ThemeId): ThemeDefinition {
  return themeRegistry[themeId] ?? baseTheme;
}