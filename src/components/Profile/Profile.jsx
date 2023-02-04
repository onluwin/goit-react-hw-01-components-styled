// COMPONENTS
import { ProfileStats } from './ProfileStats';
import { ProfileDescription } from './ProfileDescription';

// STYLED
import { ProfileContainer } from './Profile.styled';

export const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <ProfileDescription
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <ProfileStats stats={stats} />
    </ProfileContainer>
  );
};
