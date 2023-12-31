import { Link } from 'react-router-dom';

import { elapsedTime } from '~/utils/time';

import Avatar from '../Avatar';
import ExtraInfo from '../ExtraInfo';
import Group from '../Group';
import Text from '../Text';

interface UserInfoProps {
  _id: string;
  profileImage?: string;
  author: string;
  channel?: string;
  createdAt: string;
}

const UserInfo = ({
  _id,
  profileImage,
  author,
  channel,
  createdAt,
}: UserInfoProps) => {
  return (
    <Group spacing={'sm'} align={'center'}>
      <Link to={`/account/${_id}`} className="flex items-center">
        <Avatar src={profileImage} size="auto" className="h-14 w-14"></Avatar>
      </Link>
      <Group spacing={2} direction={'columns'}>
        <Link to={`/account/${_id}`}>
          <Text strong>{author}</Text>
        </Link>
        <ExtraInfo>
          {channel && <Text elementType="span">{channel}</Text>}
          <Text elementType="span">{elapsedTime(createdAt)}</Text>
        </ExtraInfo>
      </Group>
    </Group>
  );
};

export default UserInfo;
