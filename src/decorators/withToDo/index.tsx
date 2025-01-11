import { FC, useState } from "react";

import { DayProps } from "@components/Calendar/Day/Day";

import { formatDate } from "@utils/helpers/otherFunctions";

import TodoList from "../../components/TodoList";

import { TodoProvider, useTodo } from "./TodoProvider";

const withToDo = (Component: FC<DayProps>): FC<DayProps> => {
  const Wrappee = (props: DayProps) => {
    const [showTodos, setShowTodos] = useState(false);

    const openTodos = () => setShowTodos(true);
    const closeTodos = () => setShowTodos(false);

    const dateString = formatDate(props.date) as string;

    const DayComponent = (props: DayProps) => {
      const { todos } = useTodo();
      return (
        <Component
          {...props}
          hasTodos={todos.length > 0}
          onOpenTodos={openTodos}
        />
      );
    };

    return (
      <TodoProvider date={dateString}>
        <DayComponent {...props} />
        {showTodos && <TodoList onCloseTodos={closeTodos} />}
      </TodoProvider>
    );
  };

  return Wrappee;
};

export default withToDo;
