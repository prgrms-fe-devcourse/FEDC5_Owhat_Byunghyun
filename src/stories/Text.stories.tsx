import type { Meta, StoryObj } from '@storybook/react';

import Text from '~/components/common/Text';

const meta = {
  title: 'Components/Common/Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;

export const PrimaryText: StoryObj<typeof Text> = {
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    color: 'primary',
    size: 'md',
    decoration: 'none',
    strong: false,
  },
};

export const BoldText: StoryObj<typeof Text> = {
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    strong: true,
  },
};

export const UnderlineText: StoryObj<typeof Text> = {
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    decoration: 'underline',
  },
};
