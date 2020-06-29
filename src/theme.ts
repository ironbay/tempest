const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
}

const colors = {
  transparent: "transparent",
  white: "#ffffff",
  black: "#000000",

  indigo500: "#6983FF",
  indigo400: "#506BEA",
  indigo300: "#415CDC",

  gray500: "#EBEDF4",
  gray400: "#DEE2F0",
  gray300: "#CFD5E8",

  red500: "#E6554C",
  red400: "#D33C32",
  red300: "#C4251B",
}

const colors_semantic = {
  primary: colors.indigo500,
  danger: colors.red500,
  border: "#d7dae8",
}

const shadow = {
  blue: "0 0 0 3px rgba(164, 202, 254, 0.45)",
  red: "0 0 0 3px rgba(248, 180, 180, 0.45)",
}

const fontSize = {
  1: "0.75rem",
  2: "0.875rem",
  3: "1rem",
  4: "1.125rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.875rem",
  8: "2.25rem",
  9: "3rem",
  10: "4rem",
}

const fontWeight = {
  100: 100,
  200: 200,
  300: 300,
  400: 400,
  500: 500,
  600: 600,
  700: 700,
  800: 800,
  900: 900,
}

const fontFamily = {
  sans: "Archivo",
}

const spacing = {
  0: "0",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  32: "8rem",
  40: "10rem",
  48: "12rem",
  56: "14rem",
  64: "16rem",
}

export const Theme = {
  colors: {
    ...colors,
    ...colors_semantic,
  },
  shadow,
  fontFamily,
  fontWeight,
  fontSize,
  spacing,
  breakpoints,
} as const

export type ThemeType = typeof Theme
