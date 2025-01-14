import { FC } from "react";

const withClearButton = (Component: FC<CalendarProps>): FC<CalendarProps> => {
  const Wrappee = (props: CalendarProps) => {
    return <Component {...props} withClearButton={true} />;
  };

  return Wrappee;
};

export default withClearButton;
