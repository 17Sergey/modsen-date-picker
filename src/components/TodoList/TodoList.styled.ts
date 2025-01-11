import styled from "styled-components";

import { Z_INDEX_MANAGER } from "./../../constants/constants";

export const StyledContainer = styled.div`
  padding: ${({ theme }) => theme.paddings.base};
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.paddings.sm};

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${Z_INDEX_MANAGER.TODOLIST};

  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.md};
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
  margin-bottom: ${({ theme }) => theme.margins.sm};
  text-align: center;
`;

export const StyledCloseButton = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.paddings.sm};
  right: ${({ theme }) => theme.paddings.sm};
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.paddings.sm};
  margin: ${({ theme }) => theme.margins.sm} 0;
  border: 1px solid ${({ theme }) => theme.colors.neutral};
  border-radius: ${({ theme }) => theme.paddings.xs};
`;

export const StyledButton = styled.button`
  padding: ${({ theme }) => `${theme.paddings.sm} ${theme.paddings.base}`};

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textPrimary};

  border-radius: ${({ theme }) => theme.paddings.xs};
  cursor: pointer;
`;

export const StyledList = styled.ul`
  margin-top: ${({ theme }) => theme.margins.sm};

  flex-grow: 1;
  max-height: 200px;
  overflow-y: auto;
`;

export const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.paddings.sm} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral};
`;
