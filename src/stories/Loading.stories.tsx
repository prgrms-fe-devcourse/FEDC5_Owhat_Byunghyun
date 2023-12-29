import type { Meta, StoryObj } from '@storybook/react';

import Loading from '~/common/components/Loading';

const meta: Meta<typeof Loading> = {
  title: 'Common/Components/Loading',
  component: Loading,
};
export default meta;

type Story = StoryObj<typeof Loading>;

export const Example: Story = {
  argTypes: {
    className: { control: 'text' },
  },
};
