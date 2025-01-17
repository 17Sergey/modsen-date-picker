import styled from "styled-components";

export const StyledWeekDaysList = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  margin: ${({ theme }) => theme.margins.base} 0
    ${({ theme }) => theme.margins.sm};
`;

export const StyledWeekDayItem = styled.li`
  text-align: center;
`;
