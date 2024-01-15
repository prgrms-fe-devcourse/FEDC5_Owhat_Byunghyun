import { useEffect, useState } from 'react';

import { Follow, User } from '~/api/types/userTypes';
import Text from '~/common/components/Text';
import { useAllUsers } from '~/common/hooks/queries/useAllUsers';

import FollowListItem from '../FollowListItem';

interface FollowListProps {
  followers: Follow[];
}

const FollowersList = ({ followers }: FollowListProps) => {
  const [followList, setFollowList] = useState<User[]>([]);
  const { allUsers } = useAllUsers();

  useEffect(() => {
    const followUsers = allUsers.filter(user => {
      return followers.some(follow => {
        return user._id === follow.follower;
      });
    });

    setFollowList(followUsers);
  }, [allUsers, followers]);

  return (
    <ul className="flex flex-col gap px-small">
      {followList.length === 0 && (
        <Text className="mt-large text-center text-gray-400">
          팔로워 유저가 없습니다.
        </Text>
      )}

      {followList.map(userData => (
        <li key={userData._id}>
          <FollowListItem userData={userData} />
        </li>
      ))}
    </ul>
  );
};

export default FollowersList;
