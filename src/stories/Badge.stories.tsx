import { Meta, StoryObj } from '@storybook/react';

import Avatar from '~/common/components/Avatar';
import Badge from '~/common/components/Badge';
import Icon from '~/common/components/Icon';
export default {
  title: 'Common/Components/Badge',
  component: Badge,
  argTypes: {
    badgeType: {
      options: ['online', 'offline', 'alarm'],
      control: 'inline-radio',
    },
    corner: {
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      control: 'inline-radio',
    },
    size: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: 'inline-radio',
    },
  },
  args: {
    badgeType: 'alarm',
    corner: 'top-right',
  },
} satisfies Meta<typeof Badge>;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: function Render(args) {
    return (
      <Badge {...args}>
        <Avatar size="small" src="http://picsum.photos/200"></Avatar>
      </Badge>
    );
  },
};

export const BigElement: Story = {
  render: function Render(args) {
    return (
      <Badge {...args}>
        <Avatar size="screen" src="http://picsum.photos/200"></Avatar>
      </Badge>
    );
  },
};

export const IconBadge: Story = {
  render: function Render(args) {
    return (
      <Badge {...args}>
        <div>
          <Icon id="notifications"></Icon>
        </div>
      </Badge>
    );
  },
};
