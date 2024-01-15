import { Message } from '~/api/types/notificationTypes';
import Avatar from '~/common/components/Avatar';
import { elapsedTime } from '~/utils/time';

import Skeleton from './Skeleton';

interface MessageListProps {
  messageList: Message[];
  isLoading: boolean;
}

const MessageList = ({ messageList, isLoading }: MessageListProps) => {
  if (isLoading) return <Skeleton />;
  if (!messageList.length) return <div>친구들과 대화를 시도해보세요!</div>;

  return (
    <>
      <h2 className="mt-4 text-xl font-bold">메시지</h2>
      <ul className="scroll-none flex flex-col overflow-y-auto">
        {messageList.map(message => (
          <li
            key={message._id}
            className="flex cursor-pointer gap-4 border-b px-1 py-4 [&:not(:last-child)]:border-b-gray-300"
          >
            <Avatar
              src={message.sender.image}
              alt={`${message.sender.fullName} image`}
              className="min-h-14 min-w-14 [&>img]:h-14 [&>img]:w-14"
            />
            <div className="flex flex-1 flex-col justify-center gap-1">
              <b>{message.sender.fullName}</b>
              <p className="line-clamp-1 text-ellipsis text-gray-500">
                {message.message}
              </p>
            </div>
            <time className="flex items-center text-sm text-gray-500">
              {elapsedTime(message.createdAt)}
            </time>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MessageList;
