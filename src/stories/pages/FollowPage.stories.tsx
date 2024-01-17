import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';

import Group from '~/common/components/Group';
import LayoutProvider from '~/common/components/Layout';
import Tab from '~/common/components/Tab';
import FollowPage from '~/pages/follow';
import FollowersList from '~/pages/follow/components/FollowersList';
import FollowingList from '~/pages/follow/components/FollowingList';

const queryClient = new QueryClient();

const DUMMY_FOLLOWERS = [
  {
    _id: '65a23bb1baa49b4c9ac12414',
    user: '65a13b3308b4c82383b8b064',
    follower: '65a154d9158cc0250bfa2ede',
    createdAt: '2024-01-13T07:28:49.799Z',
    updatedAt: '2024-01-13T07:28:49.799Z',
  },
  {
    _id: '65a69dbdc0de6862708d930f',
    user: '65a13b3308b4c82383b8b064',
    follower: '65a102084981fe09225620f6',
    createdAt: '2024-01-16T15:16:13.455Z',
    updatedAt: '2024-01-16T15:16:13.455Z',
  },
];
const DUMMY_FOLLOWING = [
  {
    _id: '65a6a2d7c0de6862708d94e5',
    user: '65a0bf05608bb50283c764ec',
    follower: '65a13b3308b4c82383b8b064',
    createdAt: '2024-01-16T15:37:59.797Z',
    updatedAt: '2024-01-16T15:37:59.797Z',
  },
  {
    _id: '65a6a2d8c0de6862708d94f9',
    user: '65a102084981fe09225620f6',
    follower: '65a13b3308b4c82383b8b064',
    createdAt: '2024-01-16T15:38:00.481Z',
    updatedAt: '2024-01-16T15:38:00.481Z',
  },
];
const meta: Meta<typeof FollowPage> = {
  title: 'Pages/Follow',
  component: FollowPage,
  decorators: [
    () => {
      return (
        <QueryClientProvider client={queryClient}>
          <MemoryRouter>
            <LayoutProvider>
              <section className="flex flex-col overflow-hidden">
                <Group
                  spacing={0}
                  direction="columns"
                  grow
                  className="scroll-none flex h-full w-full flex-col overflow-y-auto pb"
                >
                  <Tab className="mb">
                    <Tab.Item title="팔로워" label="팔로워">
                      <FollowersList followers={DUMMY_FOLLOWERS} />
                    </Tab.Item>
                    <Tab.Item title="팔로잉" label="팔로잉">
                      <FollowingList following={DUMMY_FOLLOWING} />
                    </Tab.Item>
                  </Tab>
                </Group>
              </section>
            </LayoutProvider>
          </MemoryRouter>
        </QueryClientProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof FollowPage>;

export const Default: Story = {};
