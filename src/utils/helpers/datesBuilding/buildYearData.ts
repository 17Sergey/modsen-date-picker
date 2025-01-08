import { MONTH_COUNT } from "@constants/calendar";

import { buildMonthData } from "./buildMonthData";

export const buildYearData = (year: number, isMondayFirst = false) => {
  return Array.from({ length: MONTH_COUNT }, (_, month) =>
    buildMonthData(month, year, isMondayFirst),
  );
};
