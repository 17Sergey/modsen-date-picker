import "styled-components";

import { lightTheme } from "./theme.ts";

type ThemeInterface = typeof lightTheme;

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}
