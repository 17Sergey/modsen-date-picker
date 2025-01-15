import { ChangeEvent, FC, useState } from "react";

import IconButton from "@components/IconButton";
import Clear from "@components/Icons/Clear";

import { useTodo } from "@decorators/withToDo/TodoProvider";

import { DATA_TEST_ID } from "@constants/constants";

import TodoItem from "./TodoItem";
import {
  StyledButton,
  StyledCloseButton,
  StyledContainer,
  StyledInput,
  StyledList,
  StyledListItem,
  StyledTitle,
} from "./TodoList.styled";

interface TodoListProps {
  onCloseTodos: VoidFunction;
}

export const TodoList: FC<TodoListProps> = ({ onCloseTodos }) => {
  const { todos, addTodo, removeTodo, date } = useTodo();
  const [todoText, setTodoText] = useState<string>("");

  const handleAddTodo = () => {
    if (todoText) {
      addTodo(todoText);
      setTodoText("");
    }
  };

  const handleRemove = (id: number) => () => {
    removeTodo(id);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  return (
    <StyledContainer>
      <StyledTitle data-testid={DATA_TEST_ID.TODO_LIST}>
        Todo List {date}
      </StyledTitle>
      <StyledCloseButton>
        <IconButton
          data-testid={DATA_TEST_ID.CLOSE_TODOLIST}
          onClick={onCloseTodos}
        >
          <Clear />
        </IconButton>
      </StyledCloseButton>
      <StyledInput
        placeholder="Enter todo text"
        type="text"
        value={todoText}
        onChange={handleInputChange}
      />
      <StyledButton onClick={handleAddTodo}>Add Todo</StyledButton>
      <StyledList>
        {todos.map(({ text, id }) => (
          <StyledListItem key={id}>
            <TodoItem text={text} onRemove={handleRemove(id)} />
          </StyledListItem>
        ))}
      </StyledList>
    </StyledContainer>
  );
};
