import { useEffect, useState } from 'react';

import { Follow, User } from '~/api/types/userTypes';
import Text from '~/common/components/Text';
import { useAllUsers } from '~/common/hooks/queries/useAllUsers';

import FollowListItem from '../FollowListItem';

interface FollowListProps {
  following: Follow[];
}

const FollowingList = ({ following }: FollowListProps) => {
  const { allUsers = [], isLoading } = useAllUsers();
  const [followList, setFollowList] = useState<User[]>([]);

  useEffect(() => {
    if (!isLoading) {
      const followUsers = allUsers.filter(user => {
        return following.some(follow => {
          return follow.user === user._id;
        });
      });

      setFollowList(followUsers);
    }
  }, [allUsers, following]);

  return (
    <ul className="flex flex-col gap-large px-small">
      {followList.length === 0 && (
        <Text className="mt-large text-center text-gray-400">
          팔로우하고 있는 유저가 없습니다.
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

export default FollowingList;
