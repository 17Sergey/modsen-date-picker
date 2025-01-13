export interface CalendarProps {
  dateSelected?: Date;
  rangeStart?: Date;
  rangeEnd?: Date;

  onDateSelect?: DateCallback;
  onRangeStartSelect?: DateCallback;
  onRangeEndSelect?: DateCallback;

  withClearButton?: boolean;
  weekStartsFromMonday?: boolean;
  withTodos?: boolean;
  withRangePicker?: boolean;

  holidays?: Holiday[];
  minYear?: Year;
  maxYear?: Year;
}
