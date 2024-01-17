import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Follow } from '~/api/types/userTypes';
import ArrowBackButton from '~/common/components/ArrowBackButton';
import Group from '~/common/components/Group';
import Tab from '~/common/components/Tab';
import useLayout from '~/common/hooks/useLayout';

import FollowersList from './components/FollowersList';
import FollowingList from './components/FollowingList';

interface FollowLocationState {
  followers: Follow[];
  following: Follow[];
  username: string;
  initialIsFollowing: boolean;
}

const FollowPage = () => {
  const { changeMeta } = useLayout();
  const location = useLocation();
  const {
    followers,
    following,
    username,
    initialIsFollowing,
  }: FollowLocationState = location.state;

  useEffect(() => {
    changeMeta({
      title: `${username}`,
      left: <ArrowBackButton />,
      right: <></>,
    });
  }, []);

  return (
    <section className="flex flex-col overflow-hidden">
      <Group
        spacing={0}
        direction="columns"
        grow
        className="scroll-none mt-small flex h-full w-full flex-col overflow-y-auto pb"
      >
        <Tab activeLabel={initialIsFollowing ? '팔로잉' : '팔로워'}>
          <Tab.Item title="팔로워" label="팔로워">
            <FollowersList followers={followers} />
          </Tab.Item>
          <Tab.Item title="팔로잉" label="팔로잉">
            <FollowingList following={following} />
          </Tab.Item>
        </Tab>
      </Group>
    </section>
  );
};

export default FollowPage;
