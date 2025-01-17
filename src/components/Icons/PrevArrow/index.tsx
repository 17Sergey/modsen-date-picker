import { ComponentProps, FC } from "react";

import PrevArrowIcon from "@assets/icons/prev.svg";

import { StyledPrevIcon } from "./PrevArrow.styled";

type PrevArrowProps = ComponentProps<"img">;

const PrevArrow: FC<PrevArrowProps> = ({ ...props }) => (
  <StyledPrevIcon alt="Previuos month" src={PrevArrowIcon} {...props} />
);

export default PrevArrow;
