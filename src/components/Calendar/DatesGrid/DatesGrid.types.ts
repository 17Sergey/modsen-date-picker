export interface DatesGridProps {
  monthData: Date[];
  selectedDate: Date | null;
  currentDate: Date;
  startRange: Date | null;
  endRange: Date | null;
  holidays: Holiday[];
  withRangePicker: boolean;
  withTodos: boolean;
  onDayClick: DateCallback;
}
