import { THEMES } from "@constants/constants";

export const lightTheme = {
  name: THEMES.LIGHT,
  widths: {
    calendar: "250px",
    icons: {
      xxs: "0.5rem",
      xs: "1rem",
      sm: "1.5rem",
      base: "2rem",
      md: "2.5rem",
      xl: "4rem",
    },
  },
  colors: {
    background: "#FFFFFF",
    textDefault: "#333333",
    textPrimary: "#FFFFFF",

    neutral: "#E1E1E1",
    neutralBg: "#F1F1F1",

    textNeutralTransparent: "#A7B2C3",
    textFooter: "#898989",

    disabled: "#AAAAAA",
    iconNeutral: "#AAAAAA",

    primary: "#2F80ED",
    primaryTransparent60: "#2F80ED99",
    primaryTransparent10: "#2F80ED1A",
  },
  fonts: {
    primary: "Poppins",
    secondary: "Open Sans",
    size: {
      sm: "0.75rem", // 12px
      m: "0.875rem", // 14px
      base: "1rem", // 16px
      md: "1.25rem", // 20px
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  paddings: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    m: "0.75rem", // 12px
    base: "1rem", // 16px
    md: "1.25rem",
    xl: "1.5rem",
    xxl: "2rem",
    lg: "3rem",
    large: "4rem",
  },
  margins: {
    xs: "0.25rem",
    sm: "0.5rem",
    base: "1rem",
    m: "1.5rem",
    md: "2rem",
    xl: "4rem",
    xxl: "6rem",
    lg: "9rem",
  },
};
