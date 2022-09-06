import React from 'react';
import PropTypes from 'prop-types';
import { Elem, Point } from './style/style';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Elem>
      <Point color={isOnline ? 'green' : 'red'}/>
      <img src={avatar} style={{width: 50, height: 50}} alt='' />
      <p style={{fontSize: '30px'}}>{name}</p>
    </Elem>
  );
};

FriendListItem.propTypes = {

  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
