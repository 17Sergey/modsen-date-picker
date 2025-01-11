import {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  FC,
  useEffect,
} from "react";

import {
  getFromLocalStorage,
  setToLocalStorage,
} from "@utils/helpers/localStorage";

interface Todo {
  id: number;
  text: string;
  date: string;
}

interface TodoContextType {
  todos: Todo[];
  date: string;
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

interface TodoProviderProps extends PropsWithChildren {
  date: string;
}

export const TodoProvider: FC<TodoProviderProps> = ({ children, date }) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    return getFromLocalStorage(date) || [];
  });

  const getNextId = (todos: Todo[]): number => {
    return todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
  };

  const addTodo = (text: string) => {
    const newTodo = { id: getNextId(todos), text, date };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    setToLocalStorage(date, updatedTodos);
  };

  const removeTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    setToLocalStorage(date, updatedTodos);
  };

  useEffect(() => {
    if (todos.length > 0) setToLocalStorage(date, todos);
  }, [todos, date]);

  return (
    <TodoContext.Provider value={{ todos, date, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};
