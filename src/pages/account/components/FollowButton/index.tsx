import { VariantProps } from 'class-variance-authority';
import { ComponentProps, useState } from 'react';

import Button from '~/common/components/Button';
import Text from '~/common/components/Text';
import { useFollow } from '~/common/hooks/mutations/useFollow';
import { useUnfollow } from '~/common/hooks/mutations/useUnfollow';
import { cn } from '~/utils/cn';

import { followButtonVariants } from './FollowButton.variants';

interface FollowButtonProps
  extends VariantProps<typeof followButtonVariants>,
    ComponentProps<'button'> {
  id: string;
  styleType?: 'default' | 'small';
}

const FollowButton = ({ id, styleType = 'default' }: FollowButtonProps) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const follow = useFollow();
  const unfollow = useUnfollow();

  const handleFollowButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setIsHover(false);

    if (!isFollowing) {
      follow.mutate({ id: event.currentTarget.id });
      setIsFollowing(true);
    } else {
      unfollow.mutate({ id: event.currentTarget.id });
      setIsFollowing(false);
    }
  };

  return (
    <Button
      id={id}
      type="button"
      onClick={handleFollowButtonClick}
      onMouseEnter={() => {
        isFollowing && setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      styleType={isFollowing ? 'outline' : isHover ? 'outline' : 'primary'}
      className={cn(
        followButtonVariants({ styleType }),
        isHover && 'hover:bg-white hover:text-primary',
      )}
    >
      <Text size={styleType === 'small' ? 'small' : 'base'}>
        {isHover ? '언팔로우' : isFollowing ? '팔로잉' : '팔로우'}
      </Text>
    </Button>
  );
};

export default FollowButton;
