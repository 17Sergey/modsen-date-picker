import { FC } from "react";

import { StyledMonth } from "./Month.styled";

interface MonthProps {
  month: MonthWord;
}

export const Month: FC<MonthProps> = ({ month }) => {
  return <StyledMonth>{month}</StyledMonth>;
};
