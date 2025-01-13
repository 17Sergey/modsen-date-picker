import { ComponentProps, FC } from "react";

import { StyledButton } from "./IconButton.styled";

export interface IconButtonProps extends ComponentProps<"button"> {}

export const IconButton: FC<IconButtonProps> = ({
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
