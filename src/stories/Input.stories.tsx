import { Meta, StoryObj } from '@storybook/react';

import Input from '~/common/components/Input';

const meta = {
  title: 'Common/Components/Input',
  component: Input,
  argTypes: {
    onChange: { action: 'onChange', control: 'function' },
    placeholder: { control: 'text' },
    hasBorder: { control: 'boolean' },
    isBottomBorderOnly: { control: 'boolean' },
  },
  parameters: {
    actions: {
      handles: ['onChange'],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

export const InputExample: StoryObj<typeof Input> = {
  args: {
    hasBorder: false,
    isBottomBorderOnly: false,
  },
};
