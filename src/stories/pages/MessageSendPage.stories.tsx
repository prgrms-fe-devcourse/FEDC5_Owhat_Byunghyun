/* eslint-disable react-hooks/rules-of-hooks */
import { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { MemoryRouter } from 'react-router-dom';

import Button from '~/common/components/Button';
import Input from '~/common/components/Input';
import LayoutProvider from '~/common/components/Layout';
import useLayout from '~/common/hooks/useLayout';
import MessageSendPage from '~/pages/messageSend';
import MessageSendList from '~/pages/messageSend/components/MessageSendList';

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
  title: 'Pages/MessageSend',
  component: MessageSendPage,
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
} satisfies Meta<typeof MessageSendPage>;

type Story = StoryObj<typeof MessageSendPage>;

export const Default: Story = {};

export const WithMessageList: Story = {
  render: () => {
    const { changeBottomNavigator } = useLayout();

    useEffect(() => {
      changeBottomNavigator(false);
    }, []);

    return (
      <section>
        <MessageSendList messageListByUserId={messageList} user={undefined} />

        <form
          onSubmit={e => {
            e.preventDefault();
          }}
          className="fixed bottom-0 left-0 flex w-full border-t border-t-gray-300 px-1 py-2"
        >
          <Input name="message" className="w-full rounded-none border-none" />
          <Button className="shrink-0">전송</Button>
        </form>
      </section>
    );
  },
};

const messageList = [
  {
    seen: false,
    _id: '65a4991b1ca61418208f9d49',
    message: '메시지입니다!',
    sender: {
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
      messages: [
        '65a382d2b846972af5676b8e',
        '65a382d2b846972af5676b8e',
        '65a0bf05608bb50283c764ec',
      ],
      _id: '65a382d2b846972af5676b8e',
      fullName: "I'mTest",
      email: 'test@test',
      createdAt: '2024-01-14T06:44:34.125Z',
      updatedAt: '2024-01-15T13:45:36.438Z',
      __v: 0,
    },
    receiver: {
      role: 'Regular',
      emailVerified: false,
      banned: false,
      isOnline: false,
      posts: [],
      likes: [],
      comments: [],
      followers: ['65a0ebee4981fe09225620b9', '65a506bd7dc2e655d1ef4066'],
      following: [],
      notifications: [],
      messages: ['65a382d2b846972af5676b8e'],
      _id: '65a0bf05608bb50283c764ec',
      fullName: '아테스형',
      email: 'test22@naver.com',
      createdAt: '2024-01-12T04:24:37.490Z',
      updatedAt: '2024-01-15T10:19:41.675Z',
      __v: 0,
      username: '아테스형',
      image:
        'https://res.cloudinary.com/learnprogrammers/image/upload/v1705282370/user/2ccd2dc6-64b7-41e9-a22e-8bbffb8d6f8b.png',
      imagePublicId: 'user/2ccd2dc6-64b7-41e9-a22e-8bbffb8d6f8b',
      coverImage:
        'https://res.cloudinary.com/learnprogrammers/image/upload/v1705282404/user/d86d75f9-1398-4940-9825-515d3a158ec3.jpg',
      coverImagePublicId: 'user/d86d75f9-1398-4940-9825-515d3a158ec3',
    },
    createdAt: '2024-01-15T02:31:55.356Z',
    updatedAt: '2024-01-15T02:31:55.356Z',
    __v: 0,
  },
  {
    seen: false,
    _id: '65a499271ca61418208f9d51',
    message: '거기 테스형 계신가요??',
    sender: {
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
      messages: [
        '65a382d2b846972af5676b8e',
        '65a382d2b846972af5676b8e',
        '65a0bf05608bb50283c764ec',
      ],
      _id: '65a382d2b846972af5676b8e',
      fullName: "I'mTest",
      email: 'test@test',
      createdAt: '2024-01-14T06:44:34.125Z',
      updatedAt: '2024-01-15T13:45:36.438Z',
      __v: 0,
    },
    receiver: {
      role: 'Regular',
      emailVerified: false,
      banned: false,
      isOnline: false,
      posts: [],
      likes: [],
      comments: [],
      followers: ['65a0ebee4981fe09225620b9', '65a506bd7dc2e655d1ef4066'],
      following: [],
      notifications: [],
      messages: ['65a382d2b846972af5676b8e'],
      _id: '65a0bf05608bb50283c764ec',
      fullName: '아테스형',
      email: 'test22@naver.com',
      createdAt: '2024-01-12T04:24:37.490Z',
      updatedAt: '2024-01-15T10:19:41.675Z',
      __v: 0,
      username: '아테스형',
      image:
        'https://res.cloudinary.com/learnprogrammers/image/upload/v1705282370/user/2ccd2dc6-64b7-41e9-a22e-8bbffb8d6f8b.png',
      imagePublicId: 'user/2ccd2dc6-64b7-41e9-a22e-8bbffb8d6f8b',
      coverImage:
        'https://res.cloudinary.com/learnprogrammers/image/upload/v1705282404/user/d86d75f9-1398-4940-9825-515d3a158ec3.jpg',
      coverImagePublicId: 'user/d86d75f9-1398-4940-9825-515d3a158ec3',
    },
    createdAt: '2024-01-15T02:32:07.193Z',
    updatedAt: '2024-01-15T02:32:07.193Z',
    __v: 0,
  },
  {
    seen: false,
    _id: '65a499b71ca61418208f9d5a',
    message: '거기 테스형 계신가요??',
    sender: {
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
      messages: [
        '65a382d2b846972af5676b8e',
        '65a382d2b846972af5676b8e',
        '65a0bf05608bb50283c764ec',
      ],
      _id: '65a382d2b846972af5676b8e',
      fullName: "I'mTest",
      email: 'test@test',
      createdAt: '2024-01-14T06:44:34.125Z',
      updatedAt: '2024-01-15T13:45:36.438Z',
      __v: 0,
    },
    receiver: {
      role: 'Regular',
      emailVerified: false,
      banned: false,
      isOnline: false,
      posts: [],
      likes: [],
      comments: [],
      followers: ['65a0ebee4981fe09225620b9', '65a506bd7dc2e655d1ef4066'],
      following: [],
      notifications: [],
      messages: ['65a382d2b846972af5676b8e'],
      _id: '65a0bf05608bb50283c764ec',
      fullName: '아테스형',
      email: 'test22@naver.com',
      createdAt: '2024-01-12T04:24:37.490Z',
      updatedAt: '2024-01-15T10:19:41.675Z',
      __v: 0,
      username: '아테스형',
      image:
        'https://res.cloudinary.com/learnprogrammers/image/upload/v1705282370/user/2ccd2dc6-64b7-41e9-a22e-8bbffb8d6f8b.png',
      imagePublicId: 'user/2ccd2dc6-64b7-41e9-a22e-8bbffb8d6f8b',
      coverImage:
        'https://res.cloudinary.com/learnprogrammers/image/upload/v1705282404/user/d86d75f9-1398-4940-9825-515d3a158ec3.jpg',
      coverImagePublicId: 'user/d86d75f9-1398-4940-9825-515d3a158ec3',
    },
    createdAt: '2024-01-15T02:34:31.290Z',
    updatedAt: '2024-01-15T02:34:31.290Z',
    __v: 0,
  },
];
