import { FC } from "react";

import {
  EMPTY_CALLBACK,
  MAX_YEAR_VALUE,
  MIN_YEAR_VALUE,
  TODAY,
} from "@constants/constants";

import { StyledCalendarWrapper, StyledCalendar } from "./Calendar.styled";
import Controls from "./Controls";
import ClearButton from "./ClearButton";
import Year from "./Year";
import Month from "./Month";
import WeekDays from "./WeekDays";
import DatesGrid from "./DatesGrid";
import PickDateControl from "./PickDateControl";
import { useRangeSelection } from "./_hooks/useRangeSelection";
import { useDateSelection } from "./_hooks/useDateSelection";
import { useCalendarVisibility } from "./_hooks/useCalendarVisibility";
import { useBuildDates } from "./_hooks/useBuildDates";

export const Calendar: FC<CalendarProps> = ({
  dateSelected = TODAY,
  rangeStart = null,
  rangeEnd = null,

  onDateSelect = EMPTY_CALLBACK,
  onRangeStartSelect = EMPTY_CALLBACK,
  onRangeEndSelect = EMPTY_CALLBACK,

  weekStartsFromMonday = true,
  withClearButton = false,
  withTodos = false,
  withRangePicker = false,

  holidays = [],
  minYear = MIN_YEAR_VALUE,
  maxYear = MAX_YEAR_VALUE,
}) => {
  const { showCalendar, toggleShowCalendar } = useCalendarVisibility();

  const {
    currentDate,
    selectedDate,
    handleNextMonth,
    handlePreviousMonth,
    handleDateSelect,
    handleDateClear,
  } = useDateSelection(dateSelected, onDateSelect);

  const {
    startRange,
    endRange,
    handleRangeSelect,
    handleStartRangeSelect,
    handleEndRangeSelect,
    handleStartRangeClear,
    handleEndRangeClear,
    handleRangesClear,
  } = useRangeSelection(
    rangeStart,
    rangeEnd,
    onRangeStartSelect,
    onRangeEndSelect,
  );

  const { monthData, monthName, currentYear, WEEK_DAYS } = useBuildDates(
    currentDate,
    weekStartsFromMonday,
  );

  const handleClear = () => {
    if (withRangePicker) {
      handleRangesClear();
    } else {
      handleDateClear();
    }
  };

  const handleDayClick = (date: Date) => {
    if (withRangePicker) {
      handleRangeSelect(date);
    } else {
      handleDateSelect(date);
    }
  };

  const pickDateControlProps = {
    minYear,
    maxYear,
    onClick: toggleShowCalendar,
  };

  return (
    <div>
      {withRangePicker ? (
        <>
          <PickDateControl
            {...pickDateControlProps}
            selectedDate={startRange}
            onClear={handleStartRangeClear}
            onDateInput={handleStartRangeSelect}
          />
          <PickDateControl
            {...pickDateControlProps}
            selectedDate={endRange}
            onClear={handleEndRangeClear}
            onDateInput={handleEndRangeSelect}
          />
        </>
      ) : (
        <PickDateControl
          {...pickDateControlProps}
          selectedDate={selectedDate}
          onClear={handleClear}
          onDateInput={handleDateSelect}
        />
      )}
      {showCalendar && (
        <StyledCalendarWrapper>
          <StyledCalendar>
            <Controls onNext={handleNextMonth} onPrev={handlePreviousMonth}>
              <div>
                <Month month={monthName} /> <Year year={currentYear} />
              </div>
            </Controls>
            <WeekDays weekDays={WEEK_DAYS} />
            <DatesGrid
              currentDate={currentDate}
              endRange={endRange}
              holidays={holidays}
              monthData={monthData}
              selectedDate={selectedDate}
              startRange={startRange}
              withRangePicker={withRangePicker}
              withTodos={withTodos}
              onDayClick={handleDayClick}
            />
          </StyledCalendar>
          {withClearButton && <ClearButton onClick={handleClear} />}
        </StyledCalendarWrapper>
      )}
    </div>
  );
};
