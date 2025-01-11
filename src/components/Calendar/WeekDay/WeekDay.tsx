import { FC } from "react";

import { StyledWeekDay } from "./WeekDay.styled";

interface WeekDayProps {
  weekDay: WeekDay;
}

export const WeekDay: FC<WeekDayProps> = ({ weekDay }) => {
  return <StyledWeekDay>{weekDay}</StyledWeekDay>;
};
