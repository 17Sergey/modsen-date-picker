import { render, screen } from "@testing-library/react";

import ThemeWrapper from "components/ThemeWrapper";

import { openCalendar } from "@utils/testing/openCalendar";

import { lightTheme } from "@styles/theme";

import { Calendar } from "../Calendar";

describe("With Holidays Calendar", () => {
  const holidays: Holiday[] = [
    {
      name: "New Year's Day",
      date: new Date(2025, 0, 1),
    },
  ];

  beforeEach(() => {
    render(
      <ThemeWrapper theme={lightTheme}>
        <Calendar
          dateSelected={new Date(2025, 0, 15)} // January
          holidays={holidays}
        />
      </ThemeWrapper>,
    );

    openCalendar();
  });

  it("should display holidays with correct styles", () => {
    const firstDays = screen.getAllByText(/^1$/i);
    const januaryFirst = firstDays[0];

    expect(firstDays.length).toBeGreaterThan(1);

    expect(januaryFirst).toBeInTheDocument();
    expect(januaryFirst).toHaveStyle(`color: ${lightTheme.colors.holiday}`);
  });
});
