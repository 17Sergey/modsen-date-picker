import { FC, useEffect, useState } from "react";

import IconButton from "@components/IconButton";
import Calendar from "@components/Icons/Calendar";
import Clear from "@components/Icons/Clear";

import { formatDate } from "@utils/helpers/otherFunctions";
import {
  isValidDate,
  isValidInput,
  createDateFromInput,
} from "@utils/helpers/dateInput";

import {
  StyledDateInput,
  StyledDateIcon,
  StyledClearButton,
  StyledInput,
} from "./PickDateControl.styled";

interface PickDateControlProps {
  selectedDate: Date | null;
  minYear: Year;
  maxYear: Year;
  onClick: VoidFunction;
  onClear: VoidFunction;
  onDateInput: (date: Date) => void;
}

export const PickDateControl: FC<PickDateControlProps> = ({
  onClick,
  selectedDate,
  onClear,
  onDateInput,
  minYear,
  maxYear,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);

    if (value === "") onClear();

    if (!isValidInput(value)) {
      setIsValid(false);
      return;
    }

    if (isValidDate(value, minYear, maxYear)) {
      const date = createDateFromInput(value);
      onDateInput(date);

      setIsValid(true);
    }
  };

  const handleClear = () => {
    setInputValue("");
    onClear();
    setIsValid(true);
  };

  useEffect(() => {
    if (selectedDate) {
      const formattedDate = formatDate(selectedDate) as string;
      setInputValue(formattedDate);
      setIsValid(true);
    }
  }, [selectedDate]);

  return (
    <StyledDateInput $isValid={isValid}>
      <StyledDateIcon>
        <IconButton onClick={onClick}>
          <Calendar />
        </IconButton>
      </StyledDateIcon>
      <StyledInput
        placeholder="Choose date"
        value={inputValue}
        onChange={handleInputChange}
      />
      {selectedDate && (
        <StyledClearButton>
          <IconButton onClick={handleClear}>
            <Clear />
          </IconButton>
        </StyledClearButton>
      )}
    </StyledDateInput>
  );
};
