import { FC } from "react";

interface ClearButtonProps {
  onClick: VoidFunction;
  caption?: string;
}

export const ClearButton: FC<ClearButtonProps> = ({
  onClick,
  caption = "Clear",
}) => {
  return <button onClick={onClick}>{caption}</button>;
};
