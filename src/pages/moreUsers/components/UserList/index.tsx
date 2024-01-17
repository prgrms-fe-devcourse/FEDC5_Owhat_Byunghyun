import { Follow, User } from '~/api/types/userTypes';
import useUsersList from '~/common/hooks/queries/useUsersList';

import UserItem from './UserItem';

interface UserList {
  isOnline?: boolean;
  currentUser: User | undefined;
}

const UserList = ({ isOnline = false, currentUser }: UserList) => {
  const { users } = useUsersList(isOnline);

  const getFollowInfo = (id: string) => {
    const idx = (currentUser?.following as Follow[]).findIndex(
      ({ user }) => user === id,
    );

    if (idx > -1)
      return {
        isFollow: true,
        id: (currentUser?.following[idx] as Follow)._id,
      };
    else return { isFollow: false, id };
  };

  return (
    <ul className="scroll-none h-full overflow-y-auto">
      {users &&
        users.map((user: User) =>
          currentUser ? (
            <UserItem
              key={user._id}
              user={user}
              followInfo={getFollowInfo(user._id)}
            />
          ) : (
            <UserItem key={user._id} user={user} />
          ),
        )}
    </ul>
  );
};

export default UserList;
