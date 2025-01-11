import styled from "styled-components";

export const StyledCalendarWrapper = styled.div`
  max-width: 100%;
  min-width: 270px;

  position: relative;

  border: 1px solid ${({ theme }) => theme.colors.neutral};
  border-radius: ${({ theme }) => theme.paddings.sm};
`;

export const StyledCalendar = styled.div`
  padding: ${({ theme }) => theme.paddings.base};
  border-radius: ${({ theme }) => theme.paddings.sm};

  background: ${({ theme }) => theme.colors.background};
`;

export const StyledWeekDaysList = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  margin: ${({ theme }) => theme.margins.base} 0
    ${({ theme }) => theme.margins.sm};
`;

export const StyledWeekDayItem = styled.li`
  text-align: center;
`;

export const StyledDatesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
