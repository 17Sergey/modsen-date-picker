import { FC } from "react";

import { DATA_TEST_ID } from "@constants/constants";

import { StyledWeekDayItem, StyledWeekDaysList } from "./WeekDays.styled";
import { WeekDay } from "./WeekDay/WeekDay";

interface WeekDaysProps {
  weekDays: WeekDay[];
}

export const WeekDays: FC<WeekDaysProps> = ({ weekDays }) => {
  return (
    <StyledWeekDaysList data-testid={DATA_TEST_ID.WEEK_DAYS}>
      {weekDays.map((day) => (
        <StyledWeekDayItem key={day}>
          <WeekDay weekDay={day} />
        </StyledWeekDayItem>
      ))}
    </StyledWeekDaysList>
  );
};
