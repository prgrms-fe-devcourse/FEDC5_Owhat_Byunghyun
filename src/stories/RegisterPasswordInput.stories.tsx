import { Meta, StoryObj } from '@storybook/react';

import PasswordInput from '~/pages/register/components/PasswordInput';

export default {
  title: 'Common/Components/PasswordInput',
  component: PasswordInput,
  argTypes: {},
  args: {},
} satisfies Meta<typeof PasswordInput>;

type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {};
