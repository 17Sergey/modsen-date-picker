import {
  DATE_INDEX_OFFSET,
  DAYS_IN_WEEK,
  MAX_WEEKS_DAYS,
} from "@constants/calendar";

import {
  getDaysInMonth,
  getNextMonth,
  getPreviousMonth,
  getWeekDayOfMonthFirstDay,
} from "../monthHelpers";

export const buildMonthData = (
  monthNumber: number,
  year: number,
  isMondayFirst?: boolean,
) => {
  const totalDaysInMonth = getDaysInMonth(year, monthNumber);
  const monthFirstDayWeekDay = getWeekDayOfMonthFirstDay(year, monthNumber);

  const daysFromPrevMonth =
    (DAYS_IN_WEEK +
      monthFirstDayWeekDay -
      (isMondayFirst ? DATE_INDEX_OFFSET : 0)) %
    DAYS_IN_WEEK;

  const { month: prevMonth, year: prevMonthYear } = getPreviousMonth(
    monthNumber,
    year,
  );
  const { month: nextMonth, year: nextMonthYear } = getNextMonth(
    monthNumber,
    year,
  );

  const prevMonthDays = getDaysInMonth(prevMonthYear, prevMonth);

  const prevMonthDates = Array.from({ length: daysFromPrevMonth }, (_, i) => {
    const day = prevMonthDays - daysFromPrevMonth + DATE_INDEX_OFFSET + i;
    return new Date(prevMonthYear, prevMonth, day);
  });

  const currentMonthDates = Array.from({ length: totalDaysInMonth }, (_, i) => {
    const day = i + DATE_INDEX_OFFSET;
    return new Date(year, monthNumber, day);
  });

  const remainingDays = totalDaysInMonth + daysFromPrevMonth;
  const weeksToAdd = Math.ceil(MAX_WEEKS_DAYS / DAYS_IN_WEEK);
  const daysToAdd = weeksToAdd * DAYS_IN_WEEK - remainingDays;

  const nextMonthDates = Array.from({ length: daysToAdd }, (_, i) => {
    const day = i + DATE_INDEX_OFFSET;
    const newDate = new Date(nextMonthYear, nextMonth, day);

    return newDate.getMonth() === nextMonth ? newDate : null;
  }).filter((date) => date !== null) as Date[];

  return [...prevMonthDates, ...currentMonthDates, ...nextMonthDates];
};
