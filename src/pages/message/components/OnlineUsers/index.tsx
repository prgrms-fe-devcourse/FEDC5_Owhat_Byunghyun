import { Link } from 'react-router-dom';

import { User } from '~/api/types/userTypes';
import Avatar from '~/common/components/Avatar';
import Badge from '~/common/components/Badge';

import Skeleton from './Skeleton';

interface OnlineUsersProps {
  onlineUsers: User[];
  isLoading: boolean;
}

const OnlineUsers = ({ onlineUsers, isLoading }: OnlineUsersProps) => {
  if (isLoading) return <Skeleton />;
  if (!onlineUsers.length)
    return (
      <div className="border-b border-b-gray-300 py-8 text-center">
        접속 중인 유저가 없습니다!
      </div>
    );

  return (
    <ul className="flex gap-4 border-b pb-1">
      {onlineUsers.slice(0, 4).map(user => (
        <li key={user._id} className="flex w-14 flex-col gap-2">
          <Badge
            size="small"
            badgeType={user.isOnline ? 'online' : 'offline'}
            corner="bottom-right"
          >
            <Avatar
              key={user._id}
              src={user.image}
              className="h-full max-h-14 w-full max-w-14 [&>img]:h-14 [&>img]:w-14 "
            />
          </Badge>
          <span className="line-clamp-1 text-ellipsis text-center">
            {user.fullName}
          </span>
        </li>
      ))}
      {onlineUsers.length >= 5 && (
        <Link to="/users" className="flex items-center">
          <div className="pointer-events-none flex items-center">•••</div>
        </Link>
      )}
    </ul>
  );
};

export default OnlineUsers;
