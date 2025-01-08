import { DAYS_IN_WEEK } from "@constants/calendar";

export const buildWeekData = (firstDayOfWeek: Date): Date[] => {
  const startDate = new Date(firstDayOfWeek);
  return Array.from({ length: DAYS_IN_WEEK }, (_, index) => {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + index);
    return currentDate;
  });
};
