import PropTypes from 'prop-types';

// STYLED
import { StatList, StatItem, ItemLabel, ItemQuantity } from './Profile.styled';

export const ProfileStats = ({ stats }) => {
  return (
    <StatList>
      <StatItem>
        <ItemLabel>Followers</ItemLabel>
        <ItemQuantity>{stats.followers}</ItemQuantity>
      </StatItem>
      <StatItem>
        <ItemLabel>Views</ItemLabel>
        <ItemQuantity>{stats.views}</ItemQuantity>
      </StatItem>
      <StatItem>
        <ItemLabel>Likes</ItemLabel>
        <ItemQuantity>{stats.likes}</ItemQuantity>
      </StatItem>
    </StatList>
  );
};

ProfileStats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
