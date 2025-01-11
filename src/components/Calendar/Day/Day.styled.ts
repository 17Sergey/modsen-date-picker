import styled, { css } from "styled-components";

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

interface DayProps {
  $isToday: boolean;
  $isWeekend: boolean;
  $isSelected: boolean;
  $isFromDifferentMonth: boolean;
  $isHoliday: boolean;
}

export const StyledDay = styled.button<DayProps>`
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
