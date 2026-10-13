import type { ThemeDefinition, ThemeId } from "./types";
import { baseTheme } from "./base/theme";
import { catTheme } from "./cat/theme";

export const themeRegistry: Record<ThemeId, ThemeDefinition> = {
  base: baseTheme,
  cat: catTheme,
};

export function getTheme(themeId: ThemeId): ThemeDefinition {
  return themeRegistry[themeId] ?? baseTheme;
}