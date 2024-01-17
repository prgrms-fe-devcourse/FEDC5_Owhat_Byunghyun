import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';

import LayoutProvider from '~/common/components/Layout';
import AccountEditPage from '~/pages/accountEdit';
import AccountEditForm from '~/pages/accountEdit/components/AccountEditForm';

const queryClient = new QueryClient();

const DUMMY_AUTH_USER = {
  role: 'Regular',
  emailVerified: false,
  banned: false,
  isOnline: true,
  posts: [],
  likes: [],
  comments: [],
  followers: [],
  notifications: [],
  messages: [],
  _id: '65a0bd6a608bb50283c764e2',
  fullName: '주디야놀자',
  email: 'judi@naver.com',
  createdAt: '2024-01-12T04:17:46.289Z',
  updatedAt: '2024-01-16T09:44:38.015Z',
  __v: 0,
  username: '주디야놀자',
  coverImage:
    'https://res.cloudinary.com/learnprogrammers/image/upload/v1705396072/user/cf582ee2-6c5b-406e-ae25-70ec5b553fb3.png',
  coverImagePublicId: 'user/cf582ee2-6c5b-406e-ae25-70ec5b553fb3',
  image:
    'https://res.cloudinary.com/learnprogrammers/image/upload/v1705396072/user/5c35a2de-a15b-4b61-be8c-820164692c1f.png',
  imagePublicId: 'user/5c35a2de-a15b-4b61-be8c-820164692c1f',
};

const meta: Meta<typeof AccountEditPage> = {
  title: 'Pages/AccountEdit',
  component: AccountEditForm,
  decorators: Story => (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <LayoutProvider>
          <Story />
        </LayoutProvider>
      </MemoryRouter>
    </QueryClientProvider>
  ),
};
export default meta;

type Story = StoryObj<typeof AccountEditPage>;

export const Default: Story = {
  args: {
    authUser: DUMMY_AUTH_USER,
  },
};
