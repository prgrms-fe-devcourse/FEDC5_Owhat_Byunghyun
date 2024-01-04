import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import UserInfo from '~/common/components/UserInfo';

const meta = {
  title: 'Common/Components/UserInfo',
  component: UserInfo,
} as Meta<typeof UserInfo>;

export default meta;

export const Default: StoryObj<typeof UserInfo> = {
  render: () => (
    <MemoryRouter>
      <UserInfo
        _id="12345"
        author="고양이"
        channel="넷플릭스"
        createdAt="2021-10-15T20:48:19.816Z"
      />
    </MemoryRouter>
  ),
};

export const Comment: StoryObj<typeof UserInfo> = {
  render: () => (
    <MemoryRouter>
      <UserInfo
        _id="12345"
        author="김철수"
        createdAt="2021-10-15T20:48:19.816Z"
      />
    </MemoryRouter>
  ),
};
