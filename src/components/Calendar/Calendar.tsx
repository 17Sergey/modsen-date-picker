import { FC, useState } from "react";

import PickDateControl from "@components/PickDateControl";

import { getNextMonth, getPreviousMonth } from "@utils/helpers/monthHelpers";
import { buildMonthData } from "@utils/helpers/datesBuilding/buildMonthData";
import { formatDate, isSameDate } from "@utils/helpers/otherFunctions";

import { MONTH_NAMES, WEEK_DAYS } from "@constants/calendar";

import {
  StyledCalendarWrapper,
  StyledDaysOfWeek,
  StyledDatesContainer,
  StyledRelativeWrapper,
} from "./Calendar.styled";
import Day from "./Day";
import Controls from "./Controls";

interface CalendarProps {}

export const Calendar: FC<CalendarProps> = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [showCalendar, setShowCalendar] = useState(false);

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const monthData = buildMonthData(currentMonth, currentYear, true);

  const handleNextMonth = () => {
    const { month: nextMonth, year: nextYear } = getNextMonth(
      currentMonth,
      currentYear,
    );
    setCurrentDate(new Date(nextYear, nextMonth, 1));
  };

  const handlePreviousMonth = () => {
    const { month: prevMonth, year: prevYear } = getPreviousMonth(
      currentMonth,
      currentYear,
    );
    setCurrentDate(new Date(prevYear, prevMonth, 1));
  };

  const handleDateSelect = (date: Date) => {
    const formattedDate = formatDate(date);
    setSelectedDate(formattedDate);
  };

  const handleShowCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleClearDate = () => {
    setSelectedDate("");
  };

  const monthName = MONTH_NAMES[currentMonth];
  const today = new Date();

  return (
    <StyledRelativeWrapper>
      <PickDateControl
        selectedDate={selectedDate}
        onClear={handleClearDate}
        onClick={handleShowCalendar}
      />
      {showCalendar && (
        <StyledCalendarWrapper>
          <Controls
            month={monthName}
            year={currentYear}
            onNext={handleNextMonth}
            onPrev={handlePreviousMonth}
          />
          <StyledDaysOfWeek>
            {WEEK_DAYS.map((day) => (
              <div key={day} style={{ textAlign: "center" }}>
                {day}
              </div>
            ))}
          </StyledDaysOfWeek>
          <StyledDatesContainer>
            {monthData.map((date, index) => {
              const isToday = isSameDate(date, today);
              return (
                <Day
                  day={date.getDate()}
                  isToday={isToday}
                  key={index}
                  onClick={() => handleDateSelect(date)}
                />
              );
            })}
          </StyledDatesContainer>
        </StyledCalendarWrapper>
      )}
    </StyledRelativeWrapper>
  );
};
