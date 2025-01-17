import { render, screen, fireEvent } from "@testing-library/react";

import ThemeWrapper from "components/ThemeWrapper";

import { DATA_TEST_ID } from "@constants/constants";

import { Controls } from "./Controls";

describe("Controls Component", () => {
  const onNextMock = jest.fn();
  const onPrevMock = jest.fn();

  expect(1).toBe(1);

  beforeEach(() => {
    render(
      <ThemeWrapper>
        <Controls onNext={onNextMock} onPrev={onPrevMock}>
          <span>Child Component</span>
        </Controls>
      </ThemeWrapper>,
    );
  });

  it("should render children correctly", () => {
    expect(screen.getByText("Child Component")).toBeInTheDocument();
  });

  it("should call onPrev when previous button is clicked", () => {
    const prevButton = screen.getByTestId(DATA_TEST_ID.PREV_MONTH);
    fireEvent.click(prevButton);
    expect(onPrevMock).toHaveBeenCalledTimes(1);
  });

  it("should call onNext when next button is clicked", () => {
    const nextButton = screen.getByTestId(DATA_TEST_ID.NEXT_MONTH);
    fireEvent.click(nextButton);
    expect(onNextMock).toHaveBeenCalledTimes(1);
  });
});
