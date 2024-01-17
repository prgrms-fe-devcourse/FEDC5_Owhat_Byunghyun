import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ArrowBackButton from '~/common/components/ArrowBackButton';
import Button from '~/common/components/Button';
import Input from '~/common/components/Input';
import useSendMessage from '~/common/hooks/mutations/useSendMessage';
import { useMessageListByUserId } from '~/common/hooks/queries/useMessageListByUserId';
import useLayout from '~/common/hooks/useLayout';

import MessageSendList from './components/MessageSendList';

const MessageSendPage = () => {
  const { userId } = useParams();
  const { messageListByUserId, user } = useMessageListByUserId(userId || '');
  const { mutateMessage } = useSendMessage();

  const { changeMeta, changeBottomNavigator } = useLayout();

  const onSubmitMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = e.currentTarget.message.value;

    if (!message) return;

    mutateMessage({ userId: userId || '', message });

    e.currentTarget.reset();
  };

  useEffect(() => {
    changeMeta({
      title: user?.fullName || '',
      left: <ArrowBackButton />,
      right: null,
    });

    changeBottomNavigator(false);
  }, [user?.fullName]);

  return (
    <section className="flex flex-col">
      <MessageSendList messageListByUserId={messageListByUserId} user={user} />

      <form
        onSubmit={onSubmitMessage}
        className="fixed bottom-0 left-0 flex w-full border-t border-t-gray-300 px-1 py-2"
      >
        <Input name="message" className="w-full rounded-none border-none" />
        <Button className="shrink-0 px-2 py-1">전송</Button>
      </form>
    </section>
  );
};

export default MessageSendPage;
