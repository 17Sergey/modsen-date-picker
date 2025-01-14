import { FC } from "react";

import Calendar from "@components/Calendar";
import ThemeWrapper from "@components/ThemeWrapper";
import ErrorBoundary from "@components/ErrorBoundary";

export const DatePicker: FC<DatePickerProps> = ({ theme, ...props }) => (
  <ErrorBoundary>
    <ThemeWrapper theme={theme}>
      <Calendar {...props} />
    </ThemeWrapper>
  </ErrorBoundary>
);
