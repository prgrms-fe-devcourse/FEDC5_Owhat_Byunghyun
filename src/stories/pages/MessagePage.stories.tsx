import { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Message } from '~/api/types/notificationTypes';
import { User } from '~/api/types/userTypes';
import LayoutProvider from '~/common/components/Layout';
import MessagePage from '~/pages/message';
import MessageList from '~/pages/message/components/MessageList';
import OnlineUsers from '~/pages/message/components/OnlineUsers';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 5,
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
});

export default {
  title: 'Pages/Message',
  component: MessagePage,
  argTypes: {},
  args: {},
  decorators: Story => (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <LayoutProvider>
          <Story />
        </LayoutProvider>
      </MemoryRouter>
    </QueryClientProvider>
  ),
} satisfies Meta<typeof MessagePage>;

type Story = StoryObj<typeof MessagePage>;

export const Default: Story = {};

const users: User[] = [
  {
    role: 'Regular',
    emailVerified: false,
    banned: false,
    isOnline: false,
    posts: [],
    likes: [],
    comments: [],
    followers: [],
    following: [],
    notifications: [],
    messages: [],
    _id: '65a15690158cc0250bfa2eee',
    fullName: 'asf',
    email: 'tetst@test.ce',
    createdAt: '2024-01-12T15:11:12.405Z',
    updatedAt: '2024-01-12T15:11:12.405Z',
  },
  {
    role: 'Regular',
    emailVerified: false,
    banned: false,
    isOnline: false,
    posts: [],
    likes: ['65a239dabaa49b4c9ac123f0'],
    comments: ['65a238d7baa49b4c9ac122b9', '65a2af13316bc166138b2d7f'],
    followers: [],
    following: ['65a23bb1baa49b4c9ac12414', '65a2b133316bc166138b2fd7'],
    notifications: [],
    messages: ['65a13b3308b4c82383b8b064', '65a102084981fe09225620f6'],
    _id: '65a154d9158cc0250bfa2ede',
    fullName: '넷플릭스구독자',
    email: 'myemail@email.com',
    createdAt: '2024-01-12T15:03:53.665Z',
    updatedAt: '2024-01-14T07:40:41.639Z',
  },
  {
    role: 'Regular',
    emailVerified: false,
    banned: false,
    isOnline: false,
    posts: [],
    likes: [],
    comments: [],
    followers: [],
    following: ['65a0ebee4981fe09225620b9'],
    notifications: [],
    messages: [],
    _id: '65a0ebd84981fe09225620b4',
    fullName: '또다른테스트',
    email: 'juditest@naver.com',
    createdAt: '2024-01-12T07:35:52.160Z',
    updatedAt: '2024-01-14T06:16:45.404Z',
  },
  {
    role: 'Regular',
    emailVerified: false,
    banned: false,
    isOnline: false,
    posts: [],
    likes: [],
    comments: [],
    followers: [],
    following: ['65a0cc104981fe092256201b'],
    notifications: [],
    messages: [],
    _id: '65a0bd6a608bb50283c764e2',
    fullName: '테스트용주디',
    email: 'judi@naver.com',
    createdAt: '2024-01-12T04:17:46.289Z',
    updatedAt: '2024-01-12T07:10:42.538Z',
  },
  {
    role: 'SuperAdmin',
    emailVerified: true,
    banned: false,
    isOnline: false,
    posts: [],
    likes: [],
    comments: [],
    followers: [],
    following: [],
    notifications: [],
    messages: [],
    _id: '64edba4945b24d125e786ba1',
    fullName: 'Admin',
    email: 'admin@programmers.co.kr',
    createdAt: '2023-08-29T09:28:41.507Z',
    updatedAt: '2024-01-12T04:55:42.387Z',
  },
];

const messageList: Message[] = [
  {
    _id: '65a382d2b846972af5676b8e',
    updatedAt: '2024-01-14T08:32:35.491Z',
    message: '메시지입니다!',
    createdAt: '2024-01-14T06:47:53.161Z',
    sender: {
      _id: '65a382d2b846972af5676b8e',
      role: 'Regular',
      emailVerified: false,
      banned: false,
      isOnline: true,
      posts: [],
      likes: [],
      comments: [],
      followers: [],
      following: [],
      notifications: [],
      messages: ['65a382d2b846972af5676b8e', '65a382d2b846972af5676b8e'],
      fullName: "I'mTest",
      email: 'test@test',

      createdAt: '2024-01-14T06:44:34.125Z',
      updatedAt: '2024-01-14T08:32:35.491Z',
    },
    receiver: {
      _id: '65a382d2b846972af5676b8e',
      role: 'Regular',
      emailVerified: false,
      banned: false,
      isOnline: true,
      posts: [],
      likes: [],
      comments: [],
      followers: [],
      following: [],
      notifications: [],
      messages: ['65a382d2b846972af5676b8e', '65a382d2b846972af5676b8e'],
      fullName: "I'mTest",
      email: 'test@test',
      createdAt: '2024-01-14T06:44:34.125Z',
      updatedAt: '2024-01-14T08:32:35.491Z',
    },
    seen: false,
  },
];

export const DefaultOnlineUsers: Story = {
  ...Default.decorators,
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [timer, setTimer] = useState(true);

    setTimeout(() => {
      setTimer(false);
    }, 1000);
    return (
      <>
        <OnlineUsers onlineUsers={users} isLoading={timer} />
        <MessageList messageList={messageList} isLoading={timer} />
      </>
    );
  },
};
