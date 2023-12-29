import { Meta, StoryObj } from '@storybook/react';

import Image from '~/components/common/Image';

export default {
  title: 'Components/Common/Image',
  component: Image,
  argTypes: {
    placeholder: {
      control: 'text',
    },
    width: {
      options: ['small', 'halfFull', 'full', 'screen', 'auto'],
      control: 'inline-radio',
    },
    height: {
      options: ['small', 'halfFull', 'full', 'screen', 'auto'],
      control: 'inline-radio',
    },
    mode: {
      options: ['cover', 'fill', 'contain'],
      control: 'inline-radio',
    },
    imgAlt: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
  args: {
    imgSrc: 'https://picsum.photos/200',
    mode: 'cover',
    placeholder: 'https://via.placeholder.com/200',
  },
} satisfies Meta<typeof Image>;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  render: function Render(args) {
    return <Image {...args} />;
  },
};

export const Lazy: Story = {
  render: function Render(args) {
    return (
      <div>
        {Array.from(new Array(20), (_, k) => k).map(i => (
          <Image {...args} lazy key={i} imgSrc={`${args.imgSrc}?${i}`} />
        ))}
      </div>
    );
  },
};
