import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';

import LayoutProvider from '~/common/components/Layout';
import HomePage from '~/pages/home';
import FeedItem from '~/pages/home/components/FeedItem';

const queryClient = new QueryClient();

const meta: Meta<typeof HomePage> = {
  title: 'Pages/Home',
  component: HomePage,
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

type Story = StoryObj<typeof HomePage>;

export const Default: Story = {};

export const Scroll: Story = {
  render: () => {
    return (
      <section>
        <ul className="scroll-none flex h-full w-full flex-col gap-12 overflow-y-auto">
          {Array.from({ length: 20 }, (_, v) => (
            <FeedItem
              feed={{
                _id: v.toString(),
                title: 'title',
                comments: [],
                likes: [],
                image: `https://picsum.photos/id/1${v}/200/300`,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                channel: '',
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                author: '',
                createdAt: '2024-01-15T05:33:33.552Z',
                updatedAt: '2024-01-15T05:33:33.552Z',
              }}
            />
          ))}
        </ul>
      </section>
    );
  },
};
