import type { Meta, StoryObj } from '@storybook/react';

import Icon from '~/common/components/Icon';
import Tooltip from '~/common/components/Tooltip';

const meta = {
  title: 'Common/Components/Tooltip',
  component: Tooltip,
  args: {
    isShadowed: true,
    isArrow: true,
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
  args: {
    placement: 'bottom-left',
  },
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

export const SmartTooltip: StoryObj<typeof Tooltip> = {
  render: args => (
    <div className="flex w-full flex-row justify-between">
      <div>
        <Tooltip {...args}>
          <Icon id="more-vert" />
          <div>
            <p>댓글 수정하기</p>
            <p>댓글 삭제하기</p>
          </div>
        </Tooltip>
      </div>
      <div>
        <Tooltip {...args}>
          <Icon id="more-vert" />
          <div>
            <p>댓글 수정하기</p>
            <p>댓글 삭제하기</p>
          </div>
        </Tooltip>
      </div>
      <div>
        <Tooltip {...args}>
          <Icon id="more-vert" />
          <div>
            <p>댓글 수정하기</p>
            <p>댓글 삭제하기</p>
          </div>
        </Tooltip>
      </div>
    </div>
  ),
};
