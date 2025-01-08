import { FC } from "react";

import IconButton from "@components/IconButton";
import NextArrow from "@components/Icons/NextArrow";

import Month from "../Month";
import Year from "../Year";

interface ControlsProps {
  month: Month;
  year: Year;
}

export const Controls: FC<ControlsProps> = ({ month, year }) => {
  const handlePrevClick = () => {};
  const handleNextClick = () => {};
  return (
    <div>
      <IconButton onClick={handlePrevClick}>
        <NextArrow alt="Previous month" />
      </IconButton>
      <div>
        <Month month={month} />
        <Year year={year} />
      </div>
      <IconButton onClick={handleNextClick}>
        <NextArrow alt="Next month" />
      </IconButton>
    </div>
  );
};
