import styled from "styled-components";

export const StyledClearButton = styled.button`
  width: 100%;
  text-align: center;

  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
  font-size: ${({ theme }) => theme.fonts.size.sm};

  border-top: 1px solid ${({ theme }) => theme.colors.neutral};
  border-bottom-left-radius: ${({ theme }) => theme.paddings.sm};
  border-bottom-right-radius: ${({ theme }) => theme.paddings.sm};

  padding: ${({ theme }) => theme.paddings.sm} 0;
  margin-top: -${({ theme }) => theme.margins.sm};

  background-color: ${({ theme }) => theme.colors.background};

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutralBg};
  }
`;
