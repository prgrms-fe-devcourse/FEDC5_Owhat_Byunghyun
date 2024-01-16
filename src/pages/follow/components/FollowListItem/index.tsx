import { Link } from 'react-router-dom';

import { User } from '~/api/types/userTypes';
import Avatar from '~/common/components/Avatar';
import Group from '~/common/components/Group';
import Text from '~/common/components/Text';

interface FollowListProps {
  userData: User;
}

const FollowListItem = ({ userData }: FollowListProps) => {
  const { _id, fullName, image } = userData;

  return (
    <Link to={`/account/${_id}`} className="flex flex-row">
      <Group spacing={'md'} align={'center'}>
        <Avatar size="full" className="h-10 w-10" src={image}></Avatar>
        <Text>{fullName}</Text>
      </Group>
    </Link>
  );
};

export default FollowListItem;
