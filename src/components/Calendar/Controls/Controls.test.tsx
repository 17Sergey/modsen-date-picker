import { render, screen, fireEvent } from "@testing-library/react";

import ThemeWrapper from "@components/ThemeWrapper";

import { Controls } from "./Controls";

jest.mock("@components/Icons/NextArrow", () => () => <svg>Next</svg>);
jest.mock("@components/Icons/PrevArrow", () => () => <svg>Prev</svg>);

describe("Controls Component", () => {
  const onNextMock = jest.fn();
  const onPrevMock = jest.fn();

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
    const prevButton = screen.getByLabelText("Previous month");
    fireEvent.click(prevButton);
    expect(onPrevMock).toHaveBeenCalledTimes(1);
  });

  it("should call onNext when next button is clicked", () => {
    const nextButton = screen.getByLabelText("Next month");
    fireEvent.click(nextButton);
    expect(onNextMock).toHaveBeenCalledTimes(1);
  });
});
