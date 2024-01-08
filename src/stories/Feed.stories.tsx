import type { Meta, StoryObj } from '@storybook/react';

import Feed from '~/common/components/Feed';

const meta: Meta<typeof Feed> = {
  title: 'Common/Components/Feed',
  component: Feed,
  argTypes: {
    title: {
      options: ['제목0', '제목1', '제목2'],
      control: 'inline-radio',
    },
    image: {
      options: [
        'https://picsum.photos/200',
        'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80',
        'https://cdn.pixabay.com/photo/2016/03/27/07/32/clouds-1282314_1280.jpg',
      ],
      control: 'inline-radio',
    },
    body: {
      options: ['내용입니다0', '내용입니다1', '내용입니다2'],
      control: 'inline-radio',
    },
    likes: {
      options: {
        user0: ['user1'],
        user1: ['user1', 'user2'],
      },
      control: 'inline-radio',
    },
    comments: {
      options: {
        user0: ['댓글1', '댓글2'],
        user1: ['댓글1', '댓글2', '댓글3'],
      },
      control: 'inline-radio',
    },
  },
  args: {
    title: '제목0',
    image:
      'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80',
    body: '내용입니다.',
    likes: [{ user0: ['user1'] }],
    comments: [{ user0: ['댓글1', '댓글2'] }],
  },
};
export default meta;

type Story = StoryObj<typeof Feed>;

export const Default: Story = {
  render: args => <Feed {...args}></Feed>,
};
