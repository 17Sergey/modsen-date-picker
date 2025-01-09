import { FC } from "react";

import { StyledDay } from "../Calendar.styled";

interface DayProps {
  day: number;
  onClick: VoidFunction;
  isToday?: boolean;
}

export const Day: FC<DayProps> = ({ day, isToday = false, onClick }) => {
  return (
    <StyledDay $isToday={isToday} onClick={onClick}>
      {day}
    </StyledDay>
  );
};
