import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import UserInfo from '~/common/components/UserInfo';

const meta = {
  title: 'Common/Components/UserInfo',
  component: UserInfo,
  argTypes: {
    _id: { control: 'text' },
    author: { control: 'text' },
    channel: { control: 'text' },
  },
  args: {
    createdAt: '2021-10-15T20:48:19.816Z',
  },
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
    _id: '12315613213',
    author: '홍길동',
    channel: '넷플릭스',
  },
};

export const Comment: StoryObj<typeof UserInfo> = {
  args: {
    _id: '1234567890',
    author: '홍길동',
  },
};
