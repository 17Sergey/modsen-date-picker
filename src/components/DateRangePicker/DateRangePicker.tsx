import { FC } from "react";

import Calendar from "@components/Calendar";
import ThemeWrapper from "@components/ThemeWrapper";
import ErrorBoundary from "@components/ErrorBoundary";

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
