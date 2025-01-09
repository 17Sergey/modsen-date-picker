import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const StyledDateLabel = styled.label`
  font-size: ${({ theme }) => theme.fonts.size.base};
  color: ${({ theme }) => theme.colors.textDefault};
  margin-bottom: 8px;
`;

export const StyledDateInput = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.neutral};
  border-radius: 4px;
  padding: 8px;
  background: ${({ theme }) => theme.colors.background};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledDateIcon = styled.div`
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.textDefault};
`;

export const StyledClearButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textDefault};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
