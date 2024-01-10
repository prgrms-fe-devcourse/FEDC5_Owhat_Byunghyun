import { Meta, StoryObj } from '@storybook/react';

import DEFAULT_IMAGE from '~/assets/images/default_profile.webp';
import Avatar from '~/common/components/Avatar';

export default {
  title: 'Common/Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      options: ['small', 'full', 'auto'],
      control: 'inline-radio',
    },
    shape: {
      options: ['circle', 'round', 'square'],
      control: 'inline-radio',
    },
  },
  args: {
    src: DEFAULT_IMAGE,
    size: 'small',
    shape: 'circle',
  },
} satisfies Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};
