import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Follow } from '~/api/types/userTypes';
import Group from '~/common/components/Group';
import LayoutProvider from '~/common/components/Layout';
import Tab from '~/common/components/Tab';
import FollowPage from '~/pages/follow';
import FollowersList from '~/pages/follow/components/FollowersList';
import FollowingList from '~/pages/follow/components/FollowingList';

const queryClient = new QueryClient();

const DUMMY_FOLLOWERS = [
  {
    _id: '65a0ebee4981fe09225620b9',
    user: '65a0bf05608bb50283c764ec',
    follower: '65a0ebd84981fe09225620b4',
    createdAt: '2024-01-12T07:36:14.853Z',
    updatedAt: '2024-01-12T07:36:14.853Z',
    __v: 0,
  },
];
const DUMMY_FOLLOWING: Follow[] = [];

const meta: Meta<typeof FollowPage> = {
  title: 'Pages/Follow',
  component: FollowPage,
  decorators: [
    () => {
      const [isFollowing, setIsFollowing] = useState(false);

      const [followData, setFollowData] = useState<Follow[]>(DUMMY_FOLLOWERS);

      useEffect(() => {
        isFollowing
          ? setFollowData(DUMMY_FOLLOWING)
          : setFollowData(DUMMY_FOLLOWERS);
      }, [isFollowing]);

      return (
        <QueryClientProvider client={queryClient}>
          <MemoryRouter>
            <LayoutProvider>
              <section className="flex flex-col overflow-hidden">
                <Group
                  spacing={0}
                  direction={'columns'}
                  grow
                  className="scroll-none flex h-full w-full flex-col overflow-y-auto pb"
                >
                  <Tab
                    activeLabel={isFollowing ? '팔로잉' : '팔로워'}
                    onClick={() => setIsFollowing(prev => !prev)}
                  >
                    <Tab.Item title="팔로워" label="팔로워"></Tab.Item>
                    <Tab.Item title="팔로잉" label="팔로잉"></Tab.Item>
                  </Tab>
                  {isFollowing ? (
                    <FollowingList following={followData} />
                  ) : (
                    <FollowersList followers={followData} />
                  )}
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
