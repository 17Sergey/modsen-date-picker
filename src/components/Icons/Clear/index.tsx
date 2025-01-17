import { ComponentProps, FC } from "react";

import ClearIcon from "@assets/icons/clear.svg";

import { StyledIcon } from "./Clear.styled";

type ClearProps = ComponentProps<"img">;

const Clear: FC<ClearProps> = ({ ...props }) => (
  <StyledIcon alt="Calendar" src={ClearIcon} {...props} />
);

export default Clear;
