export interface DayProps {
  day: number;
  date: Date;
  onClick: VoidFunction;
  isToday?: boolean;
  isWeekend?: boolean;
  isSelected?: boolean;
  isFromDifferentMonth?: boolean;
  isHoliday?: boolean;
  isWithTodos?: boolean;
  isStartRange?: boolean;
  isEndRange?: boolean;
  isInRange?: boolean;
  hasTodos?: boolean;
  onOpenTodos?: VoidFunction;
}

export interface StyledDayProps {
  $isToday: boolean;
  $isWeekend: boolean;
  $isSelected: boolean;
  $isFromDifferentMonth: boolean;
  $isHoliday: boolean;
  $isStartRange: boolean;
  $isEndRange: boolean;
  $isInRange: boolean;
}
