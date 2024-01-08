import type { Meta, StoryObj } from '@storybook/react';

import Feed from '~/common/components/Feed';

const meta: Meta<typeof Feed> = {
  title: 'Common/Components/Feed',
  component: Feed,
};
export default meta;

type Story = StoryObj<typeof Feed>;

export const Default: Story = {
  argTypes: {
    title: {
      options: { title0: '제목0', title1: '제목1', title2: '제목2' },
      control: 'inline-radio',
    },
    image: {
      options: {
        image0: 'https://picsum.photos/200',
        image1:
          'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80',
        image2:
          'https://cdn.pixabay.com/photo/2016/03/27/07/32/clouds-1282314_1280.jpg',
      },
      control: 'inline-radio',
    },
    body: {
      options: { body0: '글0', body1: '글1', body2: '글2' },
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
    likes: [{ user0: ['user1', 'user2', 'user3'] }],
    comments: [{ user0: ['댓글1', '댓글2'] }],
  },
};
