import Group from '../Group';
import Icon from '../Icon';
import Image from '../Image';
import Like from '../Like';
import Text from '../Text';

interface FeedProps {
  initialState: boolean;
  title: string;
  image: string;
  body?: string;
  likes: string[];
  comments: string[];
  imgAspect?: boolean;
}

const Feed = ({
  initialState = false,
  title,
  image,
  body,
  likes,
  comments,
  imgAspect = true,
}: FeedProps) => {
  const fullImage = imgAspect ? 'aspect-video' : '';
  return (
    <Group direction="columns" spacing="md">
      <Text size="xlarge" strong={true}>
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
      <Text>{body}</Text>
      <Group spacing="sm" align="center">
        <Like initialState={initialState} />
        <Text size="small">{likes.length}</Text>
        <Icon id="sms" />
        <Text size="small">{comments.length}</Text>
      </Group>
    </Group>
  );
};

export default Feed;
