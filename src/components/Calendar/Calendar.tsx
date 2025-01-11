import { FC, useState, useEffect } from "react";

import { DECORATORS } from "@decorators/index";

import PickDateControl from "@components/PickDateControl";

import { getNextMonth, getPreviousMonth } from "@utils/helpers/monthHelpers";
import { buildMonthData } from "@utils/helpers/datesBuilding/buildMonthData";
import {
  isDayFromDifferentMonth,
  isDateHoliday,
  isSameDate,
} from "@utils/helpers/otherFunctions";
import { isWeekendDate } from "@utils/helpers/weekHelpers";

import {
  MONTH_NAMES,
  WEEK_DAYS_FROM_MONDAY,
  WEEK_DAYS_FROM_SUNDAY,
} from "@constants/calendar";
import { MAX_YEAR_VALUE, MIN_YEAR_VALUE } from "@constants/constants";

import {
  StyledCalendarWrapper,
  StyledDatesList,
  StyledWeekDaysList,
  StyledWeekDayItem,
  StyledCalendar,
} from "./Calendar.styled";
import Day from "./Day";
import Controls from "./Controls";
import WeekDay from "./WeekDay";
import ClearButton from "./ClearButton";
import Year from "./Year";
import Month from "./Month";

export interface CalendarProps {
  initialDate?: Date;
  onDateSelect?: (date: Date) => void;
  withClearButton?: boolean;
  holidays?: Holiday[];
  weekStartsFromMonday?: boolean;
  minYear?: Year;
  maxYear?: Year;
  withTodos?: boolean;
}

export const Calendar: FC<CalendarProps> = ({
  initialDate = new Date(),
  onDateSelect,
  withClearButton = false,
  weekStartsFromMonday = true,
  holidays,
  minYear = MIN_YEAR_VALUE,
  maxYear = MAX_YEAR_VALUE,
  withTodos = false,
}) => {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const monthData = buildMonthData(
    currentMonth,
    currentYear,
    weekStartsFromMonday,
  );

  const monthName = MONTH_NAMES[currentMonth];
  const today = new Date();

  const WEEK_DAYS = weekStartsFromMonday
    ? WEEK_DAYS_FROM_MONDAY
    : WEEK_DAYS_FROM_SUNDAY;

  const handleNextMonth = () => {
    const { month: nextMonth, year: nextYear } = getNextMonth(
      currentMonth,
      currentYear,
    );
    setCurrentDate(new Date(nextYear, nextMonth, 1));
  };

  const handlePreviousMonth = () => {
    const { month: prevMonth, year: prevYear } = getPreviousMonth(
      currentMonth,
      currentYear,
    );
    setCurrentDate(new Date(prevYear, prevMonth, 1));
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setCurrentDate(date);

    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  const toggleShowCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleClearDate = () => {
    setSelectedDate(null);
  };

  useEffect(() => {
    setCurrentDate(initialDate);
  }, [initialDate]);

  return (
    <div>
      <PickDateControl
        maxYear={maxYear}
        minYear={minYear}
        selectedDate={selectedDate}
        onClear={handleClearDate}
        onClick={toggleShowCalendar}
        onDateInput={handleDateSelect}
      />
      {showCalendar && (
        <StyledCalendarWrapper>
          <StyledCalendar>
            <Controls onNext={handleNextMonth} onPrev={handlePreviousMonth}>
              <div>
                <Month month={monthName} /> <Year year={currentYear} />
              </div>
            </Controls>
            <StyledWeekDaysList>
              {WEEK_DAYS.map((day) => (
                <StyledWeekDayItem key={day}>
                  <WeekDay weekDay={day} />
                </StyledWeekDayItem>
              ))}
            </StyledWeekDaysList>
            <StyledDatesList>
              {monthData.map((date) => {
                const isWeekend = isWeekendDate(date);
                const isSelected =
                  !!selectedDate && isSameDate(date, selectedDate);
                const isFromDifferentMonth = isDayFromDifferentMonth(
                  date,
                  currentDate,
                );
                const isToday = isSameDate(date, today);
                const isHoliday = holidays && isDateHoliday(date, holidays);

                const DayComponent = withTodos ? DECORATORS.withToDo(Day) : Day;

                return (
                  <li key={date.toJSON()}>
                    <DayComponent
                      date={date}
                      day={date.getDate()}
                      isFromDifferentMonth={isFromDifferentMonth}
                      isHoliday={isHoliday}
                      isSelected={isSelected}
                      isToday={isToday}
                      isWeekend={isWeekend}
                      isWithTodos={withTodos}
                      onClick={() => handleDateSelect(date)}
                    />
                  </li>
                );
              })}
            </StyledDatesList>
          </StyledCalendar>
          {withClearButton && <ClearButton onClick={handleClearDate} />}
        </StyledCalendarWrapper>
      )}
    </div>
  );
};
