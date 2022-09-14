import React from 'react';
import PropTypes from 'prop-types';
import { Elem, Label, List, Percentage, StatisticCard, Title } from './styles/styles';
import { getRandomColor } from '../../utils/getRandomColor';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticCard>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({
                      id,
                      label,
                      percentage,
                    }) => {
          return <Elem key={id} color={getRandomColor()}>
            <Label>{label}</Label>
            <Percentage>{percentage}</Percentage>
          </Elem>;
        })}
      </List>
    </StatisticCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};

export default Statistics;
