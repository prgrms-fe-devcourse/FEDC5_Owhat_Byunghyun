import Group from '../Group';
import Icon from '../Icon';
import Image from '../Image';
import Like from '../Like';
import Text from '../Text';

interface FeedProps {
  initialState: boolean;
  title: string;
  image?: string;
  body?: string;
  likes: object[];
  comments: object[];
}

const Feed = ({
  initialState = false,
  title,
  image,
  body,
  likes,
  comments,
}: FeedProps) => {
  return (
    <Group direction="columns" spacing="md">
      <Text size="xlarge" strong={true}>
        {title}
      </Text>
      <Image
        src={image}
        imgWidth="full"
        imgHeight="auto"
        lazy={true}
        threshold={0}
      />
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
