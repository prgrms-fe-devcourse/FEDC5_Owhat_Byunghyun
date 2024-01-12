import { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';

import LayoutProvider from '~/common/components/Layout';
import AccountPage from '~/pages/account';

const queryClient = new QueryClient();

// localstorage에 'OWHAT_TOKEN'을 추가하여야 미리보기가 가능합니다.
const meta = {
  title: 'Pages/AccountPage',
  component: AccountPage,
  decorators: Story => (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <LayoutProvider>
          <Story />
        </LayoutProvider>
      </MemoryRouter>
    </QueryClientProvider>
  ),
} satisfies Meta<typeof AccountPage>;

export default meta;

export const Default: StoryObj<typeof AccountPage> = {};
