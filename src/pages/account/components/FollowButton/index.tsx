import { VariantProps } from 'class-variance-authority';
import { ComponentProps, useState } from 'react';

import { Follow } from '~/api/types/userTypes';
import Button from '~/common/components/Button';
import Text from '~/common/components/Text';
import { useFollow } from '~/common/hooks/mutations/useFollow';
import { useUnfollow } from '~/common/hooks/mutations/useUnfollow';
import { cn } from '~/utils/cn';

import { followButtonVariants } from './FollowButton.variants';

interface FollowButtonProps
  extends VariantProps<typeof followButtonVariants>,
    ComponentProps<'button'> {
  accountId: string;
  authUserId: string;
  followers: Follow[];
  following: Follow[];
  styleType?: 'default' | 'small';
}

const FollowButton = ({
  accountId,
  authUserId,
  followers = [],
  styleType = 'default',
}: FollowButtonProps) => {
  const initialFollowing = followers.some(
    ({ follower }) => follower === authUserId,
  );
  const [isFollowingUpdate, setIsFollowingUpdate] = useState(initialFollowing);
  const [isHover, setIsHover] = useState(false);

  const followingUser = followers.find(
    ({ follower }) => follower === authUserId,
  );

  const follow = useFollow();
  const unfollow = useUnfollow();

  const handleFollowButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setIsHover(false);

    follow.mutate({ userId: event.currentTarget.id });
    setIsFollowingUpdate(prev => !prev);
  };

  const handleUnfollowButtonClick = () => {
    setIsHover(true);
    unfollow.mutate({ id: followingUser?._id ?? '' });
    setIsFollowingUpdate(prev => !prev);
  };

  return (
    <Button
      id={accountId}
      type="button"
      onClick={
        isFollowingUpdate ? handleUnfollowButtonClick : handleFollowButtonClick
      }
      onMouseEnter={() => {
        initialFollowing && setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      styleType={
        isFollowingUpdate ? 'outline' : isHover ? 'outline' : 'primary'
      }
      className={cn(
        followButtonVariants({ styleType }),
        isHover && 'hover:bg-white hover:text-primary',
      )}
    >
      <Text size={styleType === 'small' ? 'small' : 'base'}>
        {isHover ? '언팔로우' : isFollowingUpdate ? '팔로잉' : '팔로우'}
      </Text>
    </Button>
  );
};

export default FollowButton;
