import { useNavigate } from 'react-router-dom';

import { Post } from '~/api/types/postTypes';
import { Follow } from '~/api/types/userTypes';
import Group from '~/common/components/Group';
import Text from '~/common/components/Text';

interface AccountExtraInfoProps {
  posts: Post[];
  followers: Follow[];
  following: Follow[];
}

const AccountExtraInfo = ({
  posts,
  followers,
  following,
}: AccountExtraInfoProps) => {
  const navigate = useNavigate();

  return (
    <Group spacing={20} className="text-gray-500" grow>
      <Group
        spacing={2}
        direction={'columns'}
        position={'center'}
        align={'center'}
      >
        <Text>{posts.length}</Text>
        <Text>게시물</Text>
      </Group>

      <Group
        spacing={2}
        direction={'columns'}
        position={'center'}
        align={'center'}
        onClick={() => {
          navigate('/follow', {
            state: { followers, following, isFollowing: false },
          });
        }}
      >
        <Text>{followers.length}</Text>
        <Text>팔로워</Text>
      </Group>

      <Group
        spacing={2}
        direction={'columns'}
        position={'center'}
        align={'center'}
        onClick={() => {
          navigate('/follow', {
            state: { followers, following, isFollowing: true },
          });
        }}
      >
        <Text>{following.length}</Text>
        <Text>팔로우</Text>
      </Group>
    </Group>
  );
};

export default AccountExtraInfo;
