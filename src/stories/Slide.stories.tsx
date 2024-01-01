import { Meta, StoryObj } from '@storybook/react';

import Slide from '~/common/components/Slide';

export default {
  title: 'Common/Components/Slide',
  component: Slide,
  argTypes: {
    itemsToShow: {
      control: 'number',
    },
    useButton: {
      control: 'boolean',
    },
    childSize: {
      control: 'number',
    },
    groupGap: {
      control: 'number',
    },
  },
  args: {
    useButton: false,
    itemsToShow: 4,
    childSize: 100,
    groupGap: 5,
  },
} satisfies Meta<typeof Slide>;

type Story = StoryObj<typeof Slide>;

export const Default: Story = {
  render: function Render(args) {
    return (
      <Slide {...args}>
        {Array.from(new Array(20), (_, k) => k).map(i => (
          <div className="w-[70px] overflow-hidden rounded-full bg-cover">
            <img key={i} alt="아바타" src={`https://picsum.photos/200?${i}`} />
          </div>
        ))}
      </Slide>
    );
  },
};
