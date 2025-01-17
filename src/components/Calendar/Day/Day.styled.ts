import styled, { css } from "styled-components";

import { StyledDayProps } from "./Day.types";

const selected = css`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const previous = css`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.disabled};
`;

const holiday = css`
  color: ${({ theme }) => theme.colors.holiday};
`;

const startRange = css`
  ${selected}
  border-radius: 0;
  border-top-left-radius: ${({ theme }) => theme.paddings.sm};
  border-bottom-left-radius: ${({ theme }) => theme.paddings.sm};
  background-color: ${({ theme }) => theme.colors.primaryTransparent60};
`;

const endRange = css`
  ${selected}
  border-radius: 0;
  border-top-right-radius: ${({ theme }) => theme.paddings.sm};
  border-bottom-right-radius: ${({ theme }) => theme.paddings.sm};
`;

const inRange = css`
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 0;

  background-color: ${({ theme }) =>
    theme.colors.primaryTransparent10} !important;
`;

export const StyledDay = styled.button<StyledDayProps>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};

  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  font-size: ${({ theme }) => theme.fonts.size.m};
  color: ${({ theme }) => theme.colors.black};

  padding: ${({ theme }) => theme.paddings.sm};
  text-align: center;
  border-radius: ${({ theme }) => theme.paddings.sm};

  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    ${({ $isToday, $isSelected, theme }) =>
      !($isToday || $isSelected) &&
      `background-color: ${theme.colors.neutral}`};
  }

  ${({ $isFromDifferentMonth }) => $isFromDifferentMonth && previous};

  ${({ $isHoliday }) => $isHoliday && holiday};

  ${({ $isToday }) => $isToday && selected};

  ${({ $isSelected }) => $isSelected && selected};

  ${({ $isStartRange }) => $isStartRange && startRange};

  ${({ $isEndRange }) => $isEndRange && endRange};

  ${({ $isInRange }) => $isInRange && inRange};
`;

export const StyledTodoMark = styled.div`
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);

  width: 3px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.neutral};

  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  border-radius: 50%;
`;
