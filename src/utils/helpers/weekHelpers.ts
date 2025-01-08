import {
  DATE_INDEX_OFFSET,
  DAYS_IN_WEEK,
  SATURDAY_INDEX,
  SUNDAY_INDEX,
} from "@constants/calendar";

export const getFirstDayOfWeek = (selectedDate: Date, isMondayFirst = true) => {
  const firstDay = new Date(selectedDate);

  if (isMondayFirst) {
    const dayOfWeek = firstDay.getDay();
    const daysToMonday =
      dayOfWeek === 0
        ? DAYS_IN_WEEK - DATE_INDEX_OFFSET
        : dayOfWeek - DATE_INDEX_OFFSET;
    firstDay.setDate(firstDay.getDate() - daysToMonday);
  } else {
    firstDay.setDate(firstDay.getDate() - firstDay.getDay());
  }

  return firstDay;
};

export const isWeekendDate = (date: Date): boolean => {
  return date.getDay() === SUNDAY_INDEX || date.getDay() === SATURDAY_INDEX;
};
