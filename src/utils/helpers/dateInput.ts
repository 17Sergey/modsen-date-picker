import { DATE_INDEX_OFFSET } from "@constants/calendar";
import {
  INPUT_REGEX,
  MAX_DAY_VALUE,
  MAX_MONTH_VALUE,
  MIN_DAY_VALUE,
  MIN_MONTH_VALUE,
} from "@constants/constants";

export function isValidInput(value: string): boolean {
  return INPUT_REGEX.test(value);
}

export function isValidDate(
  value: string,
  minYear: Year,
  maxYear: Year,
): boolean {
  const [day, month, year] = value.split("/").map(Number);
  return (
    !(day > MAX_DAY_VALUE || day < MIN_DAY_VALUE) &&
    !(month > MAX_MONTH_VALUE || month < MIN_MONTH_VALUE) &&
    !(year > maxYear || year < minYear)
  );
}

export function createDateFromInput(value: string): Date {
  const [day, month, year] = value.split("/").map(Number);

  const date = new Date(year, month - DATE_INDEX_OFFSET, day);
  return date;
}
