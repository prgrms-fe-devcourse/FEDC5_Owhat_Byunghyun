import { Link } from 'react-router-dom';

import { User } from '~/api/types/userTypes';
import Avatar from '~/common/components/Avatar';
import Badge from '~/common/components/Badge';
import Divider from '~/common/components/Divider';
import Group from '~/common/components/Group';
import Text from '~/common/components/Text';
import Toast from '~/common/components/Toast';
import useFollowing from '~/common/hooks/mutations/useFollowing';

import FollowButton from '../FollowButton';

interface UserItemProps {
  user: User;
  followInfo?: { isFollow: boolean; id: string };
}

const UserItem = ({
  user,
  followInfo = { isFollow: false, id: '' },
}: UserItemProps) => {
  const { mutate, isPending } = useFollowing(!followInfo.isFollow);

  const handleClickButton = () => {
    if (!followInfo.id) {
      Toast.show('로그인 후 이용해주세요.', 2000);
      return;
    }

    mutate(followInfo.id);
  };

  return (
    <Link to={`/message/${user._id}`}>
      <Group
        spacing="sm"
        position="apart"
        align="center"
        className="h-20 w-full cursor-pointer rounded p-small hover:bg-gray-200 hover:has-[button:hover]:bg-white"
      >
        <Badge
          size="small"
          badgeType={user.isOnline ? 'online' : 'offline'}
          corner="bottom-right"
        >
          {'image' in user ? (
            <Avatar
              src={user.image}
              size="full"
              alt="사용자 프로필"
              className="h-14 w-14"
            />
          ) : (
            <Avatar alt="사용자 프로필" size="full" className="h-14 w-14" />
          )}
        </Badge>
        <Text className="w-36 truncate">{user.fullName}</Text>
        <FollowButton
          isFollow={followInfo.isFollow}
          isLoading={isPending}
          onClick={handleClickButton}
        />
      </Group>
      <Divider />
    </Link>
  );
};

export default UserItem;
