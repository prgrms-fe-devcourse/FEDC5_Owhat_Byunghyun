import { useNavigate } from 'react-router-dom';

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
    <button
      onClick={handleClick}
      className="fixed bottom-20 right-5 h-14 w-14 rounded-full border-4 border-primary bg-white p-2 drop-shadow-lg hover:bg-primary-lighter"
    >
      <Icon id="edit" className="h-8 w-8 fill-primary" />
    </button>
  );
};

export default PostCreateButton;
