import styled from 'styled-components';

export const FriendListStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: ${props => props.theme.borders.heading};
  border-radius: ${props => props.theme.radii.heading};
  box-shadow: ${props => props.theme.shadows.boxShadow};
  width: 600px;
  padding: 0;
`;

export const FriendItemStyle = styled.li`
  list-style: none;
  margin-top: ${props => props.theme.space[3]}px;
  margin-bottom: ${props => props.theme.space[3]}px;
`;

export const FriendTextName = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fonts.body};
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes[5]}px;
`;
