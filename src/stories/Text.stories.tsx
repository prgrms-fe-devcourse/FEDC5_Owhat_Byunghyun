import type { Meta, StoryObj } from '@storybook/react';

import Text from '~/common/components/Text';

type fontSizeOption =
  | 'xsmall'
  | 'small'
  | 'base'
  | 'large'
  | 'xlarge'
  | '2xlarge'
  | '3xl';

type decorationOption = 'none' | 'underline' | 'overline' | 'lineThrough';

const sizeOption: Array<fontSizeOption> = [
  'xsmall',
  'small',
  'base',
  'large',
  'xlarge',
  '2xlarge',
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
    isLogo: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

export const Default: StoryObj<typeof Text> = {
  args: {
    children: 'Text',
    size: 'base',
    decoration: 'none',
    strong: false,
    isLogo: false,
  },
};
