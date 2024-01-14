import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Follow } from '~/api/types/userTypes';
import Group from '~/common/components/Group';
import Tab from '~/common/components/Tab';
import useLayout from '~/common/hooks/useLayout';

import FollowList from './components/FollowList';

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
      title: !isFollowing ? '팔로워' : '팔로잉',
      left: <></>,
      right: <></>,
    });

    isFollowing ? setFollowData(following) : setFollowData(followers);
  }, [isFollowing]);

  return (
    <Group spacing={0} direction={'columns'} grow>
      <Tab
        activeLabel={isFollowing ? '팔로잉' : '팔로워'}
        onClick={() => setIsFollowing(prev => !prev)}
      >
        <Tab.Item title="팔로워" label="팔로워"></Tab.Item>
        <Tab.Item title="팔로잉" label="팔로잉"></Tab.Item>
      </Tab>
      <FollowList
        followData={followData}
        isFollowing={isFollowing}
      ></FollowList>
    </Group>
  );
};

export default FollowPage;
