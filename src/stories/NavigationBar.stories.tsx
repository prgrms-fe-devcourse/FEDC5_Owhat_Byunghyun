import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import NavigationBar from '~/common/components/NavigationBar';

const meta: Meta<typeof NavigationBar> = {
  title: 'Common/Components/NavigationBar',
  component: NavigationBar,
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof NavigationBar>;

export const Example: Story = {
  argTypes: {
    className: { control: 'text' },
  },
};
