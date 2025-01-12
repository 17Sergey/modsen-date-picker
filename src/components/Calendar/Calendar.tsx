import { FC, useState, useEffect } from "react";

import PickDateControl from "@components/PickDateControl";

import { DECORATORS } from "@decorators/index";

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
  dateSelected?: Date;
  rangeStart?: Date;
  rangeEnd?: Date;

  onDateSelect?: DateCallback;
  onRangeStartSelect?: DateCallback;
  onRangeEndSelect?: DateCallback;

  withClearButton?: boolean;
  weekStartsFromMonday?: boolean;
  withTodos?: boolean;
  withRangePicker?: boolean;

  holidays?: Holiday[];
  minYear?: Year;
  maxYear?: Year;
}

const today = new Date();
const defaultCallback = () => {};

export const Calendar: FC<CalendarProps> = ({
  dateSelected = today,
  rangeStart = null,
  rangeEnd = null,

  onDateSelect = defaultCallback,
  onRangeStartSelect = defaultCallback,
  onRangeEndSelect = defaultCallback,

  weekStartsFromMonday = true,
  withClearButton = false,
  withTodos = false,
  withRangePicker = false,

  holidays = [],
  minYear = MIN_YEAR_VALUE,
  maxYear = MAX_YEAR_VALUE,
}) => {
  const [currentDate, setCurrentDate] = useState(today);
  const [selectedDate, setSelectedDate] = useState<Date | null>(dateSelected);
  const [showCalendar, setShowCalendar] = useState(false);

  const [startRange, setStartRange] = useState<Date | null>(rangeStart);
  const [endRange, setEndRange] = useState<Date | null>(rangeEnd);

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const monthData = buildMonthData(
    currentMonth,
    currentYear,
    weekStartsFromMonday,
  );

  const monthName = MONTH_NAMES[currentMonth];

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
      onDateSelect(date);
      return;
    }

    if (!startRange) {
      setStartRange(date);
      onRangeStartSelect(date);
    }

    if (startRange && !endRange) {
      if (date < startRange) {
        setEndRange(startRange);
        setStartRange(date);

        onRangeStartSelect(date);
        onRangeEndSelect(startRange);
      } else {
        setEndRange(date);

        onRangeEndSelect(date);
      }
    }

    if (startRange && endRange) {
      setStartRange(date);
      setEndRange(null);

      onRangeStartSelect(date);
    }

    onDateSelect(date);
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
    setCurrentDate(dateSelected);
  }, [dateSelected]);

  useEffect(() => {
    setStartRange(rangeStart);
  }, [rangeStart]);

  useEffect(() => {
    setEndRange(rangeEnd);
  }, [rangeEnd]);

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
