import { FC, PropsWithChildren } from "react";

import IconButton from "@components/IconButton";
import NextArrow from "@components/Icons/NextArrow";
import PrevArrow from "@components/Icons/PrevArrow";

import { StyledWrapper } from "./Controls.styled";

interface ControlsProps extends PropsWithChildren {
  onNext: VoidFunction;
  onPrev: VoidFunction;
}

export const Controls: FC<ControlsProps> = ({ onNext, onPrev, children }) => {
  return (
    <StyledWrapper>
      <IconButton aria-label="Previous month" onClick={onPrev}>
        <PrevArrow alt="Previous month" />
      </IconButton>
      {children}
      <IconButton aria-label="Next month" onClick={onNext}>
        <NextArrow alt="Next month" />
      </IconButton>
    </StyledWrapper>
  );
};
