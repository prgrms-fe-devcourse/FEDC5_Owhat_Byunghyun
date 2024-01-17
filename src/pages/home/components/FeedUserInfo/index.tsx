import { Link } from 'react-router-dom';

import Avatar from '~/common/components/Avatar';
import ExtraInfo from '~/common/components/ExtraInfo';
import Group from '~/common/components/Group';
import Text from '~/common/components/Text';
import { elapsedTime } from '~/utils/time';

interface FeedUserInfoProps {
  _id: string;
  profileImage?: string;
  author: string;
  channel?: string;
  createdAt: string;
  isMyAccount?: boolean;
}

const FeedUserInfo = ({
  _id,
  profileImage,
  author,
  channel,
  createdAt,
  isMyAccount = false,
}: FeedUserInfoProps) => {
  return (
    <Group spacing={14} align="center" className="mb-xsmall p-xsmall">
      <Link
        to={isMyAccount ? '/account' : `/account/${_id}`}
        className="flex items-center"
      >
        <Avatar src={profileImage} size="auto" className="h-8 w-8"></Avatar>
      </Link>
      <Group spacing={0} direction="columns">
        <Link to={isMyAccount ? '/account' : `/account/${_id}`}>
          <Text size="small" strong>
            {author}
          </Text>
        </Link>
        <ExtraInfo>
          {channel && (
            <Text size="xsmall" elementType="span">
              {channel}
            </Text>
          )}
          <Text size="xsmall" elementType="span">
            {elapsedTime(createdAt)}
          </Text>
        </ExtraInfo>
      </Group>
    </Group>
  );
};

export default FeedUserInfo;
