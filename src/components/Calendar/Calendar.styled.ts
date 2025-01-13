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
