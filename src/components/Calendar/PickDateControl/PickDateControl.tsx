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

import { DATA_TEST_ID } from "@constants/constants";

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
      setIsValid(true);

      onDateInput(date);
    }
  };

  const handleClear = () => {
    setInputValue("");
    setIsValid(true);

    onClear();
  };

  useEffect(() => {
    if (!selectedDate) {
      setInputValue("");
      return;
    }

    const formattedDate = formatDate(selectedDate) as string;
    setInputValue(formattedDate);
    setIsValid(true);
  }, [selectedDate]);

  return (
    <StyledDateInput
      $isValid={isValid}
      data-testid={DATA_TEST_ID.PICK_DATE_CONTROL}
    >
      <StyledDateIcon>
        <IconButton
          aria-label="Toggle calendar"
          data-testid={DATA_TEST_ID.TOGGLE_CALENDAR}
          onClick={onClick}
        >
          <Calendar />
        </IconButton>
      </StyledDateIcon>
      <StyledInput
        placeholder="Choose date"
        value={inputValue}
        onChange={handleInputChange}
      />
      {inputValue && (
        <StyledClearButton>
          <IconButton onClick={handleClear}>
            <Clear />
          </IconButton>
        </StyledClearButton>
      )}
    </StyledDateInput>
  );
};
