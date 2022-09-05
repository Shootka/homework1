import React from 'react';
import PropTypes from 'prop-types';
import { Card, Flex, Icon } from './styles/styles';
import ProfileBody from './ProfileBody';
import ProfileBottom from './ProfileBottom';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <Flex>
        <Icon>
          <img src={avatar} style={{ width: 100, height: 100 }} alt={'avatar'} />
        </Icon>
        <ProfileBody tag={tag} location={location} username={username} />
      </Flex>
      <ProfileBottom stats={stats} />
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
