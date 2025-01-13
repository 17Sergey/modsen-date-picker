import {
  isSameDate,
  isDayFromDifferentMonth,
  isDateHoliday,
  isDateInRange,
  formatDate,
} from "../otherFunctions";

describe("isSameDate", () => {
  it("should return true for the same date", () => {
    const date1 = new Date("2025-01-01");
    const date2 = new Date("2025-01-01");
    expect(isSameDate(date1, date2)).toBe(true);
  });

  it("should return false for different dates", () => {
    const date1 = new Date("2025-01-01");
    const date2 = new Date("2025-01-02");
    expect(isSameDate(date1, date2)).toBe(false);
  });

  it("should return false for dates in different months", () => {
    const date1 = new Date("2025-01-31");
    const date2 = new Date("2025-02-01");
    expect(isSameDate(date1, date2)).toBe(false);
  });

  it("should return false for dates in different years", () => {
    const date1 = new Date("2025-01-01");
    const date2 = new Date("2024-01-01");
    expect(isSameDate(date1, date2)).toBe(false);
  });
});

describe("isDayFromDifferentMonth", () => {
  it("should return true for dates from different months", () => {
    const date1 = new Date("2025-01-31");
    const date2 = new Date("2025-02-01");
    expect(isDayFromDifferentMonth(date1, date2)).toBe(true);
  });

  it("should return false for dates from the same month", () => {
    const date1 = new Date("2025-01-01");
    const date2 = new Date("2025-01-31");
    expect(isDayFromDifferentMonth(date1, date2)).toBe(false);
  });
});

describe("isDateHoliday", () => {
  it("should return true if the date is a holiday", () => {
    const date = new Date("2025-01-01");
    const holidays: Holiday[] = [
      { name: "New Year's Day", date: new Date("2025-01-01") },
    ];
    expect(isDateHoliday(date, holidays)).toBe(true);
  });

  it("should return false if the date is not a holiday", () => {
    const date = new Date("2025-01-02");
    const holidays: Holiday[] = [
      { name: "New Year's Day", date: new Date("2025-01-01") },
    ];
    expect(isDateHoliday(date, holidays)).toBe(false);
  });
});

describe("isDateInRange", () => {
  it("should return true if the date is within the range", () => {
    const dateToCheck = new Date("2025-01-15");
    const startDate = new Date("2025-01-01");
    const endDate = new Date("2025-01-31");
    expect(isDateInRange(dateToCheck, startDate, endDate)).toBe(true);
  });

  it("should return false if the date is before the range", () => {
    const dateToCheck = new Date("2025-01-01");
    const startDate = new Date("2025-01-02");
    const endDate = new Date("2025-01-31");
    expect(isDateInRange(dateToCheck, startDate, endDate)).toBe(false);
  });

  it("should return false if the date is after the range", () => {
    const dateToCheck = new Date("2025-02-01");
    const startDate = new Date("2025-01-01");
    const endDate = new Date("2025-01-31");
    expect(isDateInRange(dateToCheck, startDate, endDate)).toBe(false);
  });
});

describe("formatDate", () => {
  it("should return formatted date string", () => {
    const date = new Date("2025-01-01");
    expect(formatDate(date)).toBe("01/01/2025");
  });

  it("should return null for null input", () => {
    expect(formatDate(null)).toBe(null);
  });

  it("should format date correctly for single-digit day and month", () => {
    const date = new Date("2025-02-05");
    expect(formatDate(date)).toBe("05/02/2025");
  });
});
