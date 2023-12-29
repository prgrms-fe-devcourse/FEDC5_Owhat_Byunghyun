import { Meta, StoryObj } from '@storybook/react';

import Icon from '~/common/components/Icon';
import { IconName } from '~/common/components/Icon/type';

const meta: Meta<typeof Icon> = {
  title: 'Common/Components/Icon',
  component: Icon,
};
export default meta;

type Story = StoryObj<typeof Icon>;

const Icons: Array<IconName> = [
  'account-circle',
  'add-circle',
  'add-photo',
  'arrow-back',
  'cancel',
  'close',
  'edit',
  'favorite',
  'forum',
  'home',
  'more-vert',
  'notifications',
  'search',
  'send',
  'sms',
];

export const Default: Story = {
  args: {
    size: 24,
    id: 'account-circle',
  },
  argTypes: {
    size: {
      control: 'range',
      min: 1,
      max: 100,
    },
    id: {
      control: 'radio',
      options: Icons,
    },
  },
};
