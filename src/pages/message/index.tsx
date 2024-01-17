import { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      <Link to="/more-users" className="text-small text-right">
        더 보기
      </Link>

      <h2 className="mt-4 text-xl font-bold">메시지</h2>
      <MessageList {...messageList} user={user} />
    </section>
  );
}
