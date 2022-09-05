import React from 'react';
import { P, Title } from './styles/styles';

const ProfileBody = ({username,
                       tag,
                       location}) => {
  return (
    <>
      <Title>{username}</Title>
      <P>{tag}</P>
      <P>{location}</P>
    </>
  );
};

export default ProfileBody;
