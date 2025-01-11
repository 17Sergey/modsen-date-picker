import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "@styles/globalStyles";
import { lightTheme } from "@styles/theme";

const ThemeWrapper: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default ThemeWrapper;