import {
  isSameMonth,
  getPreviousMonth,
  getNextMonth,
  getDaysInMonth,
  getWeekDayOfMonthFirstDay,
} from "../monthHelpers";

describe("isSameMonth", () => {
  it("should return true for the same month", () => {
    const date = new Date("2025-01-15");
    expect(isSameMonth(date, 0)).toBe(true);
  });

  it("should return false for different month", () => {
    const date = new Date("2025-01-15");
    expect(isSameMonth(date, 1)).toBe(false);
  });
});

describe("getPreviousMonth", () => {
  it("should return December of the previous year for January", () => {
    const result = getPreviousMonth(0, 2025);
    expect(result).toEqual({ month: 11, year: 2024 });
  });

  it("should return the previous month for any other month", () => {
    const result = getPreviousMonth(2, 2025);
    expect(result).toEqual({ month: 1, year: 2025 });
  });
});

describe("getNextMonth", () => {
  it("should return January of the next year for December", () => {
    const result = getNextMonth(11, 2025);
    expect(result).toEqual({ month: 0, year: 2026 });
  });

  it("should return the next month for any other month", () => {
    const result = getNextMonth(1, 2025);
    expect(result).toEqual({ month: 2, year: 2025 });
  });
});

describe("getDaysInMonth", () => {
  it("should return the correct number of days for January", () => {
    expect(getDaysInMonth(2025, 0)).toBe(31);
  });

  it("should return the correct number of days for February in a non-leap year", () => {
    expect(getDaysInMonth(2025, 1)).toBe(28);
  });

  it("should return the correct number of days for April", () => {
    expect(getDaysInMonth(2025, 3)).toBe(30);
  });

  it("should return the correct number of days for February in a leap year", () => {
    expect(getDaysInMonth(2024, 1)).toBe(29);
  });
});

describe("getWeekDayOfMonthFirstDay", () => {
  it("should return the correct weekday for January 1, 2025", () => {
    expect(getWeekDayOfMonthFirstDay(2025, 0)).toBe(3);
  });

  it("should return the correct weekday for February 1, 2025", () => {
    expect(getWeekDayOfMonthFirstDay(2025, 1)).toBe(6);
  });
});
