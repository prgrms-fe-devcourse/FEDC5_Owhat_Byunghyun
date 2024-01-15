import { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';

import LayoutProvider from '~/common/components/Layout';
import LoginPage from '~/pages/login';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 5,
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
});

export default {
  title: 'Pages/LoginPage',
  component: LoginPage,
  argTypes: {},
  args: {},
  decorators: Story => (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <LayoutProvider>
          <Story />
        </LayoutProvider>
      </MemoryRouter>
    </QueryClientProvider>
  ),
} satisfies Meta<typeof LoginPage>;

type Story = StoryObj<typeof LoginPage>;

export const Default: Story = {};
