import { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';

import LayoutProvider from '~/common/components/Layout';
import { OWHAT_TOKEN } from '~/constants/token';
import AccountPage from '~/pages/account';
import { BrowserStorage } from '~/utils/storage';

const queryClient = new QueryClient();

const myStorage = new BrowserStorage<string>(OWHAT_TOKEN);
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY1YTBiZjA1NjA4YmI1MDI4M2M3NjRlYyIsImVtYWlsIjoidGVzdDIyQG5hdmVyLmNvbSJ9LCJpYXQiOjE3MDUyMDk0OTN9.Mf463MDLiudUfEmc0--aTJdgp2qlj0v3Dc_HverPdWM';
myStorage.set(TOKEN);

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
