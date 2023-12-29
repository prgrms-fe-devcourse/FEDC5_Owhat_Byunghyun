import { Meta, StoryObj } from '@storybook/react';

import Avatar from '~/common/components/Avatar';

export default {
  title: 'Common/Components/Avatar',
  component: Avatar,
  argTypes: {
    imgSize: {
      options: ['small', 'full', 'auto'],
      control: 'inline-radio',
    },
    svgSize: {
      control: { type: 'range', min: 0, max: 100 },
    },
    mode: {
      options: ['cover', 'fill', 'contain'],
      control: 'inline-radio',
    },
    alt: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
  args: {
    src: 'https://picsum.photos/200',
    mode: 'cover',
  },
} satisfies Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    AvatarType: 'img',
  },
};
export const svg: Story = {
  args: {
    AvatarType: 'svg',
  },
};
