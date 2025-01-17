import { FC } from "react";

import { StyledYear } from "./Year.styled";

interface YearProps {
  year: Year;
}

export const Year: FC<YearProps> = ({ year }) => {
  return <StyledYear>{year}</StyledYear>;
};
