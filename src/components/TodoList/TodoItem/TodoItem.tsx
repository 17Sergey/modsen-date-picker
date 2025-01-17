import { FC } from "react";

import { StyledRemoveButton } from "./TodoItem.styled";

interface TodoItemProps {
  text: string;
  onRemove: VoidFunction;
}

export const TodoItem: FC<TodoItemProps> = ({ text, onRemove }) => (
  <>
    <span>{text}</span>
    <StyledRemoveButton onClick={onRemove}>Remove</StyledRemoveButton>
  </>
);
