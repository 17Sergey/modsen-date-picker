export interface CalendarProps {
  dateSelected?: Date;
  rangeStart?: Date;
  rangeEnd?: Date;

  onDateSelect?: (date: Date) => void;
  onRangeStartSelect?: (date: Date) => void;
  onRangeEndSelect?: (date: Date) => void;

  withClearButton?: boolean;
  weekStartsFromMonday?: boolean;
  withTodos?: boolean;
  withRangePicker?: boolean;

  holidays?: Holiday[];
  minYear?: number;
  maxYear?: number;
}
