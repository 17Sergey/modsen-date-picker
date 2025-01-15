import { render, screen } from "@testing-library/react";

import ThemeWrapper from "@components/ThemeWrapper";

import { openCalendar } from "@utils/testing/openCalendar";

import { DATA_TEST_ID } from "@constants/constants";
import {
  WEEK_DAYS_FROM_MONDAY,
  WEEK_DAYS_FROM_SUNDAY,
} from "@constants/calendar";

import { Calendar } from "../Calendar";

describe("Calendar Component", () => {
  const renderCalendar = (weekStartsFromMonday: boolean) => {
    return render(
      <ThemeWrapper>
        <Calendar weekStartsFromMonday={weekStartsFromMonday} />
      </ThemeWrapper>,
    );
  };

  it("should have week days starting from monday", () => {
    renderCalendar(true);
    openCalendar();

    const weekDaysList = screen.getByTestId(DATA_TEST_ID.WEEK_DAYS);
    const dayItems = weekDaysList.querySelectorAll("li");

    expect(dayItems[0]).toHaveTextContent(WEEK_DAYS_FROM_MONDAY[0]);
    expect(dayItems[1]).toHaveTextContent(WEEK_DAYS_FROM_MONDAY[1]);
    expect(dayItems[2]).toHaveTextContent(WEEK_DAYS_FROM_MONDAY[2]);
    expect(dayItems[3]).toHaveTextContent(WEEK_DAYS_FROM_MONDAY[3]);
    expect(dayItems[4]).toHaveTextContent(WEEK_DAYS_FROM_MONDAY[4]);
    expect(dayItems[5]).toHaveTextContent(WEEK_DAYS_FROM_MONDAY[5]);
    expect(dayItems[6]).toHaveTextContent(WEEK_DAYS_FROM_MONDAY[6]);
  });

  it("should have week days starting from sunday", () => {
    renderCalendar(false);
    openCalendar();

    const weekDaysList = screen.getByTestId(DATA_TEST_ID.WEEK_DAYS);
    const dayItems = weekDaysList.querySelectorAll("li");

    expect(dayItems[0]).toHaveTextContent(WEEK_DAYS_FROM_SUNDAY[0]);
    expect(dayItems[1]).toHaveTextContent(WEEK_DAYS_FROM_SUNDAY[1]);
    expect(dayItems[2]).toHaveTextContent(WEEK_DAYS_FROM_SUNDAY[2]);
    expect(dayItems[3]).toHaveTextContent(WEEK_DAYS_FROM_SUNDAY[3]);
    expect(dayItems[4]).toHaveTextContent(WEEK_DAYS_FROM_SUNDAY[4]);
    expect(dayItems[5]).toHaveTextContent(WEEK_DAYS_FROM_SUNDAY[5]);
    expect(dayItems[6]).toHaveTextContent(WEEK_DAYS_FROM_SUNDAY[6]);
  });
});
