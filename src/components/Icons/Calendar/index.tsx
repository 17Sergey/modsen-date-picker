import { ComponentProps, FC } from "react";

import CalendarIcon from "@assets/icons/calendar.svg";

import { StyledIcon } from "./Calendar.styled";

type NextArrowProps = ComponentProps<"img">;

const Calendar: FC<NextArrowProps> = ({ ...props }) => (
  <StyledIcon alt="Calendar" src={CalendarIcon} {...props} />
);

export default Calendar;
