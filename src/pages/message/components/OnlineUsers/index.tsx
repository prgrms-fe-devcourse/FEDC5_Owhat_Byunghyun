import { Link } from 'react-router-dom';

import { User } from '~/api/types/userTypes';
import Avatar from '~/common/components/Avatar';
import Badge from '~/common/components/Badge';

interface OnlineUsersProps {
  onlineUsers: User[];
}

const OnlineUsers = ({ onlineUsers }: OnlineUsersProps) => {
  return (
    <ul className="flex gap-4 border-b pb-4">
      {onlineUsers.slice(0, 4).map(user => (
        <li key={user._id} className="h-14">
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
