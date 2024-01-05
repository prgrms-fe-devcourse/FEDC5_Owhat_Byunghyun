import { Link } from 'react-router-dom';

import { getElapsedTime } from '~/utils/getElaspedTime';

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
  author = '유효하지 않은 사용자',
  channel,
  createdAt,
}: UserInfoProps) => {
  return (
    <>
      <Group spacing={'md'} align={'center'}>
        <Link to={`/account/${_id}`}>
          <Avatar src={profileImage}></Avatar>
        </Link>
        <div>
          <Link to={`/account/${_id}`}>
            <Text strong>{author}</Text>
          </Link>
          <ExtraInfo>
            {channel ? <span>{channel}</span> : null}
            <span>{getElapsedTime(createdAt)}</span>
          </ExtraInfo>
        </div>
      </Group>
    </>
  );
};

export default UserInfo;
