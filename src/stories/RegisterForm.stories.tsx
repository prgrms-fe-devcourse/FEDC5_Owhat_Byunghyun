import { Meta, StoryObj } from '@storybook/react';

import RegisterForm from '~/pages/RegisterPage/components/RegisterForm';

export default {
  title: 'Common/Components/RegisterForm',
  component: RegisterForm,
  argTypes: {},
  args: {},
} satisfies Meta<typeof RegisterForm>;

type Story = StoryObj<typeof RegisterForm>;

export const Default: Story = {};
