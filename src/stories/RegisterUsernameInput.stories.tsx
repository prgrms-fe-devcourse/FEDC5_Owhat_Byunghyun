import { Meta, StoryObj } from '@storybook/react';

import UsernameInput from '~/pages/RegisterPage/components/UsernameInput';

export default {
  title: 'Common/Components/UsernameInput',
  component: UsernameInput,
  argTypes: {},
  args: {},
} satisfies Meta<typeof UsernameInput>;

type Story = StoryObj<typeof UsernameInput>;

export const Default: Story = {};
