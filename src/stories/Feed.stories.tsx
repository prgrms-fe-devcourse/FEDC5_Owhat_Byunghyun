import type { Meta, StoryObj } from '@storybook/react';

import Feed from '~/common/components/Feed';

const meta: Meta<typeof Feed> = {
  title: 'Common/Components/Feed',
  component: Feed,
};
export default meta;

type Story = StoryObj<typeof Feed>;

export const Default: Story = {
  args: {
    initialState: false,
    title: '제목',
    image:
      'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80',
    body: '내용입니다.',
    likes: ['좋아요1', '좋아요2'],
    comments: ['댓글1', '댓글2', '댓글3'],
    imgAspect: true,
  },
  render: args => <Feed {...args}></Feed>,
};

export const Detail: Story = {
  args: {
    initialState: false,
    title: '제목',
    image:
      'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80',
    body: '내용입니다.',
    likes: ['좋아요1', '좋아요2'],
    comments: ['댓글1', '댓글2', '댓글3'],
    imgAspect: false,
  },
  render: args => <Feed {...args}></Feed>,
};

export const Liked: Story = {
  args: {
    initialState: true,
    title: '제목',
    image:
      'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80',
    body: '내용입니다.',
    likes: ['좋아요1', '좋아요2', '내가 누른 좋아요'],
    comments: ['댓글1', '댓글2', '댓글3'],
  },
  render: args => <Feed {...args}></Feed>,
};
