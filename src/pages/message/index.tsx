import { useEffect } from 'react';

import useAuthUser from '~/common/hooks/queries/useAuthUser';
import useMessageList from '~/common/hooks/queries/useMessageList';
import useOnlineUsers from '~/common/hooks/queries/useOnlineUsers';
import useLayout from '~/common/hooks/useLayout';

import MessageList from './components/MessageList';
import OnlineUsers from './components/OnlineUsers';

export default function MessagePage() {
  const messageList = useMessageList();
  const onlineUsers = useOnlineUsers();
  const { user } = useAuthUser();

  const { changeMeta } = useLayout();

  useEffect(() => {
    changeMeta({
      title: user?.fullName || '',
      left: null,
      right: null,
    });
  }, [user]);

  return (
    <section className="flex flex-col">
      <OnlineUsers {...onlineUsers} />

      <MessageList {...messageList} />
    </section>
  );
}
