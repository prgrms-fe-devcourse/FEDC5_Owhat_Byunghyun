import { Meta, StoryObj } from '@storybook/react';

import Group from '~/common/components/Group';

const meta: Meta<typeof Group> = {
  title: 'Common/Components/Group',
  component: Group,
  argTypes: {
    direction: {
      control: 'radio',
      options: ['row', 'columns'],
    },
    position: {
      control: 'radio',
      options: ['left', 'right', 'center', 'apart'],
    },
    align: {
      control: 'radio',
      options: ['start', 'center', 'end'],
    },
    inline: {
      control: 'boolean',
    },
    grow: {
      control: 'boolean',
    },
    spacing: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    noWrap: {
      control: 'boolean',
    },
  },
  args: {
    direction: 'row',
    position: 'left',
    align: 'start',
    inline: false,
    grow: false,
    spacing: 'md',
    noWrap: false,
  },
};

export default meta;
type Story = StoryObj<typeof Group>;

export const Default: Story = {
  render: args => {
    return (
      <Group {...args}>
        <div className="h-28 w-32 bg-blue-500"></div>
        <div className="h-48 w-28 bg-slate-700"></div>
        <div className="h-40 w-40 bg-amber-500"></div>
        <div className="h-28 w-36 bg-emerald-600"></div>
      </Group>
    );
  },
};

export const Spacing: Story = {
  argTypes: {
    spacing: {
      control: 'range',
      min: 1,
      max: 30,
    },
  },
  args: {
    spacing: 10,
  },
  render: args => {
    return (
      <Group {...args}>
        <div className="h-28 w-32 bg-blue-500"></div>
        <div className="h-48 w-28 bg-slate-700"></div>
        <div className="h-40 w-40 bg-amber-500"></div>
        <div className="h-28 w-36 bg-emerald-600"></div>
      </Group>
    );
  },
};
