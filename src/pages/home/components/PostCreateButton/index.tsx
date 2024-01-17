import { useNavigate } from 'react-router-dom';

import Button from '~/common/components/Button';
import Icon from '~/common/components/Icon';

interface PostCreateButtonProps {
  channelId?: string;
}

const PostCreateButton = ({ channelId }: PostCreateButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/postCreate?channelId=${channelId}`);
  };
  return (
    <Button
      onClick={handleClick}
      styleType="secondary"
      className="rounded-full p-1 shadow-md dark:bg-transparent"
    >
      <Icon id="edit" />
    </Button>
  );
};

export default PostCreateButton;
