import { Meta, StoryObj } from '@storybook/react';

import PasswordInput from '~/pages/RegisterPage/components/PasswordInput';

export default {
  title: 'Common/Components/PasswordInput',
  component: PasswordInput,
  argTypes: {},
  args: {},
} satisfies Meta<typeof PasswordInput>;

type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {};
