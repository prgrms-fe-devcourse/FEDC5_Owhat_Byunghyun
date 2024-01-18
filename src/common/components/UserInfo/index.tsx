import { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

import { Post } from '~/api/types/postTypes';
import { User } from '~/api/types/userTypes';
import { cn } from '~/utils/cn';
import { elapsedTime } from '~/utils/time';

import Avatar from '../Avatar';
import ExtraInfo from '../ExtraInfo';
import Group from '../Group';
import Text from '../Text';

type textSize = 'xsmall' | 'small' | 'base' | 'large' | 'xlarge' | '2xlarge';

interface UserInfoProps extends ComponentProps<'div'> {
  post: Post;
  authUser: User;
  authorTextSize?: textSize;
  extraInfoTextSize?: textSize;
  betweenGap?: number;
  avartarClassName?: ComponentProps<typeof Avatar>['className'];
}

const UserInfo = ({
  post,
  authUser,
  avartarClassName,
  authorTextSize = 'small',
  extraInfoTextSize = 'xsmall',
  betweenGap = 14,
}: UserInfoProps) => {
  const { author, channel, createdAt } = post;
  const { _id: authUserId } = authUser;

  if (typeof author === 'string' || typeof channel === 'string') {
    return;
  }

  return (
    <Group spacing={betweenGap} align="center">
      <Link
        to={authUserId === author._id ? '/account' : `/account/${author._id}`}
        className="flex items-center"
      >
        <Avatar
          src={author.image}
          size="full"
          className={cn('h-9 w-9', avartarClassName)}
        />
      </Link>
      <Group spacing={0} direction="columns">
        <Link
          to={authUserId === author._id ? '/account' : `/account/${author._id}`}
        >
          <Text size={authorTextSize} strong>
            {author.fullName}
          </Text>
        </Link>
        <ExtraInfo>
          {channel && (
            <Text size={extraInfoTextSize} elementType="span">
              {channel.name}
            </Text>
          )}
          <Text size={extraInfoTextSize} elementType="span">
            {elapsedTime(createdAt)}
          </Text>
        </ExtraInfo>
      </Group>
    </Group>
  );
};

export default UserInfo;
