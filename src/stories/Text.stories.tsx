import type { Meta, StoryObj } from '@storybook/react';

import Text from '~/common/components/Text';

type fontSizeOption = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

type decorationOption = 'none' | 'underline' | 'overline' | 'lineThrough';

const sizeOption: Array<fontSizeOption> = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
];

const decorationOption: Array<decorationOption> = [
  'none',
  'underline',
  'overline',
  'lineThrough',
];

const meta = {
  title: 'Common/Components/Text',
  component: Text,
  argTypes: {
    size: {
      options: sizeOption,
    },
    decoration: {
      options: decorationOption,
    },
    strong: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

export const PrimaryText: StoryObj<typeof Text> = {
  args: {
    children: 'Text',
    size: 'md',
    decoration: 'none',
    strong: false,
  },
};
