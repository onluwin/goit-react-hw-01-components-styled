// COMPONENTS
import { StatisticsTitle } from './StatisticsTitle';
import { StatisticsList } from './StatisticsList';

// STYLED
import { StatisticsWrapper } from './Statistics.styled';

export const Statistics = ({ title, data }) => {
  return (
    <StatisticsWrapper>
      <StatisticsTitle title={title} />
      <StatisticsList data={data} />
    </StatisticsWrapper>
  );
};
