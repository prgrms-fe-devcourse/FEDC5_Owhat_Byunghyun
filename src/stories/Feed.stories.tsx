import type { Meta, StoryObj } from '@storybook/react';

import Feed from '~/common/components/Feed';

type prefixType = '좋아요' | '댓글';

function generateArray(prefix: prefixType, length: number) {
  return new Array(length).fill('').map((_, index) => String(prefix + index));
}

const longLikesArray = generateArray('좋아요', 100);
const shortLikesArray = generateArray('좋아요', 5);
const emptyLikesArray = generateArray('좋아요', 0);

const longCommentsArray = generateArray('댓글', 100);
const shortCommentsArray = generateArray('댓글', 5);
const emptyCommentsArray = generateArray('댓글', 0);

const meta: Meta<typeof Feed> = {
  title: 'Common/Components/Feed',
  component: Feed,
};
export default meta;

type Story = StoryObj<typeof Feed>;

export const Default: Story = {
  argTypes: {
    comments: {
      options: [longCommentsArray, shortCommentsArray, emptyCommentsArray],
      control: 'radio',
    },
    likes: {
      options: [longLikesArray, shortLikesArray, emptyLikesArray],
      control: 'radio',
    },
  },
  args: {
    initialState: false,
    title:
      '{"title" : "메인, 마이 페이지, 상대방 마이 페이지의 피드 / 메인, 마이 페이지, 상대방 마이 페이지의 피드 / 메인, 마이 페이지, 상대방 마이 페이지의 피드", "content":"메인, 마이 페이지, 상대방 마이 페이지의 피드의 내용입니다.. 이미지를 16:9 비율로 맞춰 출력합니다. 글의 제목과 내용이 길 경우 말줄임표(...) 처리를 해줍니다. 확인을 위해 여러번 작성해 줍니다. 메인, 마이 페이지, 상대방 마이 페이지의 피드의 내용입니다.. 이미지를 16:9 비율로 맞춰 출력합니다. 글의 제목과 내용이 길 경우 말줄임표(...) 처리를 해줍니다. 확인을 위해 여러번 작성해 줍니다."}',
    image:
      'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80',
    likes: longCommentsArray,
    comments: longLikesArray,
    imgAspect: true,
    textOverflow: true,
  },
  render: args => <Feed {...args}></Feed>,
};

export const Detail: Story = {
  args: {
    initialState: false,
    title:
      '{"title" : "메인, 마이 페이지, 상대방 마이 페이지의 피드 / 메인, 마이 페이지, 상대방 마이 페이지의 피드 / 메인, 마이 페이지, 상대방 마이 페이지의 피드", "content":"메인, 마이 페이지, 상대방 마이 페이지의 피드의 내용입니다.. 이미지를 16:9 비율로 맞춰 출력합니다. 글의 제목과 내용이 길 경우 말줄임표(...) 처리를 해줍니다. 확인을 위해 여러번 작성해 줍니다. 메인, 마이 페이지, 상대방 마이 페이지의 피드의 내용입니다.. 이미지를 16:9 비율로 맞춰 출력합니다. 글의 제목과 내용이 길 경우 말줄임표(...) 처리를 해줍니다. 확인을 위해 여러번 작성해 줍니다."}',

    image:
      'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80',

    likes: ['좋아요1', '좋아요2'],
    comments: ['댓글1', '댓글2', '댓글3'],
    imgAspect: false,
    textOverflow: false,
  },
  render: args => <Feed {...args}></Feed>,
};

export const Liked: Story = {
  args: {
    initialState: true,
    title:
      '{"title":"좋아요를 누른 피드", "content":"좋아요를 누른 피드의 내용입니다.."}',
    image:
      'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80',
    likes: ['좋아요1', '좋아요2', '내가 누른 좋아요'],
    comments: ['댓글1', '댓글2', '댓글3'],
  },
  render: args => <Feed {...args}></Feed>,
};
