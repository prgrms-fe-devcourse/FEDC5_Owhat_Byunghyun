import type { Meta, StoryObj } from '@storybook/react';

import Like from '~/common/components/Like';

const meta: Meta<typeof Like> = {
  title: 'Common/Components/Like',
  component: Like,
  argTypes: {
    onClick: { action: 'onClick', control: 'function' },
  },
};
export default meta;

type Story = StoryObj<typeof Like>;

export const Default: Story = {};
