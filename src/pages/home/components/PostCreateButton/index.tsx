import { useNavigate } from 'react-router-dom';

import Button from '~/common/components/Button';
import Icon from '~/common/components/Icon';
import useChannelInfo from '~/pages/postCreate/hooks/useChannelInfo';

const PostCreateButton = () => {
  const navigate = useNavigate();
  const { channelId } = useChannelInfo();

  const handleClick = () => {
    navigate(`/postCreate?channel=${channelId}`);
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
