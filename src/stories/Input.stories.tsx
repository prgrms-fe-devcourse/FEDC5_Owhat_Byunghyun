import { Meta, StoryObj } from '@storybook/react';

import Input from '~/components/common/Input';

const meta = {
  title: 'Common/Components/Input',
  component: Input,
  argTypes: {
    onChange: { action: 'onChangeFunc', control: 'function' },
    placeholder: { control: 'text' },
    isBorderNone: { control: 'boolean' },
    isBottomBorderOnly: { control: 'boolean' },
  },
  parameters: {
    actions: {
      handles: ['onChangeFunc'],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

export const InputExample: StoryObj<typeof Input> = {
  args: {
    onChange: event => {
      event.target.value;
    },
    borderColor: 'default',
    outlineColor: 'default',
    placeholder: '내용을 입력해주세요.',
    isBorderNone: false,
  },
  render: args => <Input {...args} />,
};
