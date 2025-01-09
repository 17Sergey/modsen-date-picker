import { FC } from "react";

import IconButton from "@components/IconButton";
import Calendar from "@components/Icons/Calendar";
import Clear from "@components/Icons/Clear";

import {
  StyledWrapper,
  StyledDateLabel,
  StyledDateInput,
  StyledDateIcon,
  StyledClearButton,
} from "./PickDateControl.styled";

interface PickDateControlProps {
  onClick: VoidFunction;
  selectedDate: string;
  onClear: VoidFunction;
}

export const PickDateControl: FC<PickDateControlProps> = ({
  onClick,
  selectedDate,
  onClear,
}) => {
  return (
    <StyledWrapper>
      <StyledDateLabel>Date</StyledDateLabel>
      <StyledDateInput>
        <StyledDateIcon>
          <IconButton onClick={onClick}>
            <Calendar />
          </IconButton>
        </StyledDateIcon>
        <span style={{ color: selectedDate ? "black" : "gray" }}>
          {selectedDate || "Choose Date"}
        </span>
        {selectedDate && (
          <StyledClearButton>
            <IconButton onClick={onClear}>
              <Clear />
            </IconButton>
          </StyledClearButton>
        )}
      </StyledDateInput>
    </StyledWrapper>
  );
};
