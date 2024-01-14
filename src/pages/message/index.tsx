import { useEffect } from 'react';

import useAuthUser from '~/common/hooks/queries/useAuthUser';
import useMessageList from '~/common/hooks/queries/useMessageList';
import useOnlineUsers from '~/common/hooks/queries/useOnlineUsers';
import useLayout from '~/common/hooks/useLayout';

import MessageList from './components/MessageList';
import OnlineUsers from './components/OnlineUsers';

export default function MessagePage() {
  const messageList = useMessageList();

  const { onlineUsers } = useOnlineUsers();
  const { changeMeta } = useLayout();
  const { user } = useAuthUser();

  useEffect(() => {
    changeMeta({
      title: user?.fullName || '',
      left: null,
      right: null,
    });
  }, [user]);

  if (!onlineUsers.length) return <div>없음</div>;

  return (
    <section>
      <OnlineUsers onlineUsers={onlineUsers} />

      <h2 className="mt-4 text-xl font-bold">메시지</h2>
      <MessageList {...messageList} />
    </section>
  );
}
