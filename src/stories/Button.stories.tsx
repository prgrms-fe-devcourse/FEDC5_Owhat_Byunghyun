import { Meta, StoryObj } from '@storybook/react';

import Button from '~/common/components/Button';
import Icon from '~/common/components/Icon';

export default {
  title: 'Common/Components/Button',
  component: Button,
  argTypes: {
    styleType: {
      options: ['primary', 'secondary', 'outline', 'ghost'],
      control: 'inline-radio',
    },
    fullwidth: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    fullwidth: false,
    loading: false,
    disabled: false,
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: function Render(args) {
    return (
      <>
        <div>
          <Button {...args}>button</Button>
        </div>
        <div>
          <Button {...args}>완료</Button>
        </div>

        <div>
          <Button {...args}>작성</Button>
        </div>
        <div>
          <Button {...args}>
            <Icon id="search"></Icon>
          </Button>
        </div>
      </>
    );
  },
};
