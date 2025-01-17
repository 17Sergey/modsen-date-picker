import styled from "styled-components";

export const StyledDateInput = styled.div<{ $isValid: boolean }>`
  width: 100%;

  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.paddings.sm};

  border: 1px solid
    ${({ theme, $isValid }) =>
      $isValid ? theme.colors.neutral : theme.colors.holiday};
  border-radius: ${({ theme }) => theme.paddings.xs};

  margin-bottom: ${({ theme }) => theme.margins.sm};
  padding: ${({ theme }) => theme.paddings.sm};

  position: relative;

  background: ${({ theme }) => theme.colors.background};
  cursor: pointer;
`;

export const StyledInput = styled.input`
  max-width: 100%;
  border: none;
  outline: none;
  flex-grow: 1;

  margin-right: ${({ theme }) => theme.widths.icons.base};

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

export const StyledDateIcon = styled.div`
  flex-shrink: 0;
`;

export const StyledClearButton = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.paddings.sm};
`;
