import { FC } from "react";

import { StyledWeekDayItem, StyledWeekDaysList } from "./WeekDays.styled";
import { WeekDay } from "./WeekDay/WeekDay";

interface WeekDaysProps {
  weekDays: WeekDay[];
}

export const WeekDays: FC<WeekDaysProps> = ({ weekDays }) => {
  return (
    <StyledWeekDaysList>
      {weekDays.map((day) => (
        <StyledWeekDayItem key={day}>
          <WeekDay weekDay={day} />
        </StyledWeekDayItem>
      ))}
    </StyledWeekDaysList>
  );
};
