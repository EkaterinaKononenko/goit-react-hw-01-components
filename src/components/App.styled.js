import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.background};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${props => props.theme.space[0]}px;
  margin-bottom: ${props => props.theme.space[0]}px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justifycontent: center;
  alignitems: center;
  fontsize: ${props => props.theme.fontSizes[6]}px;
`;
