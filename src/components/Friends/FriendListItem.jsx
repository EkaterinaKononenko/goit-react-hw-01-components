import PropTypes from 'prop-types';
import { FriendItemStyle, FriendTextName } from './Friends.styled';

export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <FriendItemStyle className="item" key={id}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="60" />
      <FriendTextName className="name">{name}</FriendTextName>
    </FriendItemStyle>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
