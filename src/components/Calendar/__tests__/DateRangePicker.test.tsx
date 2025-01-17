import { fireEvent, render, screen } from "@testing-library/react";

import DateRangePicker from "components/DateRangePicker";

describe("Date Picker pick date", () => {
  const mockOnRangeStartSelect = jest.fn();
  const mockOnRangeEndSelect = jest.fn();

  beforeEach(() => {
    render(
      <DateRangePicker
        rangeEnd={new Date(2025, 0, 16)}
        rangeStart={new Date(2025, 0, 16)}
        onRangeEndSelect={mockOnRangeEndSelect}
        onRangeStartSelect={mockOnRangeStartSelect}
      />,
    );

    const toggleCalendarButton =
      screen.getAllByLabelText(/toggle calendar/i)[0];
    fireEvent.click(toggleCalendarButton);
  });

  it("should pick range when clicks on days", () => {
    const firstDay = screen.getByText(/^15$/);
    const secondDay = screen.getByText(/^17$/);

    fireEvent.click(firstDay);
    fireEvent.click(secondDay);

    expect(mockOnRangeStartSelect).toHaveBeenCalledWith(new Date(2025, 0, 15));
    expect(mockOnRangeEndSelect).toHaveBeenCalledWith(new Date(2025, 0, 17));
  });

  it("should pick correct range when end date is less that start date", () => {
    const firstDay = screen.getByText(/^17$/);
    const secondDay = screen.getByText(/^15$/);

    fireEvent.click(firstDay);
    fireEvent.click(secondDay);

    expect(mockOnRangeStartSelect).toHaveBeenCalledWith(new Date(2025, 0, 15));
    expect(mockOnRangeEndSelect).toHaveBeenCalledWith(new Date(2025, 0, 17));
  });
});
