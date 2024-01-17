import { useEffect, useRef } from 'react';

import { Message } from '~/api/types/notificationTypes';
import { User } from '~/api/types/userTypes';
import { cn } from '~/utils/cn';
import { elapsedTime } from '~/utils/time';

interface MessageSendListProps {
  messageListByUserId: Message[];
  user: User | undefined;
}

const MessageSendList = ({
  messageListByUserId,
  user,
}: MessageSendListProps) => {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ul = ref.current;

    if (!ul) return;

    ul.scrollTo(0, ul.scrollHeight);
  }, [ref, messageListByUserId]);

  if (!messageListByUserId.length)
    return (
      <div className="text-center">
        {user?.fullName}님과 대화를 시도해보세요!
      </div>
    );

  return (
    <ul
      ref={ref}
      className="scroll-none mb-4 flex flex-col gap-3 overflow-y-auto"
    >
      {messageListByUserId?.map(message => (
        <li
          key={message._id}
          className={cn(
            'flex items-end gap-1',
            message.sender._id === user?._id ? 'flex-row' : 'flex-row-reverse',
          )}
        >
          <span
            className={cn(
              'inline-block w-auto rounded px-3 py-2',
              message.sender._id === user?._id
                ? 'bg-primary-lighter'
                : 'bg-gray-300',
            )}
          >
            {message.message}
          </span>
          <time className="align-bottom text-xs text-gray-600">
            {elapsedTime(message.createdAt)}
          </time>
        </li>
      ))}
    </ul>
  );
};

export default MessageSendList;
