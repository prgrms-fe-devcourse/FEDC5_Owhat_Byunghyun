import { useNavigate } from 'react-router-dom';

import { Post } from '~/api/types/postTypes';
import { Follow } from '~/api/types/userTypes';
import Group from '~/common/components/Group';
import Text from '~/common/components/Text';

interface AccountExtraInfoProps {
  posts: Post[];
  followers: Follow[];
  following: Follow[];
  username?: string;
}

const AccountExtraInfo = ({
  posts = [],
  followers = [],
  following = [],
  username = '',
}: AccountExtraInfoProps) => {
  const navigate = useNavigate();

  return (
    <Group spacing={20} className=" text-gray-500" grow>
      <Group spacing={2} direction="columns" position="center" align="center">
        <Text>{posts.length}</Text>
        <Text>게시물</Text>
      </Group>

      <Group
        spacing={2}
        direction="columns"
        position="center"
        align="center"
        onClick={() => {
          navigate('/follow', {
            state: {
              followers,
              following,
              username,
              initialIsFollowing: false,
            },
          });
        }}
        className="cursor-pointer"
      >
        <Text>{followers.length}</Text>
        <Text>팔로워</Text>
      </Group>

      <Group
        spacing={2}
        direction="columns"
        position="center"
        align="center"
        onClick={() => {
          navigate('/follow', {
            state: {
              followers,
              following,
              username,

              initialIsFollowing: true,
            },
          });
        }}
        className="cursor-pointer"
      >
        <Text>{following.length}</Text>
        <Text>팔로잉</Text>
      </Group>
    </Group>
  );
};

export default AccountExtraInfo;
