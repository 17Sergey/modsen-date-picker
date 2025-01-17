import { ComponentProps, FC } from "react";

import NextArrowIcon from "@assets/icons/next.svg";

import { StyledNextIcon } from "./NextArrow.styled";

type NextArrowProps = ComponentProps<"img">;

const NextArrow: FC<NextArrowProps> = ({ ...props }) => (
  <StyledNextIcon alt="Next month" src={NextArrowIcon} {...props} />
);

export default NextArrow;
