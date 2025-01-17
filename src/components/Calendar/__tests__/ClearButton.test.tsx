import { fireEvent, render, screen } from "@testing-library/react";

import ThemeWrapper from "components/ThemeWrapper";

import { openCalendar } from "@utils/testing/openCalendar";

import { DATA_TEST_ID } from "@constants/constants";

import { lightTheme } from "@styles/theme";

import { Calendar } from "../Calendar";

describe("Clear button in Calendar", () => {
  beforeEach(() => {
    render(
      <ThemeWrapper theme={lightTheme}>
        <Calendar
          dateSelected={new Date(2025, 0, 15)} // January
          withClearButton={true}
        />
      </ThemeWrapper>,
    );

    openCalendar();
  });

  it("should clear date when clicks on clear button", () => {
    expect(screen.getByPlaceholderText(/choose/i)).not.toHaveDisplayValue(
      "Choose text",
    );

    const clearButton = screen.getByTestId(DATA_TEST_ID.CLEAR_BUTTON);
    fireEvent.click(clearButton);

    expect(screen.getByPlaceholderText(/choose/i)).toHaveDisplayValue("");
  });
});
