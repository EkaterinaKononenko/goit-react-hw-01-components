import PropTypes from 'prop-types';
import {
  ProfileWrap,
  ProfileNameWrap,
  ProfileText,
  ProfileListStat,
  ProfileItems,
  StatName,
  StatQuantity,
} from './Profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileWrap className="profile">
      <ProfileNameWrap className="description">
        <img src={avatar} alt={username} className="avatar" />
        <ProfileText className="name">{username}</ProfileText>
        <ProfileText className="tag">@{tag}</ProfileText>
        <ProfileText className="location">{location}</ProfileText>
      </ProfileNameWrap>

      <ProfileListStat className="stats">
        <ProfileItems>
          <StatName className="label">Followers: </StatName>
          <StatQuantity className="quantity">{stats.followers}</StatQuantity>
        </ProfileItems>
        <ProfileItems>
          <StatName className="label">Views: </StatName>
          <StatQuantity className="quantity">{stats.views}</StatQuantity>
        </ProfileItems>
        <ProfileItems>
          <StatName className="label">Likes: </StatName>
          <StatQuantity className="quantity">{stats.likes}</StatQuantity>
        </ProfileItems>
      </ProfileListStat>
    </ProfileWrap>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
