import {
  DATE_INDEX_OFFSET,
  SATURDAY_INDEX,
  SUNDAY_INDEX,
} from "@constants/calendar";

export const isSameDate = (firstDate: Date, secondDate: Date): boolean => {
  return (
    firstDate.getDate() === secondDate.getDate() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getFullYear() === secondDate.getFullYear()
  );
};

export const isDayFromDifferentMonth = (
  firstDate: Date,
  secondDate: Date,
): boolean => {
  return firstDate.getMonth() !== secondDate.getMonth();
};

export const isDateHoliday = (date: Date, holidays: Holiday[]): boolean => {
  return holidays.some((holiday) => isSameDate(date, holiday.date));
};

export const isWeekendDate = (date: Date): boolean => {
  return date.getDay() === SUNDAY_INDEX || date.getDay() === SATURDAY_INDEX;
};

export const isDateInRange = (
  dateToCheck: Date,
  startDate: Date,
  endDate: Date,
) => {
  return (
    !isSameDate(dateToCheck, startDate) &&
    !isSameDate(dateToCheck, endDate) &&
    dateToCheck > startDate &&
    dateToCheck < endDate
  );
};

export const formatDate = (date: Date | null): string | null => {
  if (date === null) return null;

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + DATE_INDEX_OFFSET)
    .toString()
    .padStart(2, "0");
  const year = date.getFullYear().toString();

  return `${day}/${month}/${year}`;
};
