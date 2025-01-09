import { FC } from "react";

interface MonthProps {
  month: MonthWord;
}

export const Month: FC<MonthProps> = ({ month }) => {
  return <span>{month}</span>;
};
