import { render, screen, fireEvent } from "@testing-library/react";

import ThemeWrapper from "components/ThemeWrapper";
import Calendar from "components/Calendar";

import { openCalendar } from "@utils/testing/openCalendar";

import { DATA_TEST_ID } from "@constants/constants";

describe("Calendar with Todos", () => {
  beforeEach(() => {
    localStorage.clear();

    render(
      <ThemeWrapper>
        <Calendar
          dateSelected={new Date(2025, 0, 16)} // January 16, 2025
          withTodos={true}
        />
      </ThemeWrapper>,
    );
    openCalendar();
  });

  it("should open the todo list when right-clicking on a day", () => {
    const dayElement = screen.getByText(/28/i);
    expect(dayElement).toBeInTheDocument();

    fireEvent.contextMenu(dayElement);

    const todoList = screen.getByTestId(DATA_TEST_ID.TODO_LIST);
    expect(todoList).toBeInTheDocument();
  });

  it("should add a todo and store it in localStorage", () => {
    const dayElement = screen.getByText(/28/i);
    fireEvent.contextMenu(dayElement);

    const todoInput = screen.getByPlaceholderText("Enter todo text");
    fireEvent.change(todoInput, { target: { value: "New Todo" } });

    const addButton = screen.getByText("Add Todo");
    fireEvent.click(addButton);

    expect(screen.getByText("New Todo")).toBeInTheDocument();

    const storedTodos = JSON.parse(localStorage.getItem("28/01/2025") || "[]");
    expect(storedTodos).toHaveLength(1);
    expect(storedTodos[0].text).toBe("New Todo");
  });

  it("should not retain todo when switching to another day", () => {
    const dayElement1 = screen.getByText(/28/i);
    fireEvent.contextMenu(dayElement1);

    const todoInput = screen.getByPlaceholderText("Enter todo text");
    fireEvent.change(todoInput, { target: { value: "Todo for 28" } });

    const addButton = screen.getByText("Add Todo");
    fireEvent.click(addButton);

    expect(screen.getByText("Todo for 28")).toBeInTheDocument();

    const closeButton = screen.getByTestId(DATA_TEST_ID.CLOSE_TODOLIST);
    fireEvent.click(closeButton);

    const dayElement2 = screen.getByText(/29/i);
    fireEvent.contextMenu(dayElement2);

    expect(screen.queryByText("Todo for 28")).not.toBeInTheDocument();

    const storedTodos = JSON.parse(localStorage.getItem("29/01/2025") || "[]");
    expect(storedTodos).toHaveLength(0);
  });
});
