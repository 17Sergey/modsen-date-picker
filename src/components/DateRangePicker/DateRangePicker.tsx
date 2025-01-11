import { FC } from "react";

import Calendar from "@components/Calendar";
import ThemeWrapper from "@components/ThemeWrapper";
import ErrorBoundary from "@components/ErrorBoundary";
import { CalendarProps } from "@components/Calendar/Calendar";

interface DateRangePickerProps extends CalendarProps {}

export const DateRangePicker: FC<DateRangePickerProps> = (props) => {
  return (
    <ErrorBoundary>
      <ThemeWrapper>
        <Calendar {...props} withRangePicker={true} />
      </ThemeWrapper>
    </ErrorBoundary>
  );
};
