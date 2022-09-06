import React from 'react';
import PropTypes from 'prop-types';
import { Elem, Label, List, Percentage, StatisticCard, Title } from './styles/styles';
import { getRandomColor } from '../../utils/getRandomColor';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticCard>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map((elem) => {
          return <Elem key={elem.id} color={getRandomColor()}>
            <Label>{elem.label}</Label>
            <Percentage>{elem.percentage}</Percentage>
          </Elem>;
        })}
      </List>
    </StatisticCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;
