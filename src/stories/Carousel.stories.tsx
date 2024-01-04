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
          <div className="w-[70px] overflow-hidden rounded-full bg-cover">
            <img key={i} alt="아바타" src={`https://picsum.photos/200?${i}`} />
          </div>
        ))}
      </Carousel>
    );
  },
};
