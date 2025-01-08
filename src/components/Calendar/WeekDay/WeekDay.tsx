import { FC } from "react";

interface WeekDayProps {
  weekDay: WeekDay;
}

export const WeekDay: FC<WeekDayProps> = ({ weekDay }) => {
  return <span>{weekDay}</span>;
};
