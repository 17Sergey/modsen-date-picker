export const DAYS_IN_WEEK = 7;
export const MONTH_COUNT = 12;
export const DATE_INDEX_OFFSET = 1;

export const SUNDAY_INDEX = 0;
export const SATURDAY_INDEX = 6;

export const FLAG_FOR_LAST_DAY = 0;

export enum MONTHS {
  January = 0,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

export const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export const WEEK_DAYS_FROM_SUNDAY = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
export const WEEK_DAYS_FROM_MONDAY = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

export type MonthName = (typeof MONTH_NAMES)[number];

export const MIN_WEEKS_DAYS = 35;
export const MAX_WEEKS_DAYS = 42;
