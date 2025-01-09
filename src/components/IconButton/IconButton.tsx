import { FC, ReactNode } from "react";

import { StyledButton } from "./IconButton.styled";

interface IconButtonProps {
  onClick: VoidFunction;
  children: ReactNode;
}

export const IconButton: FC<IconButtonProps> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
