import type { Meta, StoryObj } from '@storybook/react';

import Textarea from '~/common/components/Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Common/Components/Textarea',
  component: Textarea,
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    size: 'sm',
    placeholder: 'Textarea 컴포넌트',
    required: false,
    disabled: false,
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'lg'],
    },
    placeholder: { control: 'text' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  render: args => {
    return (
      <>
        <Textarea {...args} />
        <Textarea placeholder="메시지 보내기" className="bg-gray-100" />
        <Textarea placeholder="댓글을 등록하려면 로그인 해야합니다." disabled />
        <Textarea placeholder="댓글을 입력하세요." className="bg-gray-100" />
        <Textarea
          size="lg"
          placeholder="내용을 입력하세요"
          className="bg-gray-100"
        />
      </>
    );
  },
};
