import { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';

import RegisterForm from '~/pages/register/components/RegisterForm';

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
  title: 'Common/Components/RegisterForm',
  component: RegisterForm,
  argTypes: {},
  args: {},
  decorators: Story => (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    </QueryClientProvider>
  ),
} satisfies Meta<typeof RegisterForm>;

type Story = StoryObj<typeof RegisterForm>;

export const Default: Story = {};
