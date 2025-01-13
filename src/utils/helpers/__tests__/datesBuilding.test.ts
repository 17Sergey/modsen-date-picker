import { MAX_WEEKS_DAYS, MONTHS } from "@constants/calendar";

import { buildMonthData } from "../buildMonthData";
import { isSameDate } from "../otherFunctions";

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
