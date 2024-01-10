import { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';

import LayoutProvider from '~/common/components/Layout';
import register from '~/pages/register';

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
  title: 'Pages/RegisterPage',
  component: register,
  argTypes: {},
  args: {},
  decorators: Story => (
    <QueryClientProvider client={queryClient}>
      <LayoutProvider>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </LayoutProvider>
    </QueryClientProvider>
  ),
} satisfies Meta<typeof register>;

type Story = StoryObj<typeof register>;

export const Default: Story = {};
