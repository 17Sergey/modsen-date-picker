import { FC, PropsWithChildren } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

import { GlobalStyles } from "@styles/globalStyles";
import { lightTheme } from "@styles/theme";

import "@styles/Font.css";

interface ThemeWrapperProps extends PropsWithChildren {
  theme?: DefaultTheme;
}

const ThemeWrapper: FC<ThemeWrapperProps> = ({
  children,
  theme = lightTheme,
}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default ThemeWrapper;
