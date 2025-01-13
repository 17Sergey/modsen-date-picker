import { MAX_WEEKS_DAYS, MONTHS } from "@constants/calendar";

import { buildWeekData } from "../datesBuilding/buildWeekData";
import { buildMonthData } from "../datesBuilding/buildMonthData";
import { isSameDate } from "../otherFunctions";
describe("Calendar Functions", () => {
  describe("buildWeekData", () => {
    it("should return an array of dates for a week starting from the given date", () => {
      const firstDayOfWeek = new Date("2025-01-01");
      const weekData = buildWeekData(firstDayOfWeek);
      expect(weekData).toHaveLength(7);
      expect(weekData[0]).toEqual(new Date("2025-01-01"));
      expect(weekData[6]).toEqual(new Date("2025-01-07"));
    });
  });

  describe("buildMonthData", () => {
    it("should return an array of dates for the month of January 2025", () => {
      const monthData = buildMonthData(MONTHS.January, 2025);
      expect(monthData).toHaveLength(MAX_WEEKS_DAYS);
      expect(
        monthData.filter((date) => isSameDate(date, new Date("2025-01-01")))
          .length,
      ).toEqual(1);

      expect(
        monthData.filter((date) => isSameDate(date, new Date("2025-01-30")))
          .length,
      ).toEqual(1);
    });
  });
});
