import type { Meta, StoryObj } from '@storybook/react';

import Button from '~/common/components/Button';
import Icon from '~/common/components/Icon';
import Tooltip from '~/common/components/Tooltip';

const meta = {
  title: 'Common/Components/Tooltip',
  component: Tooltip,
  args: {
    placement: 'bottom-left',
    targetElement: <Icon id="more-vert" />,
  },
  argTypes: {
    isArrow: { control: 'boolean' },
    placement: {
      control: 'select',
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
        <div className="flex w-[50px] flex-col">
          <Button className="z-20">댓글 수정하기</Button>
          <Button className="z-20">댓글 삭제하기</Button>
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
          <div>
            <Button>댓글 수정하기</Button>
            <Button>댓글 삭제하기</Button>
          </div>
        </Tooltip>
      </div>
      <div>
        <Tooltip {...args}>
          <div>
            <p>댓글 수정하기</p>
            <p>댓글 삭제하기</p>
          </div>
        </Tooltip>
      </div>
      <div>
        <Tooltip {...args}>
          <div>
            <p>댓글 수정하기</p>
            <p>댓글 삭제하기</p>
          </div>
        </Tooltip>
      </div>
    </div>
  ),
};
