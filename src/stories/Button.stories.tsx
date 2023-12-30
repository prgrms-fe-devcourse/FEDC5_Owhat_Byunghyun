import { Meta, StoryObj } from '@storybook/react';

import Button from '~/common/components/Button';
import Icon from '~/common/components/Icon';

export default {
  title: 'Common/Components/Button',
  component: Button,
  argTypes: {
    type: {
      options: ['button', 'submit'],
      control: 'options',
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
    border: {
      control: 'boolean',
    },
  },
  args: {},
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: function Render(args) {
    return (
      <>
        <div>
          <Button {...args} className="bg-primary">
            button
          </Button>
        </div>
        <div>
          <Button {...args} className="border-none text-primary">
            완료
          </Button>
        </div>

        <div>
          <Button {...args} className="border-gray">
            <Icon id="search"></Icon>
          </Button>
        </div>
      </>
    );
  },
};
