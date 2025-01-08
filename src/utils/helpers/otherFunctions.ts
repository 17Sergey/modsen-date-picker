import { DATE_INDEX_OFFSET } from "@constants/calendar";

export const isSameDate = (firstDate: Date, secondDate: Date): boolean => {
  return (
    firstDate.getDate() === secondDate.getDate() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getFullYear() === secondDate.getFullYear()
  );
};

export const isHoliday = (date: Date, holidays: Holiday[]): boolean => {
  return holidays.some((holiday) => isSameDate(date, holiday.date));
};

export const formatDate = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + DATE_INDEX_OFFSET)
    .toString()
    .padStart(2, "0");
  const year = date.getFullYear().toString();

  return `${day}/${month}/${year}`;
};
