import { ComponentProps, useEffect, useState } from 'react';

import { Follow } from '~/api/types/userTypes';
import Group from '~/common/components/Group';
import Text from '~/common/components/Text';

interface AlarmProps extends ComponentProps<'div'> {
  username: string;
  follow?: Follow;
  comment?: string;
  message?: string;
  like?: string;
}

const Alarm = ({ username, follow, comment, message, like }: AlarmProps) => {
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
    <Group align="center" spacing={4} className="w-full rounded border-2 p">
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
  );
};

export default Alarm;
