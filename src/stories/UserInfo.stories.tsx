import type { Meta, StoryObj } from '@storybook/react';

import UserInfo from '~/common/components/UserInfo';

const meta = {
  title: 'Common/Components/UserInfo',
  component: UserInfo,
} as Meta<typeof UserInfo>;

export default meta;

export const Default: StoryObj<typeof UserInfo> = {
  render: () => (
    <UserInfo
      _id="12345"
      author="고양이"
      channel="넷플릭스"
      createdAt="2021-10-15T20:48:19.816Z"
    />
  ),
};

export const Comment: StoryObj<typeof UserInfo> = {
  render: () => (
    <UserInfo
      _id="12345"
      author="김철수"
      createdAt="2021-10-15T20:48:19.816Z"
    />
  ),
};
