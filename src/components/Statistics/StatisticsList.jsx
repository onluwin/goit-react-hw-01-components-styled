// COMPONENTS
import { StatisticsItem } from './StatisticsItem';

// STYLED
import { List } from './Statistics.styled';

export const StatisticsList = ({ data }) => {
  return (
    <List>
      <StatisticsItem data={data} />
    </List>
  );
};
