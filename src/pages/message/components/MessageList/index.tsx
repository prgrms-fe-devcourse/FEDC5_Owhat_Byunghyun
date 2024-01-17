import { Link } from 'react-router-dom';

import { Message } from '~/api/types/notificationTypes';
import { User } from '~/api/types/userTypes';
import Avatar from '~/common/components/Avatar';
import { elapsedTime } from '~/utils/time';

import Skeleton from './Skeleton';

interface MessageListProps {
  messageList: Message[];
  isLoading: boolean;
  user: User | undefined;
}

const MessageList = ({ messageList, user, isLoading }: MessageListProps) => {
  if (isLoading) return <Skeleton />;
  if (!messageList.length)
    return (
      <div className="mt-8 text-center">친구들과 대화를 시도해보세요!</div>
    );

  return (
    <ul className="scroll-none flex flex-col overflow-y-auto">
      {messageList.map(message => {
        const target =
          message.receiver._id === user?._id
            ? message.sender
            : message.receiver;

        return (
          <li key={message._id}>
            <Link
              to={target._id}
              className="flex cursor-pointer gap-4 border-b px-1 py-4 [&:not(:last-child)]:border-b-gray-300"
            >
              <Avatar
                src={target.image}
                alt={`${target.fullName} image`}
                className="min-h-14 min-w-14 [&>img]:h-14 [&>img]:w-14"
              />
              <div className="flex flex-1 flex-col justify-center gap-1">
                <b>{target.fullName}</b>
                <p className="line-clamp-1 text-ellipsis text-gray-500">
                  {message.message}
                </p>
              </div>
              <time className="flex items-center text-sm text-gray-500">
                {elapsedTime(message.createdAt)}
              </time>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MessageList;
