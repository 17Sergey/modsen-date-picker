import { MIN_YEAR_VALUE, MAX_YEAR_VALUE } from "@constants/constants";

import { isValidInput, isValidDate, createDateFromInput } from "../dateInput";

describe("Validation Functions", () => {
  describe("isValidInput", () => {
    it("should return true for valid date input format", () => {
      expect(isValidInput("31/12/2025")).toBe(true);
    });

    it("should return false for invalid date input format", () => {
      expect(isValidInput("32/12/2025")).toBe(false);
      expect(isValidInput("31/13/2025")).toBe(false);
      expect(isValidInput("invalid-date")).toBe(false);
    });
  });

  describe("isValidDate", () => {
    it("should return true for a valid date within range", () => {
      expect(isValidDate("31/12/2025", MIN_YEAR_VALUE, MAX_YEAR_VALUE)).toBe(
        true,
      );
    });

    it("should return false for a date with an invalid day", () => {
      expect(isValidDate("32/01/2025", MIN_YEAR_VALUE, MAX_YEAR_VALUE)).toBe(
        false,
      );
    });

    it("should return false for a date with an invalid month", () => {
      expect(isValidDate("31/13/2025", MIN_YEAR_VALUE, MAX_YEAR_VALUE)).toBe(
        false,
      );
    });

    it("should return false for a date outside the year range", () => {
      expect(isValidDate("31/12/2025", 2026, 3000)).toBe(false);
      expect(isValidDate("31/12/2025", 1000, 2024)).toBe(false);
    });
  });

  describe("createDateFromInput", () => {
    it("should create a Date object from a valid date string", () => {
      const date = createDateFromInput("31/12/2025");
      expect(date).toEqual(new Date(2025, 11, 31));
    });
  });
});
