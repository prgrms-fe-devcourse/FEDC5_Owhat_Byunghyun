import type { Meta, StoryObj } from '@storybook/react';

import Icon from '~/common/components/Icon';
import Tooltip from '~/common/components/Tooltip';

const meta = {
  title: 'Common/Components/Tooltip',
  component: Tooltip,
  args: {
    isShadowed: true,
    isArrow: true,
    placement: 'bottom-left',
  },
  argTypes: {
    isShadowed: { control: 'boolean' },
    isArrow: { control: 'boolean' },
    placement: {
      control: 'radio',
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

export const Default: StoryObj<typeof Tooltip> = {
  render: args => (
    <div className="ml-32 mt-32">
      <Tooltip {...args}>
        <Icon id="more-vert" />
        <div>
          <p>댓글 수정하기</p>
          <p>댓글 삭제하기</p>
        </div>
      </Tooltip>
    </div>
  ),
};

export const Hover: StoryObj<typeof Tooltip> = {
  render: args => (
    <>
      <Tooltip {...args} eventType={'hover'}>
        <Icon id="more-vert" />
        <div>
          <p>댓글 수정하기</p>
          <p>댓글 삭제하기</p>
        </div>
      </Tooltip>
      <div className="flex justify-end">
        <Tooltip {...args} eventType={'hover'}>
          <Icon id="more-vert" />
          <div>
            <p>댓글 수정하기</p>
            <p>댓글 삭제하기</p>
          </div>
        </Tooltip>
      </div>
    </>
  ),
};
