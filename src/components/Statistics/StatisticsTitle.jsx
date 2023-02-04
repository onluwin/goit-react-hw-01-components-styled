import PropTypes from 'prop-types';

import { Title } from './Statistics.styled';

export const StatisticsTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

StatisticsTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
