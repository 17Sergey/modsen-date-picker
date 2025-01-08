import { FC } from "react";

import Day from "../Day";

interface WeekProps {
  days: Day[];
}

export const Week: FC<WeekProps> = ({ days }) => {
  return (
    <div>
      {days.map((day) => (
        <Day day={day} key={day} />
      ))}
    </div>
  );
};
