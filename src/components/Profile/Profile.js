import React from 'react';
import PropTypes from 'prop-types';
import { Brick, Card, Flex, Icon, P, Title } from './styles/styles';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <Flex>
        <Icon>
          <img src={avatar} style={{ width: 120, height: 120 }} alt={'avatar'} />
        </Icon>
        <Title>{username}</Title>
        <P>{tag}</P>
        <P>{location}</P>
      </Flex>
      <div style={{ display: 'flex', position: 'absolute', bottom: 0}}>
        {Object.keys(stats).map((stat, index) => {
          return (
            <Brick key={index * Math.random()}>
              <span>{stat}: {stats[stat]}</span>
            </Brick>
          );
        })}
      </div>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.string,
    views: PropTypes.string,
    likes: PropTypes.string
  }),
};

export default Profile;
