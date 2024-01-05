import { Meta, StoryObj } from '@storybook/react';

import Divider from '~/common/components/Divider';
import Text from '~/common/components/Text';

export default {
  title: 'Common/Components/Divider',
  component: Divider,
  argTypes: {
    size: {
      control: { type: 'number', min: 0, max: 20 },
    },
  },
} satisfies Meta<typeof Divider>;

type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  render: function Render(args) {
    return (
      <>
        <Text>위</Text>
        <Divider {...args} type="horizontal" />
        <Text>아래</Text>
      </>
    );
  },
};

export const Vertical: Story = {
  render: function Render(args) {
    return (
      <>
        <div>
          <Text elementType="span">왼쪽</Text>
          <Divider {...args} type="vertical" className="h-full" />
          <Text elementType="span">오른쪽</Text>
        </div>
      </>
    );
  },
};
