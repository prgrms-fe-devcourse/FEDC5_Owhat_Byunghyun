import { Meta, StoryObj } from '@storybook/react';

import EmailInput from '~/pages/register/components/EmailInput';

export default {
  title: 'Common/Components/EmailInput',
  component: EmailInput,
  argTypes: {},
  args: {},
} satisfies Meta<typeof EmailInput>;

type Story = StoryObj<typeof EmailInput>;

export const Default: Story = {};
