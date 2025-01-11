import { FC } from "react";

import { StyledClearButton } from "./ClearButton.styled";

interface ClearButtonProps {
  onClick: VoidFunction;
  caption?: string;
}

export const ClearButton: FC<ClearButtonProps> = ({
  onClick,
  caption = "Clear",
}) => {
  return <StyledClearButton onClick={onClick}>{caption}</StyledClearButton>;
};
