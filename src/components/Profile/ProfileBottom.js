import React from 'react';
import { Brick } from './styles/styles';

const ProfileBottom = ({ stats }) => {

  return (
    <div style={{ display: 'flex', position: 'absolute', bottom: 0}}>
      {Object.keys(stats).map((stat, index) => {
        return (
          <Brick key={index * Math.random()}>
            <span>{stat}: {stats[stat]}</span>
          </Brick>
        );
      })}
    </div>
  );
};

export default ProfileBottom;
