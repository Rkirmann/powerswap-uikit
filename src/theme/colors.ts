import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#2271E4",
  primaryBright: "#6ba0ed",
  primaryDark: "#15478f",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
  harmony: "#00aee9",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#6ba0ed",
  tertiary: "#FAFCFF",
  text: "rgba(0,0,0)",
  textDisabled: "#BDC2C4",
  textSubtle: "#175abc",
  borderColor: "#E9EAEB",
  card: "rgba(255,255,255,0.8)",
  icon: "#fff",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    lootswap: "linear-gradient(139.73deg, #b5cff6 0%, #b9ebef 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#175abc",
  background: "rgba(0, 0, 0, 0.9)",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#2271E4",
  inputSecondary: "#FAFCFF",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#FAFCFF",
  textDisabled: "#F8F0E5",
  textSubtle: "#FFF",
  borderColor: "#524B63",
  card: "rgba(0, 0, 0, 0.5)",
  icon: "#FFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    lootswap: "linear-gradient(139.73deg, #164b98 0%, #b9ebef 100%)",
  },
};
