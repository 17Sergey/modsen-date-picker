import { FC, useState, useEffect } from "react";

import { DECORATORS } from "@decorators/index";

import PickDateControl from "@components/PickDateControl";

import { getNextMonth, getPreviousMonth } from "@utils/helpers/monthHelpers";
import { buildMonthData } from "@utils/helpers/datesBuilding/buildMonthData";
import {
  isDayFromDifferentMonth,
  isDateHoliday,
  isSameDate,
  isDateInRange,
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
  withRangePicker?: boolean;
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
  withRangePicker = false,
}) => {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const [startRange, setStartRange] = useState<Date | null>(null);
  const [endRange, setEndRange] = useState<Date | null>(null);

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
    if (!withRangePicker) {
      setSelectedDate(date);
      setCurrentDate(date);
      return;
    }

    if (!startRange) {
      setStartRange(date);
    }

    if (startRange && !endRange) {
      if (date < startRange) {
        setEndRange(startRange);
        setStartRange(date);
      } else {
        setEndRange(date);
      }
    }

    if (startRange && endRange) {
      setStartRange(date);
      setEndRange(null);
    }

    if (onDateSelect) {
      onDateSelect && onDateSelect(date);
    }
  };

  const toggleShowCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleClearDate = () => {
    setStartRange(null);
    setEndRange(null);
    setSelectedDate(null);
  };

  const pickDateControlProps = {
    minYear,
    maxYear,
    onClear: handleClearDate,
    onClick: toggleShowCalendar,
    onDateInput: handleDateSelect,
  };

  useEffect(() => {
    setCurrentDate(initialDate);
  }, [initialDate]);

  console.log(startRange?.toLocaleString(), endRange?.toLocaleString());

  return (
    <div>
      {withRangePicker ? (
        <>
          <PickDateControl
            {...pickDateControlProps}
            selectedDate={startRange}
          />
          <PickDateControl {...pickDateControlProps} selectedDate={endRange} />
        </>
      ) : (
        <PickDateControl
          {...pickDateControlProps}
          selectedDate={selectedDate}
        />
      )}
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
                  !withRangePicker &&
                  !!selectedDate &&
                  isSameDate(date, selectedDate);
                const isFromDifferentMonth = isDayFromDifferentMonth(
                  date,
                  currentDate,
                );

                const isStartRange =
                  !!startRange && isSameDate(date, startRange);
                const isEndRange = !!endRange && isSameDate(date, endRange);
                const isInRange = Boolean(
                  startRange &&
                    endRange &&
                    isDateInRange(date, startRange, endRange),
                );

                const isToday = isSameDate(date, today);
                const isHoliday = holidays && isDateHoliday(date, holidays);

                const DayComponent = withTodos ? DECORATORS.withToDo(Day) : Day;

                return (
                  <li key={date.toJSON()}>
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
