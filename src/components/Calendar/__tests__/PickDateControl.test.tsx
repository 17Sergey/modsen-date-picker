import { fireEvent, render, screen } from "@testing-library/react";

import DatePicker from "components/DatePicker";
import DateRangePicker from "components/DateRangePicker";

import { DATA_TEST_ID } from "@constants/constants";

describe("Pick Date Inputs count for DatePicker and DateRangePicker", () => {
  it("should render one PickDateControl in DatePicker", () => {
    render(<DatePicker />);

    const pickDateControl = screen.getAllByTestId(
      DATA_TEST_ID.PICK_DATE_CONTROL,
    );

    expect(pickDateControl.length).not.toBe(0);
    expect(pickDateControl.length).toBe(1);
  });

  it("should render two PickDateControls in DateRangePicker", () => {
    render(<DateRangePicker />);

    const pickDateControl = screen.getAllByTestId(
      DATA_TEST_ID.PICK_DATE_CONTROL,
    );

    expect(pickDateControl.length).not.toBe(0);
    expect(pickDateControl.length).toBe(2);
  });

  it("should call onDateInput with the correct date when valid date is entered", async () => {
    const mockOnDateSelect = jest.fn();
    render(<DatePicker onDateSelect={mockOnDateSelect} />);

    const input = screen.getByPlaceholderText("Choose date");

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.change(input, { target: { value: "16/01/2025" } });

    expect(input).toHaveDisplayValue("16/01/2025");
    expect(mockOnDateSelect).toHaveBeenCalledTimes(1);
  });

  it("should not call onDateInput when invalid date is entered", async () => {
    const mockOnDateSelect = jest.fn();
    render(<DatePicker onDateSelect={mockOnDateSelect} />);

    const input = screen.getByPlaceholderText("Choose date");

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.change(input, { target: { value: "16.01/2025" } });

    expect(input).toHaveDisplayValue("16.01/2025");
    expect(mockOnDateSelect).toHaveBeenCalledTimes(0);
  });
});
