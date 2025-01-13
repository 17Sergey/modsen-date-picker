import { buildMonthData } from "@utils/helpers/buildMonthData";

import {
  MONTH_NAMES,
  WEEK_DAYS_FROM_MONDAY,
  WEEK_DAYS_FROM_SUNDAY,
} from "@constants/calendar";

export const useBuildDates = (
  currentDate: Date,
  weekStartsFromMonday: boolean,
) => {
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

  return {
    monthData,
    monthName,
    currentYear,
    WEEK_DAYS,
  };
};
