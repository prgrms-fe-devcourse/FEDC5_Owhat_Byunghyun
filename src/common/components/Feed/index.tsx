import Group from '../Group';
import Icon from '../Icon';
import Image from '../Image';
import Like from '../Like';
import Text from '../Text';

interface FeedProps {
  initialState: boolean;
  title: string;
  image: string;
  body: string;
  likes: string[];
  comments: string[];
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
      <Group spacing="sm" align="center">
        <Like initialState={initialState} onClick={handleLike} />
        <Text size="small">{likeLength}</Text>
        <Icon id="sms" />
        <Text size="small">{commentsLength}</Text>
      </Group>
    </Group>
  );
};

export default Feed;
