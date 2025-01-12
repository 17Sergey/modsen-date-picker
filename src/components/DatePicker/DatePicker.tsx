import { FC } from "react";

import Calendar from "@components/Calendar";
import ThemeWrapper from "@components/ThemeWrapper";
import ErrorBoundary from "@components/ErrorBoundary";
import { CalendarProps } from "@components/Calendar/Calendar";

interface DatePickerProps extends CalendarProps {}

export const DatePicker: FC<DatePickerProps> = (props) => (
  <ErrorBoundary>
    <ThemeWrapper>
      <Calendar {...props} />
    </ThemeWrapper>
  </ErrorBoundary>
);
