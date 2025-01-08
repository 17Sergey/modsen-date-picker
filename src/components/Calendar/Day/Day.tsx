import { FC } from "react";

interface DayProps {
  day: Day;
}

export const Day: FC<DayProps> = ({ day }) => {
  return <span>{day}</span>;
};
