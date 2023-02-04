import PropTypes from 'prop-types';

import {
  ProfileAvatar,
  UserName,
  UserTag,
  UserLocation,
} from './Profile.styled';

export const ProfileDescription = ({ name, tag, location, avatar }) => {
  return (
    <div>
      <ProfileAvatar src={avatar} alt="User avatar" />
      <UserName>{name}</UserName>
      <UserTag>@{tag}</UserTag>
      <UserLocation>{location}</UserLocation>
    </div>
  );
};

ProfileDescription.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
};
