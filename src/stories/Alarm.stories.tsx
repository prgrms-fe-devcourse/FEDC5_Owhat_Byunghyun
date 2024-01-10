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
const comment = '넷플릭스 오리지널 추천해주세요!';
const follow = {
  _id: 'id',
  user: 'user',
  follower: 'follower',
  createdAt: '2024-01-03T14:42:48.710Z',
  updatedAt: '2024-01-03T14:42:48.710Z',
  __v: 0,
};
const like = '넷플릭스 오리지널 추천해주세요!';
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

export const CommentType: Story = {
  args: { username, comment },
};

export const FollowType: Story = {
  args: { username, follow },
};

export const LikeType: Story = {
  args: { username, like },
};

export const MessageType: Story = {
  args: { username, message },
};
