import { MouseEvent } from 'react';

import Button from '~/common/components/Button';
import Text from '~/common/components/Text';

interface FollowButtonProps {
  isFollow: boolean;
  isLoading: boolean;
  onClick: () => void;
}

const FollowButton = ({ isFollow, isLoading, onClick }: FollowButtonProps) => {
  const handleClickButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick && onClick();
  };

  return isFollow ? (
    <Button
      loading={isLoading}
      styleType="outline"
      onClick={handleClickButton}
      className="hover:bg-primary-white rounded-large px-small py-xsmall hover:text-primary-lighter"
    >
      <Text elementType="span" className="text-sm">
        팔로잉
      </Text>
    </Button>
  ) : (
    <Button
      loading={isLoading}
      styleType="primary"
      onClick={handleClickButton}
      className="rounded-large px-small py-xsmall"
    >
      <Text elementType="span" className="text-sm">
        팔로우
      </Text>
    </Button>
  );
};

export default FollowButton;
