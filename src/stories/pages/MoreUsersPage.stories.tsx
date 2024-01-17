import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';

import LayoutProvider from '~/common/components/Layout';
import MoreUsersPage from '~/pages/moreUsers';

const queryClient = new QueryClient();

const meta: Meta<typeof MoreUsersPage> = {
  title: 'Pages/MoreUsers',
  component: MoreUsersPage,
  decorators: Story => (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <LayoutProvider>
          <Story />
        </LayoutProvider>
      </MemoryRouter>
    </QueryClientProvider>
  ),
};

export default meta;

type Story = StoryObj<typeof MoreUsersPage>;

export const Default: Story = {};
