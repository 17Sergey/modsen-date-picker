import { ComponentProps, FC } from "react";

import NextArrowIcon from "@assets/icons/next.svg";

type NextArrowProps = ComponentProps<"img">;

const NextArrow: FC<NextArrowProps> = ({ ...props }) => (
  <img alt="Next month" src={NextArrowIcon} {...props} />
);

export default NextArrow;
