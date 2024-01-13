import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';

import LayoutProvider from '~/common/components/Layout';
import NotificationPage from '~/pages/notification';

const queryClient = new QueryClient();

const meta: Meta<typeof NotificationPage> = {
  title: 'Pages/Notification',
  component: NotificationPage,
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

type Story = StoryObj<typeof NotificationPage>;

export const Default: Story = {};
