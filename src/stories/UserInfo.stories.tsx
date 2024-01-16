import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import UserInfo from '~/common/components/UserInfo';

const DUMMY_AUTH_USER = {
  role: 'Regular',
  emailVerified: false,
  banned: false,
  isOnline: true,
  posts: [],
  comments: [],
  followers: [],
  following: [],
  notifications: [],
  messages: ['65a5fd0b8798922817a4bdf5'],
  _id: '65a0bd6a608bb50283c764e2',
};

const DUMMY_POST = {
  likes: [],
  comments: [],
  _id: '65a237d8baa49b4c9ac1225a',
  title:
    '{ "title": "티빙 오리지널 추천해주세요!", "content": "영화 드라마 상관 없습니다~~" }',
  image:
    'https://res.cloudinary.com/learnprogrammers/image/upload/v1705129944/post/26ec4409-a1c0-4311-aa86-52c5ac364a64.jpg',
  imagePublicId: 'post/26ec4409-a1c0-4311-aa86-52c5ac364a64',
  channel: {
    authRequired: false,
    posts: ['65a237d8baa49b4c9ac1225a'],
    _id: '65a0c7214981fe0922561ff0',
    name: '티빙',
    description:
      'data:image/webp;base64,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',
    createdAt: '2024-01-12T04:59:13.646Z',
    updatedAt: '2024-01-13T07:12:24.569Z',
    __v: 0,
  },
  author: {
    role: 'Regular',
    emailVerified: false,
    banned: false,
    isOnline: false,
    posts: ['65a237d8baa49b4c9ac1225a'],
    likes: [],
    comments: [],
    followers: ['65a23bb1baa49b4c9ac12414'],
    following: [
      '65a643f59bb32d3530291de4',
      '65a643f89bb32d3530291df6',
      '65a644b89bb32d3530291e2d',
      '65a644c19bb32d3530291e3a',
    ],
    notifications: [],
    messages: ['65a154d9158cc0250bfa2ede', '65a102084981fe09225620f6'],
    _id: '65a13b3308b4c82383b8b064',
    fullName: 'Hannah',
    email: 'happynet.choi@gmail.com',
    createdAt: '2024-01-12T13:14:27.138Z',
    updatedAt: '2024-01-16T09:00:57.520Z',
    __v: 0,
    username: 'hannah',
    image:
      'https://res.cloudinary.com/learnprogrammers/image/upload/v1705244162/user/ef2ab09b-2e17-4955-9e58-e09a4436c326.jpg',
    imagePublicId: 'user/ef2ab09b-2e17-4955-9e58-e09a4436c326',
    coverImage:
      'https://res.cloudinary.com/learnprogrammers/image/upload/v1705244163/user/272c175b-1622-4b1c-8c45-8704721925d4.jpg',
    coverImagePublicId: 'user/272c175b-1622-4b1c-8c45-8704721925d4',
  },
  createdAt: '2024-01-13T07:12:24.561Z',
  updatedAt: '2024-01-15T17:08:07.097Z',
  __v: 0,
};

const meta = {
  title: 'Common/Components/UserInfo',
  component: UserInfo,
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta<typeof UserInfo>;

export default meta;

export const Default: StoryObj<typeof UserInfo> = {
  args: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    post: DUMMY_POST,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    authUser: DUMMY_AUTH_USER,
  },
};

export const Comment: StoryObj<typeof UserInfo> = {
  args: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    post: DUMMY_POST,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    authUser: DUMMY_AUTH_USER,
  },
};
