import type { Meta, StoryObj } from '@storybook/react';

import Text from '~/components/common/Text';

const meta = {
  title: 'Components/Common/Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;

type fontColorOption =
  | 'primary'
  | 'error'
  | 'success'
  | 'online'
  | 'black'
  | 'white'
  | 'lightGray'
  | 'gray';

type fontSizeOption = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

type decorationOption = 'none' | 'underline' | 'overline' | 'lineThrough';

const fontColorOption: Array<fontColorOption> = [
  'primary',
  'error',
  'success',
  'online',
  'black',
  'white',
  'lightGray',
  'gray',
];

const fontSizeOption: Array<fontSizeOption> = [
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

export const PrimaryText: StoryObj<typeof Text> = {
  argTypes: {
    fontColor: {
      options: fontColorOption,
    },
    fontSize: {
      options: fontSizeOption,
    },
    decoration: {
      options: decorationOption,
    },
    strong: {
      control: 'boolean',
    },
  },
  args: {
    children: 'Text',
    fontColor: 'primary',
    fontSize: 'md',
    decoration: 'none',
    strong: false,
  },
};
