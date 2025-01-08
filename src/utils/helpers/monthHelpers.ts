import {
  DATE_INDEX_OFFSET,
  FLAG_FOR_LAST_DAY,
  MONTHS,
} from "@constants/calendar";

export const isSameMonth = (date: Date, selectedMonth: number) => {
  return date.getMonth() === selectedMonth;
};

const DECEMBER = 11;

export const getPreviousMonth = (month: number, year: number) => {
  if (month === 0) {
    const LAST_YEAR = year - 1;
    return { month: DECEMBER, year: LAST_YEAR };
  } else {
    const LAST_MONTH = month - 1;
    return { month: LAST_MONTH, year };
  }
};

export const getNextMonth = (month: number, year: number) => {
  if (month === DECEMBER) {
    const NEXT_YEAR = year + 1;
    const JANUARY = MONTHS.January;

    return { month: JANUARY, year: NEXT_YEAR };
  } else {
    const NEXT_MONTH = month + 1;

    return { month: NEXT_MONTH, year };
  }
};

export const getDaysInMonth = (year: number, month: number) => {
  const date = new Date(year, month + DATE_INDEX_OFFSET, FLAG_FOR_LAST_DAY);

  return date.getDate();
};

export function getWeekDayOfMonthFirstDay(year: number, month: number) {
  const FIRST_DAY = 1;
  const firstDayOfMonth = new Date(year, month, FIRST_DAY);
  const dayOfWeek = firstDayOfMonth.getDay();

  return dayOfWeek;
}

export const getLastDayOfPreviousMonth = (currentDate: Date) => {
  let year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  let PREV_MONTH = month - 1;

  if (PREV_MONTH === -1) {
    PREV_MONTH = MONTHS.December;
    year--;
  }

  const lastDayOfPreviousMonth = new Date(year, PREV_MONTH, FLAG_FOR_LAST_DAY);

  return lastDayOfPreviousMonth;
};
