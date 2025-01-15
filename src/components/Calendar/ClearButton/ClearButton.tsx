import { FC } from "react";

import { DATA_TEST_ID } from "@constants/constants";

import { StyledClearButton } from "./ClearButton.styled";

interface ClearButtonProps {
  onClick: VoidFunction;
  caption?: string;
}

export const ClearButton: FC<ClearButtonProps> = ({
  onClick,
  caption = "Clear",
}) => (
  <StyledClearButton data-testid={DATA_TEST_ID.CLEAR_BUTTON} onClick={onClick}>
    {caption}
  </StyledClearButton>
);
