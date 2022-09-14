import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends?.map(({ avatar, name, id, isOnline }) => {
        return <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline} />;
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number
  }),
};
export default FriendList;
