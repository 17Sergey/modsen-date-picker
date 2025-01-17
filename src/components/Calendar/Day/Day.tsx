import { FC, MouseEvent } from "react";

import { StyledDay, StyledTodoMark } from "./Day.styled";
import { DayProps } from "./Day.types";

export const Day: FC<DayProps> = ({
  day,
  isToday = false,
  isWeekend = false,
  isSelected = false,
  isFromDifferentMonth = false,
  isHoliday = false,
  isWithTodos = false,
  hasTodos = false,
  isStartRange = false,
  isEndRange = false,
  isInRange = false,
  onClick,
  onOpenTodos = () => {},
}) => {
  const handleOpenTodos = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onOpenTodos();
  };

  return (
    <StyledDay
      $isEndRange={isEndRange}
      $isFromDifferentMonth={isFromDifferentMonth}
      $isHoliday={isHoliday}
      $isInRange={isInRange}
      $isSelected={isSelected}
      $isStartRange={isStartRange}
      $isToday={isToday}
      $isWeekend={isWeekend}
      onClick={onClick}
      onContextMenu={isWithTodos ? handleOpenTodos : undefined}
    >
      {day}
      {isWithTodos && hasTodos && <StyledTodoMark></StyledTodoMark>}
    </StyledDay>
  );
};
