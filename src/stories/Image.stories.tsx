import { Meta, StoryObj } from '@storybook/react';

import Image from '~/components/common/Image';

export default {
  title: 'Common/Components/Image',
  component: Image,
  argTypes: {
    placeholder: {
      control: 'text',
    },
    imgWidth: {
      options: ['small', 'halfFull', 'full', 'screen', 'auto'],
      control: 'inline-radio',
    },
    imgHeight: {
      options: ['small', 'halfFull', 'full', 'screen', 'auto'],
      control: 'inline-radio',
    },
    mode: {
      options: ['cover', 'fill', 'contain'],
      control: 'inline-radio',
    },
    alt: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
  args: {
    src: 'https://picsum.photos/200',
    mode: 'cover',
    placeholder: 'https://via.placeholder.com/200',
  },
} satisfies Meta<typeof Image>;

type Story = StoryObj<typeof Image>;

export const Default: Story = {};

export const Lazy: Story = {
  render: function Render(args) {
    return (
      <div>
        {Array.from(new Array(20), (_, k) => k).map(i => (
          <Image {...args} lazy key={i} src={`${args.src}?${i}`} />
        ))}
      </div>
    );
  },
};
