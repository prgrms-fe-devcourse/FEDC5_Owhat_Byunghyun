import type { Meta, StoryObj } from '@storybook/react';

import Upload from '~/common/components/Upload';

const meta: Meta<typeof Upload> = {
  title: 'Common/Components/Upload',
  component: Upload,
  argTypes: {
    onChange: { action: 'changed!' },
  },
  args: {
    id: 'image uploader',
    name: 'image uploader',
  },
};

export default meta;
type Story = StoryObj<typeof Upload>;

export const Default: Story = {
  render: args => {
    return (
      <Upload {...args}>
        <button>click</button>
      </Upload>
    );
  },
};

export const Button: Story = {
  render: args => {
    return (
      <Upload {...args}>
        {(_, file) => (
          <button className="rounded-md border-none bg-primary px-4 py-2">
            {file ? file.name : 'upload'}
          </button>
        )}
      </Upload>
    );
  },
};

export const Preview: Story = {
  render: args => {
    return (
      <Upload {...args}>
        {src => (
          <img src={src || 'https://via.placeholder.com/200'} alt="img" />
        )}
      </Upload>
    );
  },
};
