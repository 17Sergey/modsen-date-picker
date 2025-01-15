import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import ThemeWrapper from "@components/ThemeWrapper";

import { openCalendar } from "@utils/testing/openCalendar";

import { DATA_TEST_ID } from "@constants/constants";

import { Calendar } from "../Calendar";

describe("Calendar Component Controls", () => {
  beforeEach(() => {
    render(
      <ThemeWrapper>
        <Calendar
          dateSelected={new Date(2025, 0, 15)} // January
          withRangePicker={false}
        />
      </ThemeWrapper>,
    );
    openCalendar();
  });

  it("should change the displayed month when next button is clicked", async () => {
    expect(screen.getByText("January")).toBeInTheDocument();
    expect(screen.queryByText("February")).not.toBeInTheDocument();

    const nextButton = screen.getByTestId(DATA_TEST_ID.NEXT_MONTH);
    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(screen.getByText("February")).toBeInTheDocument();
    });
  });

  it("should change the displayed month when previous button is clicked", async () => {
    expect(screen.getByText("January")).toBeInTheDocument();
    expect(screen.queryByText("December")).not.toBeInTheDocument();

    const prevButton = screen.getByTestId(DATA_TEST_ID.PREV_MONTH);
    fireEvent.click(prevButton);

    await waitFor(() => {
      expect(screen.getByText("December")).toBeInTheDocument();
    });
  });
});
