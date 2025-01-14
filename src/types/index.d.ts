declare module "*.svg" {
  const content: string;
  export const ReactComponent;
  export default content;
}

type Day = number;
type WeekDay = string;
type MonthWord = string;
type Year = number;

interface Holiday {
  name: string;
  description?: string;
  date: Date;
}

interface Todo {
  id: number;
  text: string;
  date: string;
}

type DateCallback = (date: Date) => void;

interface CalendarProps {
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

interface DatePickerProps extends CalendarProps {
  theme?: DefaultTheme;
}

interface DateRangePickerProps extends CalendarProps {
  theme?: DefaultTheme;
}
