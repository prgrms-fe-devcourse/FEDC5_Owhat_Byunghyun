import { Link } from 'react-router-dom';

import { User } from '~/api/types/userTypes';
import Avatar from '~/common/components/Avatar';
import Divider from '~/common/components/Divider';
import ExtraInfo from '~/common/components/ExtraInfo';
import Group from '~/common/components/Group';
import Text from '~/common/components/Text';

interface UserItemProps {
  user: User;
}

const UserItem = ({ user }: UserItemProps) => {
  return (
    <>
      <Link to={`/account/${user._id}`}>
        <Group
          spacing="md"
          align="center"
          className="my h-20 w-full cursor-pointer rounded p-small hover:bg-gray-200"
        >
          {user.image ? (
            <Avatar src={user.image} size="full" className="h-14 w-14" />
          ) : (
            <Avatar size="full" className="h-14 w-14" />
          )}
          <Group direction="columns" spacing="sm" position="center">
            <Text strong>{user.fullName}</Text>
            <ExtraInfo>
              <span>{`게시물 ${user.posts.length}`}</span>
              <span>{`팔로워 ${user.followers.length}`}</span>
              <span>{`팔로잉 ${user.following.length}`}</span>
            </ExtraInfo>
          </Group>
        </Group>
      </Link>
      <Divider size={8} />
    </>
  );
};

export default UserItem;
