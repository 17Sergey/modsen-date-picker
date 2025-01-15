import { screen, fireEvent } from "@testing-library/react";

import { DATA_TEST_ID } from "@constants/constants";

export const openCalendar = () => {
  const toggleCalendarButton = screen.getByTestId(DATA_TEST_ID.TOGGLE_CALENDAR);
  fireEvent.click(toggleCalendarButton);
};
