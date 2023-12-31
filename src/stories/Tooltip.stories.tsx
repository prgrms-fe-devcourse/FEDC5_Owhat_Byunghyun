import type { Meta, StoryObj } from '@storybook/react';

import Icon from '~/common/components/Icon';
import Tooltip from '~/common/components/Tooltip';

const meta = {
  title: 'Common/Components/Tooltip',
  component: Tooltip,
  args: {
    isArrow: true,
    arrowPosition: 'left',
  },
  argTypes: {
    isShadowed: { control: 'boolean' },
    isArrow: { control: 'boolean' },
    arrowPosition: {
      options: ['left', 'center', 'right'],
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

export const Default: StoryObj<typeof Tooltip> = {
  render: args => (
    <Tooltip {...args}>
      <Icon id="more-vert" className="ml-3" />
      <div>
        <p>댓글 수정하기</p>
        <p>댓글 삭제하기</p>
      </div>
    </Tooltip>
  ),
};

export const Hover: StoryObj<typeof Tooltip> = {
  render: args => (
    <Tooltip {...args} eventType={'hover'}>
      <Icon id="more-vert" className="ml-3" />
      <div>
        <p>댓글 수정하기</p>
        <p>댓글 삭제하기</p>
      </div>
    </Tooltip>
  ),
};
