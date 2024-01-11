import { Channel, Post } from '~/api/types/postTypes';
import { User } from '~/api/types/userTypes';
import Divider from '~/common/components/Divider';
import ExtraInfo from '~/common/components/ExtraInfo';
import Group from '~/common/components/Group';
import Image from '~/common/components/Image';
import Text from '~/common/components/Text';
import { CHANNEL_NAME } from '~/constants/channelName';
import { elapsedTime } from '~/utils/time';

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  const postObj = { title: post.title, content: '내용 없음' };

  if (post.title.includes('content')) {
    const { title, content } = JSON.parse(post.title as string);

    postObj.title = title;
    postObj.content = content;
  }

  return (
    <>
      <Group
        spacing="md"
        align="center"
        position="apart"
        className="h-32 w-full p-small"
      >
        <Group direction="columns" spacing="sm" className="w-8/12">
          <Text strong className="w-full truncate">
            {postObj.title}
          </Text>
          <Text elementType="p" className="w-full truncate">
            {postObj.content}
          </Text>
          <div>
            <ExtraInfo>
              <span className="text-base-small">
                {(post.author as User).fullName}
              </span>
              <span className="text-base-small">
                {elapsedTime(post.createdAt)}
              </span>
            </ExtraInfo>
            <ExtraInfo>
              <span className="text-base-small">
                {CHANNEL_NAME[(post.channel as Channel).name]}
              </span>
            </ExtraInfo>
          </div>
        </Group>
        {post.image && <Image src={post.image} />}
      </Group>
      <Divider size={8} />
    </>
  );
};

export default PostItem;
