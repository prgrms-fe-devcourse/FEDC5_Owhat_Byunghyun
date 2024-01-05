import Group from '../Group';
import Icon from '../Icon';
import Image from '../Image';
import Text from '../Text';
import DUMMY_DATA from './DUMMY_DATA.json';

const Feed = () => {
  const title = DUMMY_DATA[0].title[0].title;
  const body = DUMMY_DATA[0].title[0].body;
  const image = DUMMY_DATA[0].image;
  const likes = DUMMY_DATA[0].likes;
  const comments = DUMMY_DATA[0].comments;

  return (
    <Group direction="columns" spacing="md">
      <Text size="xlarge" strong={true}>
        {title}
      </Text>
      <Image src={image} imgWidth="full" imgHeight="auto" lazy={true} />
      <Text>{body}</Text>
      <Group spacing="sm" align="center">
        <Icon id="favorite" />
        <Text size="small">{likes.length}</Text>
        <Icon id="sms" />
        <Text size="small">{comments.length}</Text>
      </Group>
    </Group>
  );
};

export default Feed;
