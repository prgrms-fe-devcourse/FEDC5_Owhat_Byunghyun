import { useNavigate, useSearchParams } from 'react-router-dom';

import Button from '~/common/components/Button';
import Icon from '~/common/components/Icon';
import useChannelList from '~/common/hooks/queries/useChannelList';

const PostCreateButton = () => {
  const { channelList } = useChannelList();
  const [searchParams] = useSearchParams();

  const channelId = searchParams.get('channel') || channelList[0]._id;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post-create?channelId=${channelId}`);
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
