import { FC } from "react";

import { CalendarProps } from "@components/Calendar/Calendar";

const withClearButton = (Component: FC<CalendarProps>): FC<CalendarProps> => {
  const Wrappee = (props: CalendarProps) => {
    return <Component {...props} withClearButton={true} />;
  };

  return Wrappee;
};

export default withClearButton;
