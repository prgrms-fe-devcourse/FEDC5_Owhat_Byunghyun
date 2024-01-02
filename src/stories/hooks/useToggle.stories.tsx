import { Meta, StoryObj } from '@storybook/react';

import useToggle from '~/common/hooks/useToggle';

const meta: Meta<typeof useToggle> = {
  title: 'Common/Hooks/useToggle',
};

export default meta;
type Story = StoryObj<typeof useToggle>;

export const Default: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [on, toggle, setTrue] = useToggle(false);

    return (
      <section className="inline-flex flex-col">
        <button className="border" onClick={toggle}>
          toggle
        </button>
        <button className="border" onClick={() => setTrue(true)}>
          set true
        </button>

        <span>{on ? 'on 입니다.' : 'off 입니다.'}</span>
      </section>
    );
  },
};
