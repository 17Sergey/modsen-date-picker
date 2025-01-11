import { FC, MouseEvent } from "react";

import { StyledDay, StyledTodoMark } from "./Day.styled";

export interface DayProps {
  day: number;
  date: Date;
  onClick: VoidFunction;
  isToday?: boolean;
  isWeekend?: boolean;
  isSelected?: boolean;
  isFromDifferentMonth?: boolean;
  isHoliday?: boolean;
  isWithTodos?: boolean;
  hasTodos?: boolean;
  onOpenTodos?: VoidFunction;
}

export const Day: FC<DayProps> = ({
  day,
  isToday = false,
  isWeekend = false,
  isSelected = false,
  isFromDifferentMonth = false,
  isHoliday = false,
  isWithTodos = false,
  hasTodos = false,
  onClick,
  onOpenTodos = () => {},
}) => {
  const handleOpen = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onOpenTodos();
  };
  return (
    <StyledDay
      $isFromDifferentMonth={isFromDifferentMonth}
      $isHoliday={isHoliday}
      $isSelected={isSelected}
      $isToday={isToday}
      $isWeekend={isWeekend}
      onClick={onClick}
      onContextMenu={isWithTodos ? handleOpen : undefined}
    >
      {day}
      {isWithTodos && hasTodos && <StyledTodoMark></StyledTodoMark>}
    </StyledDay>
  );
};
