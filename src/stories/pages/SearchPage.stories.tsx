import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';

import LayoutProvider from '~/common/components/Layout';
import SearchPage from '~/pages/search';

const queryClient = new QueryClient();

const meta: Meta<typeof SearchPage> = {
  title: 'Pages/Search',
  component: SearchPage,
  decorators: [
    Story => (
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <LayoutProvider>
            <Story />
          </LayoutProvider>
        </MemoryRouter>
      </QueryClientProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SearchPage>;

export const Default: Story = {};
