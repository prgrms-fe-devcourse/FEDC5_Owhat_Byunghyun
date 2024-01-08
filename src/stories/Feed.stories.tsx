import type { Meta, StoryObj } from '@storybook/react';

import Feed from '~/common/components/Feed';

const meta: Meta<typeof Feed> = {
  title: 'Common/Components/Feed',
  component: Feed,
  argTypes: {
    initialState: { active: { control: 'boolean' } },
  },
};
export default meta;

type Story = StoryObj<typeof Feed>;

export const Default: Story = {
  args: {
    initialState: false,
    title: '제목',
    image:
      'https://cdn.pixabay.com/photo/2016/03/27/07/32/clouds-1282314_1280.jpg',
    body: '내용입니다.',
    likes: ['좋아요1', '좋아요2'],
    comments: ['댓글1', '댓글2', '댓글3'],
  },
  render: args => <Feed {...args}></Feed>,
};
