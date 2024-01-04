import type { Meta, StoryObj } from '@storybook/react';

import ExtraInfo from '~/common/components/ExtraInfo';

const meta = {
  title: 'Common/Components/ExtraInfo',
  component: ExtraInfo,
  argTypes: {
    gap: { control: { type: 'range', min: 0, max: 5, step: 1 } },
  },
  args: {
    gap: 1,
  },
} satisfies Meta<typeof ExtraInfo>;

export default meta;

export const Default: StoryObj<typeof ExtraInfo> = {
  render: args => (
    <ExtraInfo {...args}>
      <span>넷플릭스</span>
      <span>19시간 전</span>
    </ExtraInfo>
  ),
};

export const Array: StoryObj<typeof ExtraInfo> = {
  render: args => (
    <ExtraInfo {...args}>
      <span>게시물 10</span>
      <span>팔로워 10</span>
      <span>팔로잉 10</span>
    </ExtraInfo>
  ),
};
