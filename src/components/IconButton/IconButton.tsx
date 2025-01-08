import { FC, ReactNode } from "react";

interface IconButtonProps {
  onClick: VoidFunction;
  children: ReactNode;
}

export const IconButton: FC<IconButtonProps> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};
