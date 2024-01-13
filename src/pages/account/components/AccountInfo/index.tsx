import { Link } from 'react-router-dom';

import { Follow, User } from '~/api/types/userTypes';
import Button from '~/common/components/Button';
import Text from '~/common/components/Text';

import AccountExtraInfo from '../AccountExtraInfo';
import AccountImages from '../AccountImages';
import FollowButton from '../FollowButton';

interface AccountInfoProps {
  user: User;
  isMyAccount: boolean;
}

const AccountInfo = ({ user, isMyAccount }: AccountInfoProps) => {
  const {
    _id: userId,
    fullName,
    coverImage,
    image: profileImage,
    followers,
    following,
    posts,
  } = user;

  return (
    <>
      <AccountImages coverImage={coverImage} image={profileImage} />
      <Text size={'large'} className={'mt-xlarge text-center'} strong>
        {fullName}
      </Text>
      <AccountExtraInfo
        posts={posts}
        followers={followers as Follow[]}
        following={following as Follow[]}
      />

      {isMyAccount ? (
        <Button className="mt-small">
          <Link to={'/account-edit'}>내 정보 변경</Link>
        </Button>
      ) : (
        <FollowButton userId={userId} followers={followers as Follow[]} />
      )}
    </>
  );
};

export default AccountInfo;
