import { useState, useEffect } from "react";

import { getNextMonth, getPreviousMonth } from "@utils/helpers/monthHelpers";

import { TODAY } from "@constants/constants";

export const useDateSelection = (
  dateSelected: Date,
  onDateSelect: DateCallback,
) => {
  const [currentDate, setCurrentDate] = useState(TODAY);
  const [selectedDate, setSelectedDate] = useState<Date | null>(dateSelected);

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

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
    setSelectedDate(date);
    setCurrentDate(date);

    onDateSelect(date);
  };

  const handleDateClear = () => {
    setSelectedDate(null);
  };

  useEffect(() => {
    setCurrentDate(dateSelected);
  }, [dateSelected]);

  return {
    currentDate,
    selectedDate,
    handleNextMonth,
    handlePreviousMonth,
    handleDateSelect,
    handleDateClear,
  };
};
