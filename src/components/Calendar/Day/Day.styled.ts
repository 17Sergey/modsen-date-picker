import styled from "styled-components";

export const StyledDay = styled.div<{ $isToday: boolean }>`
  background-color: ${({ theme, $isToday }) =>
    $isToday ? theme.colors.primary : theme.colors.background};
`;
