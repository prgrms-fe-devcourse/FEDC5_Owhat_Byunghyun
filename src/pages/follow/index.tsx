import { useEffect, useState } from 'react';
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
  initialState: {
    initialFollowData: Follow[];
    initialIsFollowing: boolean;
  };
}

const FollowPage = () => {
  const { changeMeta, changeBottomNavigator } = useLayout();
  const location = useLocation();
  const {
    followers,
    following,
    initialState: { initialFollowData, initialIsFollowing },
  }: FollowLocationState = location.state;

  const [followData, setFollowData] = useState<Follow[]>(initialFollowData);

  useEffect(() => {
    changeBottomNavigator(true);
    changeMeta({
      title: initialIsFollowing ? '팔로잉' : '팔로워',
      left: <ArrowBackButton />,
      right: <></>,
    });

    initialIsFollowing ? setFollowData(following) : setFollowData(followers);
  }, [followers, following]);

  return (
    <section className="flex flex-col overflow-hidden">
      <Group
        spacing={0}
        direction="columns"
        grow
        className="scroll-none mt-small flex h-full w-full flex-col overflow-y-auto pb"
      >
        <Tab
          activeLabel={initialIsFollowing ? '팔로잉' : '팔로워'}
          className="mb"
        >
          <Tab.Item title="팔로워" subText={followers.length} label="팔로워">
            <FollowersList followers={followData} />
          </Tab.Item>
          <Tab.Item title="팔로잉" subText={following.length} label="팔로잉">
            <FollowingList following={followData} />
          </Tab.Item>
        </Tab>
      </Group>
    </section>
  );
};

export default FollowPage;
