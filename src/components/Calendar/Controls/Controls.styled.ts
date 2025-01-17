import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.margins.m};
`;
