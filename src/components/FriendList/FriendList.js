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
  friends: PropTypes.array,
};
export default FriendList;
