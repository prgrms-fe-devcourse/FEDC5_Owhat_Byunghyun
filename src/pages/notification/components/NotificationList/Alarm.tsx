import { useEffect, useState } from 'react';

import { Notification } from '~/api/types/notificationTypes';
import { Post } from '~/api/types/postTypes';
import Group from '~/common/components/Group';
import Text from '~/common/components/Text';
import { cn } from '~/utils/cn';
import { elapsedTime } from '~/utils/time';

interface AlarmMessages {
  [key: string]: string;
}

const Alarm = ({ alarm }: { alarm: Notification }) => {
  const [notificationType, setNotificationType] = useState('');

  const ALARM_MESSAGES: AlarmMessages = {
    follow: '회원님을 팔로우하기 시작했습니다.',
    comment: '게시글에 댓글을 달았습니다.',
    message: '메시지를 보냈습니다.',
    like: '게시글을 좋아합니다.',
  };

  const isJson = (str: string) => {
    try {
      const json = JSON.parse(str);
      return json && typeof json === 'object';
    } catch (e) {
      return false;
    }
  };

  const jsonToData = (title: string) => {
    if (isJson(title)) {
      const { title: postTitle, content: postContent } = JSON.parse(title);

      return { postTitle, postContent };
    } else {
      return { postTitle: title, postContent: '' };
    }
  };

  useEffect(() => {
    if ('follow' in alarm) {
      setNotificationType('follow');
    } else if ('comment' in alarm) {
      setNotificationType('comment');
    } else if ('like' in alarm) {
      setNotificationType('like');
    } else if ('message' in alarm) {
      setNotificationType('message');
    }
  }, [alarm]);

  return (
    <div
      className={cn(
        'w-full rounded border-2 p',
        alarm.seen && 'bg-gray-300 text-gray-500',
      )}
    >
      <Group align="center" spacing={4}>
        <Text>{`${alarm.author.fullName}님이`}</Text>
        {(notificationType === 'comment' || notificationType === 'like') && (
          <>
            <Text>[</Text>
            <Text className="max-w-28 truncate">
              {alarm[notificationType] &&
                jsonToData((alarm[notificationType]?.post as Post).title)
                  .postTitle}
            </Text>
            <Text>]</Text>
          </>
        )}
        <Text>{ALARM_MESSAGES[notificationType]}</Text>
      </Group>
      <Group
        spacing={0}
        position="left"
        align="center"
        className="mt-xsmall text-gray-500"
      >
        <Text className="text-caption">{elapsedTime(alarm.createdAt)}</Text>
      </Group>
    </div>
  );
};

export default Alarm;
