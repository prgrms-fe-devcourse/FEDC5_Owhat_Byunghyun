import { Meta, StoryObj } from '@storybook/react';

import useTimeout from '~/common/hooks/useTimeout';

const meta: Meta<typeof useTimeout> = {
  title: 'Common/Hooks/useTimeout',
};

export default meta;
type Story = StoryObj<typeof useTimeout>;

export const Default: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const clear = useTimeout(() => {
      alert('실행!');
    }, 3000);

    return (
      <>
        <div>useTimeout 테스트</div>
        <button onClick={clear}>멈춰</button>
      </>
    );
  },
};
