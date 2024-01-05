import Group from '../Group';
import Icon from '../Icon';
import Image from '../Image';
import Like from '../Like';
import Text from '../Text';
import DUMMY_DATA from './DUMMY_DATA.json';

interface FeedProps {
  title?: string;
  body?: string;
  image?: string;
  likes?: object[];
  comments?: object[];
}

const data = DUMMY_DATA[0];

const Feed = ({
  title = data.title[0].title,
  body = data.title[0].body,
  image = data.image,
  likes = data.likes,
  comments = data.comments,
}: FeedProps) => {
  return (
    <Group direction="columns" spacing="md">
      <Text size="xlarge" strong={true}>
        {title}
      </Text>
      <Image src={image} imgWidth="full" imgHeight="auto" lazy={true} />
      <Text>{body}</Text>
      <Group spacing="sm" align="center">
        <Like initialState={false} />
        <Text size="small">{likes.length}</Text>
        <Icon id="sms" />
        <Text size="small">{comments.length}</Text>
      </Group>
    </Group>
  );
};

export default Feed;
