import { Meta, StoryObj } from '@storybook/react';

import HorizontalDivider from '~/common/components/HorizontalDivider';
import Text from '~/common/components/Text';

export default {
  title: 'Common/Components/Divider',
  component: HorizontalDivider,
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['xsmall', 'small', 'large', 'xlarge'],
    },
  },
  args: {
    size: 'small',
  },
} satisfies Meta<typeof HorizontalDivider>;

type Story = StoryObj<typeof HorizontalDivider>;

export const Horizontal: Story = {
  render: function Render(args) {
    return (
      <>
        <Text>위</Text>
        <HorizontalDivider {...args} />
        <Text>아래</Text>
      </>
    );
  },
};
