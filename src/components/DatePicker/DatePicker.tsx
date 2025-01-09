import { FC } from "react";

import Calendar from "@components/Calendar";
import ThemeWrapper from "@components/ThemeWrapper";

interface DatePickerProps {}

export const DatePicker: FC<DatePickerProps> = () => {
  return (
    <div>
      <ThemeWrapper>
        <Calendar />
      </ThemeWrapper>
    </div>
  );
};
