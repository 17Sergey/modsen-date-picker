import { useState } from "react";

export const useCalendarVisibility = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleShowCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return {
    showCalendar,
    toggleShowCalendar,
  };
};
