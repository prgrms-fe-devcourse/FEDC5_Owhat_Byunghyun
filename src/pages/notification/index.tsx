import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Post } from '~/api/types/postTypes';
import ArrowBackButton from '~/common/components/ArrowBackButton';
import Group from '~/common/components/Group';
import Loading from '~/common/components/Loading';
import Text from '~/common/components/Text';
import useNotificationList from '~/common/hooks/queries/useNotificationList';
import useLayout from '~/common/hooks/useLayout';
import { OWHAT_TOKEN } from '~/constants/token';
import { BrowserStorage } from '~/utils/storage';
import { elapsedTime, isOverTwoWeeks } from '~/utils/time';

import Alarm from './components/Alarm';
import SeenButton from './components/SeenButton';

export default function NotificationPage() {
  const { changeMeta, changeBottomNavigator } = useLayout();

  const myStorage = new BrowserStorage<string>(OWHAT_TOKEN);
  const token = myStorage.get();

  const navigate = useNavigate();

  const { notificationList, isLoading } = useNotificationList();

  const recentNotificationList = notificationList?.filter(
    ({ createdAt }) => !isOverTwoWeeks(createdAt),
  );

  useEffect(() => {
    changeBottomNavigator(true);
    changeMeta({
      title: '알림',
      left: <ArrowBackButton />,
      right: <></>,
    });
  }, []);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token]);

  return (
    <section className="scroll-none overflow-y-auto">
      {isLoading ? (
        <Group spacing="sm" align="center" position="center" className="h-60">
          <Loading />
        </Group>
      ) : (
        <>
          <Group spacing={0} position="right" className="mb-small">
            <SeenButton />
          </Group>
          <Group spacing="sm" direction="columns" align="center">
            {recentNotificationList && recentNotificationList.length > 0 ? (
              recentNotificationList.map(
                ({
                  _id,
                  seen,
                  author,
                  follow,
                  comment,
                  message,
                  like,
                  createdAt,
                }) => (
                  <Alarm
                    key={_id}
                    seen={seen}
                    username={author.fullName}
                    follow={!!follow}
                    comment={
                      comment
                        ? JSON.parse((comment.post as Post).title).title
                        : ''
                    }
                    message={!!message}
                    like={
                      like ? JSON.parse((like.post as Post).title).title : ''
                    }
                    date={elapsedTime(createdAt)}
                  />
                ),
              )
            ) : (
              <Group spacing={0} align="center" className="h-40">
                <Text>최신 알림이 없습니다.</Text>
              </Group>
            )}
            <Text className="my mb-12 text-base-small">
              최대 2주까지의 알림을 확인할 수 있습니다.
            </Text>
          </Group>
        </>
      )}
    </section>
  );
}
