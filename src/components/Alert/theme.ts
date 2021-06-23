import { darkColors, lightColors } from "../../theme/colors";
import { AlertTheme } from "./types";

export const light: AlertTheme = {
  background: lightColors.card,
  icon: lightColors.icon,
};

export const dark: AlertTheme = {
  background: darkColors.card,
  icon: darkColors.icon,
};
