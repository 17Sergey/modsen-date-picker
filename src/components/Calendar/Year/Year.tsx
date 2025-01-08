import { FC } from "react";

interface YearProps {
  year: Year;
}

export const Year: FC<YearProps> = ({ year }) => {
  return <span>{year}</span>;
};
