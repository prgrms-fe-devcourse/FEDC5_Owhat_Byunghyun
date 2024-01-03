import { Meta, StoryObj } from '@storybook/react';

import Text from '~/common/components/Text';
import VerticalDivider from '~/common/components/VerticalDivider';

export default {
  title: 'Common/Components/verticalDivider',
  component: VerticalDivider,
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['xsmall', 'small', 'large', 'xlarge'],
    },
  },
  args: {
    size: 'small',
  },
} satisfies Meta<typeof VerticalDivider>;

type Story = StoryObj<typeof VerticalDivider>;

export const Vertical: Story = {
  render: function Render(args) {
    return (
      <>
        <Text>위</Text>
        <VerticalDivider {...args} />
        <Text>아래</Text>
      </>
    );
  },
};
