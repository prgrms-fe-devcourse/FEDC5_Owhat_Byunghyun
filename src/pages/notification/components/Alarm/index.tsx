import { ComponentProps, useEffect, useState } from 'react';

import Group from '~/common/components/Group';
import Text from '~/common/components/Text';
import { cn } from '~/utils/cn';

interface AlarmProps extends ComponentProps<'div'> {
  seen: boolean;
  username: string;
  follow: boolean;
  comment: string;
  message: boolean;
  like: string;
  date: string;
}

const Alarm = ({
  seen,
  username,
  follow,
  comment,
  message,
  like,
  date,
}: AlarmProps) => {
  const [alarmMessage, setAlarmMessage] = useState('');
  const [postTitle, setPostTitle] = useState('');

  useEffect(() => {
    if (follow) {
      setAlarmMessage('회원님을 팔로우하기 시작했습니다.');
    } else if (comment) {
      setPostTitle(comment);
      setAlarmMessage('게시글에 댓글을 달았습니다.');
    } else if (message) {
      setAlarmMessage('메시지를 보냈습니다.');
    } else if (like) {
      setPostTitle(like);
      setAlarmMessage('게시글을 좋아합니다.');
    }
  }, [follow, comment, message, like]);

  return (
    <div
      className={cn(
        'w-full rounded border-2 p',
        seen && 'bg-gray-300 text-gray-500',
      )}
    >
      <Group align="center" spacing={4}>
        <Text>{`${username}님이`}</Text>
        {postTitle && (
          <>
            <Text>[</Text>
            <Text className="w-28 truncate">{postTitle}</Text>
            <Text>]</Text>
          </>
        )}
        <Text>{alarmMessage}</Text>
      </Group>
      <Group
        spacing={0}
        position="left"
        align="center"
        className="mt-xsmall text-gray-500"
      >
        {/* <Icon id="notifications" size={16} className="fill-gray-500" /> */}
        <Text className="text-caption">{date}</Text>
      </Group>
    </div>
  );
};

export default Alarm;
