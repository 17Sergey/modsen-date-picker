import { FC } from "react";

interface MonthProps {
  month: Month;
}

export const Month: FC<MonthProps> = ({ month }) => {
  return <span>{month}</span>;
};
