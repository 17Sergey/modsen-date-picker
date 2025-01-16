import { FC } from "react";
import { DefaultTheme } from "styled-components";

import Calendar from "components/Calendar";
import ThemeWrapper from "components/ThemeWrapper";
import ErrorBoundary from "components/ErrorBoundary";
import { CalendarProps } from "components/Calendar/Calendar.types";

interface DatePickerProps extends CalendarProps {
  theme?: DefaultTheme;
}

export const DatePicker: FC<DatePickerProps> = ({ theme, ...props }) => (
  <ErrorBoundary>
    <ThemeWrapper theme={theme}>
      <Calendar {...props} />
    </ThemeWrapper>
  </ErrorBoundary>
);
