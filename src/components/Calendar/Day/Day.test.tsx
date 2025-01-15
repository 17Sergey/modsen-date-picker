import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { lightTheme } from "@styles/theme";

import { Day } from "./Day";

describe("Day Component", () => {
  const renderDay = (props: any) => {
    return render(
      <ThemeProvider theme={lightTheme}>
        <Day date={new Date()} day={1} onClick={() => {}} {...props} />
      </ThemeProvider>,
    );
  };

  it("should have the default style when no other props are passed", () => {
    const { container } = renderDay({});
    const dayButton = container.firstChild;

    expect(dayButton).toHaveStyle(`
      color: ${lightTheme.colors.black};
    `);
  });
  it("should have the selected style when isSelected is true", () => {
    const { container } = renderDay({ isSelected: true });
    const dayButton = container.firstChild;

    expect(dayButton).toHaveStyle(`
      background-color: ${lightTheme.colors.primary};
      color: ${lightTheme.colors.textPrimary};
    `);
  });

  it("should have the holiday style when isHoliday is true", () => {
    const { container } = renderDay({ isHoliday: true });
    const dayButton = container.firstChild;

    expect(dayButton).toHaveStyle(`
      color: ${lightTheme.colors.holiday};
    `);
  });

  it("should have the 'from different month style' when isFromDifferentMonth is true", () => {
    const { container } = renderDay({ isFromDifferentMonth: true });
    const dayButton = container.firstChild;

    expect(dayButton).toHaveStyle(`
      color: ${lightTheme.colors.disabled};
    `);
  });

  it("should have the start range style when isStartRange is true", () => {
    const { container } = renderDay({ isStartRange: true });
    const dayButton = container.firstChild;

    expect(dayButton).not.toHaveStyle(`
      background-color: ${lightTheme.colors.background};
    `);
  });

  it("should have the end range style when isEndRange is true", () => {
    const { container } = renderDay({ isEndRange: true });
    const dayButton = container.firstChild;

    expect(dayButton).not.toHaveStyle(`
      background-color: ${lightTheme.colors.background};
    `);
  });

  it("should have the in range style when isInRange is true", () => {
    const { container } = renderDay({ isInRange: true });
    const dayButton = container.firstChild;

    expect(dayButton).toHaveStyle(`
      color: ${lightTheme.colors.primary};
    `);
  });
});
