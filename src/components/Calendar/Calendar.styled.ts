import styled from "styled-components";

export const StyledRelativeWrapper = styled.div`
  /* position: relative; */
`;

export const StyledCalendarWrapper = styled.div`
  width: 250px;
  border: 1px solid ${({ theme }) => theme.colors.neutral};
  border-radius: 8px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};

  /* position: absolute;
  top: 100%; */
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.paddings.base};
  color: ${({ theme }) => theme.colors.textDefault};
`;

export const StyledButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textDefault};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fonts.size.m};

  &:hover {
    opacity: 0.8;
  }
`;

export const StyledDaysOfWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background: ${({ theme }) => theme.colors.neutralBg};
`;

export const StyledDay = styled.div<{ $isToday: boolean }>`
  padding: ${({ theme }) => theme.paddings.sm};
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.neutral};
  color: ${({ $isToday, theme }) =>
    $isToday ? theme.colors.primary : theme.colors.textDefault};

  &.selected {
    background: ${({ theme }) => theme.colors.primaryTransparent10};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledDatesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
