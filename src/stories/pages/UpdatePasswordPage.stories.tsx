import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';

import LayoutProvider from '~/common/components/Layout';
import AccountPage from '~/pages/account';
import AccountEditPage from '~/pages/accountEdit';
import UpdatePasswordForm from '~/pages/updatePassword/components/UpdatePasswordForm';

const queryClient = new QueryClient();

const meta: Meta<typeof AccountEditPage> = {
  title: 'Pages/UpdatePassword',
  component: UpdatePasswordForm,
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

type Story = StoryObj<typeof AccountPage>;

export const Default: Story = {};
