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
  const { changeMeta } = useLayout();
  const location = useLocation();
  const {
    followers,
    following,
    initialState: { initialFollowData, initialIsFollowing },
  }: FollowLocationState = location.state;

  const [followData, setFollowData] = useState<Follow[]>(initialFollowData);
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  useEffect(() => {
    changeMeta({
      title: isFollowing ? '팔로잉' : '팔로워',
      left: <ArrowBackButton />,
      right: <></>,
    });

    isFollowing ? setFollowData(following) : setFollowData(followers);
  }, [isFollowing, followers, following]);

  return (
    <section className="flex flex-col overflow-hidden">
      <Group
        spacing={0}
        direction={'columns'}
        grow
        className="scroll-none mt-small flex h-full w-full flex-col overflow-y-auto pb"
      >
        <Tab
          activeLabel={isFollowing ? '팔로잉' : '팔로워'}
          onClick={() => setIsFollowing(prev => !prev)}
          className="mb"
        >
          <Tab.Item title="팔로워" label="팔로워">
            <FollowersList followers={followData} />
          </Tab.Item>
          <Tab.Item title="팔로잉" label="팔로잉">
            <FollowingList following={followData} />
          </Tab.Item>
        </Tab>
      </Group>
    </section>
  );
};

export default FollowPage;
