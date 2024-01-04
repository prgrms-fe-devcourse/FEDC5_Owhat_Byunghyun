import { Meta, StoryObj } from '@storybook/react';

import Carousel from '~/common/components/Carousel';

export default {
  title: 'Common/Components/Slide',
  component: Carousel,
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
} satisfies Meta<typeof Carousel>;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: function Render(args) {
    return (
      <Carousel className="border-y-2" {...args}>
        {Array.from(new Array(20), (_, k) => k).map(i => (
          <div className="relative inline-block overflow-hidden rounded-full bg-gray-200 ring-1 ring-gray-400 ring-offset-2">
            <img key={i} alt="아바타" src={`https://picsum.photos/300?${i}`} />
          </div>
        ))}
      </Carousel>
    );
  },
};
