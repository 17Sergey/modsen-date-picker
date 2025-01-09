import { FC } from "react";

import IconButton from "@components/IconButton";
import NextArrow from "@components/Icons/NextArrow";

import Month from "../Month";
import Year from "../Year";

interface ControlsProps {
  month: string;
  year: number;
  onNext: VoidFunction;
  onPrev: VoidFunction;
}

export const Controls: FC<ControlsProps> = ({
  month,
  year,
  onNext,
  onPrev,
}) => {
  return (
    <div>
      <IconButton onClick={onPrev}>
        <NextArrow alt="Previous month" />
      </IconButton>
      <div>
        <Month month={month} />
        <Year year={year} />
      </div>
      <IconButton onClick={onNext}>
        <NextArrow alt="Next month" />
      </IconButton>
    </div>
  );
};
