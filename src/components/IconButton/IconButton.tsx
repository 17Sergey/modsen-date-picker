import { ComponentProps, FC } from "react";

import { StyledButton } from "./IconButton.styled";

export const IconButton: FC<ComponentProps<"button">> = ({
  onClick,
  children,
  ...props
}) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};
