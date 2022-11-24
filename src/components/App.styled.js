import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.background};
  fontsize: ${props => props.theme.fontSizes[6]}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
