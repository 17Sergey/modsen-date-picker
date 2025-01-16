import { FC, PropsWithChildren } from "react";

import IconButton from "components/IconButton";
import NextArrow from "components/Icons/NextArrow";
import PrevArrow from "components/Icons/PrevArrow";

import { DATA_TEST_ID } from "@constants/constants";

import { StyledWrapper } from "./Controls.styled";

interface ControlsProps extends PropsWithChildren {
  onNext: VoidFunction;
  onPrev: VoidFunction;
}

export const Controls: FC<ControlsProps> = ({ onNext, onPrev, children }) => (
  <StyledWrapper>
    <IconButton
      aria-label="Previous month"
      data-testid={DATA_TEST_ID.PREV_MONTH}
      onClick={onPrev}
    >
      <PrevArrow alt="Previous month" />
    </IconButton>
    {children}
    <IconButton
      aria-label="Next month"
      data-testid={DATA_TEST_ID.NEXT_MONTH}
      onClick={onNext}
    >
      <NextArrow alt="Next month" />
    </IconButton>
  </StyledWrapper>
);
