import { fireEvent, render, screen } from "@testing-library/react";

import DatePicker from "@components/DatePicker";

import { openCalendar } from "@utils/testing/openCalendar";

describe("Date Picker pick date", () => {
  const mockOnDateSelect = jest.fn();

  beforeEach(() => {
    render(
      <DatePicker
        dateSelected={new Date(2025, 0, 16)} // January 16, 2025
        onDateSelect={mockOnDateSelect}
      />,
    );

    openCalendar();
  });

  it("should pick date when clicks on day", () => {
    const dayElement = screen.getByText(/^17$/);
    fireEvent.click(dayElement);

    expect(mockOnDateSelect).toHaveBeenCalledWith(new Date(2025, 0, 17));
  });
});
