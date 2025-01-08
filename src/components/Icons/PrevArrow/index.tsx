import { ComponentProps, FC } from "react";

import PrevArrowIcon from "@assets/icons/prev.svg";

type PrevArrowProps = ComponentProps<"img">;

const PrevArrow: FC<PrevArrowProps> = ({ ...props }) => (
  <img alt="Previuos month" src={PrevArrowIcon} {...props} />
);

export default PrevArrow;
