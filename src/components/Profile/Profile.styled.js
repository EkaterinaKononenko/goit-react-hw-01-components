import styled from 'styled-components';

export const ProfileWrap = styled.div`
  border: ${props => props.theme.borders.heading};
  border-radius: ${props => props.theme.radii.heading};
  width: 500px;
`;

export const ProfileNameWrap = styled.div`
  font-weight: ${props => props.theme.fonts.bold};
`;

export const ProfileText = styled.p`
  text-align: center;
  justify-content: center;
  margin: ${props => props.theme.space[3]}px;
`;

export const ProfileListStat = styled.ul`
  text-align: center;
  justify-content: center;
  margin: ${props => props.theme.space[3]}px;
`;

export const ProfileItems = styled.li`
  list-style-type: none;
  font-family: ${props => props.theme.fonts.body};
`;

export const StatName = styled.span`
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fonts.body};
  color: ${props => props.theme.colors.text};
`;

export const StatQuantity = styled.span`
  color: ${props => props.theme.colors.primary};
`;
