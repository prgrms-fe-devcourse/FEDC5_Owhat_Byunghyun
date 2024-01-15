import { Link } from 'react-router-dom';

import Avatar from '~/common/components/Avatar';
import ExtraInfo from '~/common/components/ExtraInfo';
import Group from '~/common/components/Group';
import Text from '~/common/components/Text';
import { elapsedTime } from '~/utils/time';

interface PostDetailUserInfoProps {
  _id: string;
  profileImage?: string;
  fullName: string;
  channelName: string;
  createdAt: string;
}

const PostDetailUserInfo = ({
  _id,
  profileImage,
  fullName,
  channelName,
  createdAt,
}: PostDetailUserInfoProps) => {
  return (
    <>
      <Group direction="rows" spacing="md">
        <Link to={`/account/${_id}`} className="flex items-center">
          <Avatar src={profileImage} size="auto" className="h-9 w-9" />
        </Link>
        <Group spacing={1} direction={'columns'}>
          <Link to={`/account/${_id}`}>
            <Text size="small" strong>
              {fullName}
            </Text>
          </Link>
          <ExtraInfo>
            <Text size="xsmall" elementType="span">
              {channelName}
            </Text>
            <Text size="xsmall" elementType="span">
              {elapsedTime(createdAt)}
            </Text>
          </ExtraInfo>
        </Group>
      </Group>
    </>
  );
};

export default PostDetailUserInfo;
