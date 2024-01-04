import Group from '../Group';
import Icon from '../Icon';
import Image from '../Image';
import Text from '../Text';

const Feed = () => {
  return (
    <Group direction="columns" spacing="md">
      <Text size="xlarge" strong={true}>
        제목입니다
      </Text>
      <Image
        src="https://cdn.pixabay.com/photo/2023/09/22/18/39/bear-8269620_1280.jpg"
        alt="피드 이미지입니다"
        imgWidth="full"
        imgHeight="auto"
        lazy={true}
      />
      <Text>내용입니다.</Text>
      <Group spacing="sm" align="center">
        <Icon id="favorite" />
        <Text size="small">2</Text>
        <Icon id="sms" />
        <Text size="small">5</Text>
      </Group>
    </Group>
  );
};

export default Feed;
