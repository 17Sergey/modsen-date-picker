import { getFirstDayOfWeek, isWeekendDate } from "../weekHelpers";

describe("getFirstDayOfWeek", () => {
  it("should return Monday as the first day of the week (default)", () => {
    const date = new Date("2023-01-03"); // Tuesday
    const result = getFirstDayOfWeek(date);

    expect(result.getDay()).toBe(1); // Monday
    expect(result).toEqual(new Date("2023-01-02"));
  });

  it("should handle weeks that start on January 1st", () => {
    const date = new Date("2023-01-01"); // Sunday
    const result = getFirstDayOfWeek(date);

    expect(result.getDay()).toBe(1); // Monday
    expect(result).toEqual(new Date("2022-12-26"));
  });

  it("should handle leap year", () => {
    const date = new Date("2020-02-29");
    const result = getFirstDayOfWeek(date);

    expect(result.getDay()).toBe(1); // Monday
    expect(result).toEqual(new Date("2020-02-24"));
  });

  it("should return the same day for a Monday when isMondayFirst is true", () => {
    const date = new Date("2023-01-02"); // Monday
    const result = getFirstDayOfWeek(date);
    expect(result).toEqual(date);
  });

  it("should return the same day for a Sunday when isMondayFirst is false", () => {
    const date = new Date("2023-01-01"); // Sunday
    const result = getFirstDayOfWeek(date, false);
    expect(result).toEqual(date);
  });
});

describe("isWeekendDate", () => {
  it("should return true for Saturday", () => {
    const date = new Date("2023-01-07"); // Saturday
    expect(isWeekendDate(date)).toBe(true);
  });

  it("should return true for Sunday", () => {
    const date = new Date("2023-01-08"); // Sunday
    expect(isWeekendDate(date)).toBe(true);
  });

  it("should return false for Monday", () => {
    const date = new Date("2023-01-09"); // Monday
    expect(isWeekendDate(date)).toBe(false);
  });

  it("should return false for Friday", () => {
    const date = new Date("2023-01-06"); // Friday
    expect(isWeekendDate(date)).toBe(false);
  });

  it("should return false for a non-weekend date", () => {
    const date = new Date("2023-01-10"); // Tuesday
    expect(isWeekendDate(date)).toBe(false);
  });
});
