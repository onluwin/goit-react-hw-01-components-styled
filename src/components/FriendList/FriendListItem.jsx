import PropTypes from 'prop-types';

import {
  ListItem,
  ItemStatus,
  FriendAvatar,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <ListItem key={id}>
        <ItemStatus friendStatus={isOnline}></ItemStatus>
        <FriendAvatar src={avatar} alt="User avatar" width="48" />
        <FriendName>{name}</FriendName>
      </ListItem>
    );
  });
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
