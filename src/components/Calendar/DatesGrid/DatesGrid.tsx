import { FC } from "react";

import { DECORATORS } from "@decorators/index";

import {
  isDayFromDifferentMonth,
  isDateHoliday,
  isSameDate,
  isDateInRange,
  isWeekendDate,
} from "@utils/helpers/otherFunctions";

import { TODAY } from "@constants/constants";

import Day from "../Day";

import { StyledDatesList } from "./DatesGrid.styled";
import { DatesGridProps } from "./DatesGrid.types";

export const DatesGrid: FC<DatesGridProps> = ({
  monthData,
  selectedDate,
  currentDate,
  startRange,
  endRange,
  holidays,
  withRangePicker,
  withTodos,
  onDayClick,
}) => {
  const handleDayClick = (date: Date) => () => {
    onDayClick(date);
  };

  return (
    <StyledDatesList>
      {monthData.map((date) => {
        const isWeekend = isWeekendDate(date);
        const isSelected =
          !withRangePicker && !!selectedDate && isSameDate(date, selectedDate);
        const isFromDifferentMonth = isDayFromDifferentMonth(date, currentDate);

        const isStartRange = !!startRange && isSameDate(date, startRange);
        const isEndRange = !!endRange && isSameDate(date, endRange);
        const isInRange = Boolean(
          startRange && endRange && isDateInRange(date, startRange, endRange),
        );

        const isToday = isSameDate(date, TODAY);
        const isHoliday = holidays && isDateHoliday(date, holidays);

        const DayComponent = withTodos ? DECORATORS.withToDo(Day) : Day;

        return (
          <li key={date.getTime()}>
            <DayComponent
              date={date}
              day={date.getDate()}
              isEndRange={isEndRange}
              isFromDifferentMonth={isFromDifferentMonth}
              isHoliday={isHoliday}
              isInRange={isInRange}
              isSelected={isSelected}
              isStartRange={isStartRange}
              isToday={isToday}
              isWeekend={isWeekend}
              isWithTodos={withTodos}
              onClick={handleDayClick(date)}
            />
          </li>
        );
      })}
    </StyledDatesList>
  );
};
