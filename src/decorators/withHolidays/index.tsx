import { FC } from "react";

import { CalendarProps } from "@components/Calendar/Calendar";

const holidays: Holiday[] = [
  {
    name: "New Year's Day",
    date: new Date(new Date().getFullYear(), 0, 1),
  },
  {
    name: "Christmas",
    date: new Date(new Date().getFullYear(), 11, 25),
  },
  {
    name: "Independence Day",
    date: new Date(new Date().getFullYear(), 6, 3),
  },
];

const withHolidays = (Component: FC<CalendarProps>): FC<CalendarProps> => {
  const Wrappee = (props: CalendarProps) => {
    return <Component {...props} holidays={holidays} />;
  };

  return Wrappee;
};

export default withHolidays;
