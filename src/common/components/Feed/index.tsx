import { Comment, Like } from '~/api/types/postTypes';

import Group from '../Group';
import Icon from '../Icon';
import Image from '../Image';
import LikeButton from '../Like';
import Text from '../Text';

interface FeedProps {
  initialState: boolean;
  title: string;
  image?: string;
  body: string;
  likes: Like[] | string[];
  comments: Comment[] | string[];
  imgAspect?: boolean;
  textOverflow?: boolean;
  handleLike?: () => void;
}

const Feed = ({
  initialState = false,
  title,
  image,
  body,
  likes,
  comments,
  imgAspect = true,
  textOverflow = true,
  handleLike,
}: FeedProps) => {
  const fullImage = imgAspect ? 'aspect-video' : '';
  const abbreviationTitle = textOverflow ? 'line-clamp-1' : '';
  const abbreviationBody = textOverflow ? 'line-clamp-2' : '';

  const likeLength = likes.length > 99 ? '99+' : likes.length;
  const commentsLength = comments.length > 99 ? '99+' : comments.length;

  return (
    <Group direction="columns" spacing="md">
      <Text size="xlarge" strong={true} className={abbreviationTitle}>
        {title}
      </Text>
      {image && (
        <Image
          src={image}
          imgWidth="full"
          imgHeight="auto"
          lazy={true}
          threshold={0}
          className={fullImage}
        />
      )}
      <Text className={abbreviationBody}>{body}</Text>
      <Group spacing={4} align="center">
        <LikeButton initialState={initialState} onClick={handleLike} />
        <Text size="small" className="w-6 text-center">
          {likeLength}
        </Text>
        <Icon id="sms" aria-label="댓글 아이콘" />
        <Text size="small" className="w-6 text-center">
          {commentsLength}
        </Text>
      </Group>
    </Group>
  );
};

export default Feed;
