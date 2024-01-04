import { Meta, StoryObj } from '@storybook/react';

import Alarm from '~/common/components/Alarm';
import Group from '~/common/components/Group';

const meta: Meta<typeof Alarm> = {
  title: 'Common/Components/Alarm',
  component: Alarm,
};
export default meta;

type Story = StoryObj<typeof Alarm>;

const username = '오왓';

const comment = {
  _id: 'id',
  comment: '경성크리처 추천!!',
  author: 'author',
  post: {
    likes: [],
    comments: ['comment'],
    _id: 'id',
    title: '넷플릭스 오리지널 추천해주세요!',
    channel: 'channel',
    author: 'author',
    createdAt: '2024-01-03T05:20:54.773Z',
    updatedAt: '2024-01-03T05:23:37.555Z',
    __v: 0,
  },
  createdAt: '2024-01-03T05:23:37.550Z',
  updatedAt: '2024-01-03T05:23:37.550Z',
  __v: 0,
};

const follow = {
  _id: 'id',
  user: 'user',
  follower: 'follower',
  createdAt: '2024-01-03T14:42:48.710Z',
  updatedAt: '2024-01-03T14:42:48.710Z',
  __v: 0,
};

const like = {
  _id: 'id',
  user: 'user',
  post: {
    likes: ['like'],
    comments: ['comment'],
    _id: 'id',
    title: '넷플릭스 오리지널 추천해주세요!',
    channel: 'channel',
    author: 'author',
    createdAt: '2024-01-03T05:20:54.773Z',
    updatedAt: '2024-01-03T05:28:51.918Z',
    __v: 0,
  },
  createdAt: '2024-01-03T05:28:51.915Z',
  updatedAt: '2024-01-03T05:28:51.915Z',
  __v: 0,
};

const message = 'message';

export const Default: Story = {
  render: () => {
    return (
      <Group direction="columns" spacing={5}>
        <Alarm username={username} comment={comment}></Alarm>
        <Alarm username={username} follow={follow}></Alarm>
        <Alarm username={username} like={like}></Alarm>
        <Alarm username={username} message={message}></Alarm>
      </Group>
    );
  },
};

export const Comment: Story = {
  args: { username, comment },
};

export const Follow: Story = {
  args: { username, follow },
};

export const Like: Story = {
  args: { username, like },
};

export const Message: Story = {
  args: { username, message },
};
