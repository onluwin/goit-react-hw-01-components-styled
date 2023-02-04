import PropTypes from 'prop-types';

import { ListItem, ItemLabel, ItemPercentage } from './Statistics.styled';

import { getRandomHexColor } from '../utils/generateRandomColor';

export const StatisticsItem = ({ data }) => {
  return data.map(statistic => {
    const { id, label, percentage } = statistic;
    return (
      <ListItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
        <ItemLabel>{label}</ItemLabel>
        <ItemPercentage>{percentage}%</ItemPercentage>
      </ListItem>
    );
  });
};

StatisticsItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
