import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Follow } from '~/api/types/userTypes';
import Button from '~/common/components/Button';
import Feed from '~/common/components/Feed';
import Group from '~/common/components/Group';
import Icon from '~/common/components/Icon';
import Text from '~/common/components/Text';
import UserInfo from '~/common/components/UserInfo';
import { useUser } from '~/common/hooks/queries/useUser';
import useLayout from '~/common/hooks/useLayout';

import AccountExtraInfo from './components/AccountExtraInfo';
import AccountImages from './components/AccountImages';
import FollowButton from './components/FollowButton';

export default function AccountPage() {
  const [isMyAccount, setIsMyAccount] = useState(false);
  const token = localStorage.getItem('OWHAT_TOKEN');
  const { pathname } = useLocation();
  const currentUserId = pathname.split('/')[2];

  if (token === currentUserId) {
    setIsMyAccount(true);
  }
  const { userData } = useUser(currentUserId);

  const { _id, fullName, coverImage, image, followers, following, posts } =
    userData;

  const { changeMeta } = useLayout();

  useEffect(() => {
    changeMeta({
      title: isMyAccount ? '내 프로필' : `${fullName}님의 프로필`,
      left: isMyAccount ? (
        <></>
      ) : (
        <Icon
          id="arrow-back"
          onClick={() => {
            //  뒤로 가기
          }}
        />
      ),
      right: <></>,
    });
  }, []);

  return (
    <Group spacing={10} direction={'columns'} className="py" grow>
      <AccountImages coverImage={coverImage} image={image} />
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
          <Link to={'/account/edit'}>내 정보 변경</Link>
        </Button>
      ) : (
        <FollowButton id={_id} />
      )}

      {posts.length === 0 ? (
        <Text
          size={'large'}
          className={'mt-xlarge py-xlarge text-center text-gray-400'}
        >
          작성한 게시물이 없습니다.
        </Text>
      ) : (
        <Group spacing={'sm'} direction={'columns'}>
          {posts.map(
            ({
              _id,
              author,
              channel,
              title,
              createdAt,
              image,
              likes,
              comments,
              content,
            }) => {
              const authorName =
                typeof author === 'string' ? author : author.fullName;

              const channelName =
                typeof channel === 'string' ? channel : channel.name;
              return (
                <Group key={_id} spacing={'sm'} direction={'columns'}>
                  <UserInfo
                    _id={_id}
                    profileImage={image}
                    author={authorName}
                    channel={channelName}
                    createdAt={createdAt}
                  />
                  <Feed
                    content={content}
                    initialState={false}
                    title={title}
                    image={image ?? ''}
                    likes={likes}
                    comments={comments}
                  />
                </Group>
              );
            },
          )}
        </Group>
      )}
    </Group>
  );
}
