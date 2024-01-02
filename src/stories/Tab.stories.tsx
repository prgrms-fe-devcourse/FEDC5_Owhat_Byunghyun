import type { Meta, StoryObj } from '@storybook/react';

import Tab from '~/common/components/Tab';

const meta: Meta<typeof Tab> = {
  title: 'Common/Components/Tab',
  component: Tab,
};

export default meta;

type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  render: () => {
    return (
      <>
        <Tab>
          <Tab.Item title="Item 1" label="item1">
            Content 1
          </Tab.Item>
          <Tab.Item title="Item 2" label="item2">
            Content 2
          </Tab.Item>
        </Tab>
      </>
    );
  },
};
