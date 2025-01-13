import { FC } from "react";
import { DefaultTheme } from "styled-components/dist/types";

import Calendar from "@components/Calendar";
import ThemeWrapper from "@components/ThemeWrapper";
import ErrorBoundary from "@components/ErrorBoundary";
import { CalendarProps } from "@components/Calendar/Calendar.types";

interface DateRangePickerProps extends CalendarProps {
  theme?: DefaultTheme;
}

export const DateRangePicker: FC<DateRangePickerProps> = ({
  theme,
  ...props
}) => (
  <ErrorBoundary>
    <ThemeWrapper theme={theme}>
      <Calendar {...props} withRangePicker={true} />
    </ThemeWrapper>
  </ErrorBoundary>
);
