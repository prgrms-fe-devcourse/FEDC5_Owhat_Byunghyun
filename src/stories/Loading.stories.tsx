import type { Meta, StoryObj } from '@storybook/react';

import Loading from '~/components/common/Loading';

const meta: Meta<typeof Loading> = {
  title: 'Components/Common/Loading',
  component: Loading,
};
export default meta;

type Story = StoryObj<typeof Loading>;

export const Example: Story = {
  argTypes: {
    className: { control: 'text' },
  },
};
