import styled from "styled-components";

export const StyledWeekDay = styled.span`
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.textDefault};

  text-align: center;
`;
