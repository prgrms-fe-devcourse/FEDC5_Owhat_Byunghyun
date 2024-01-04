/* eslint-disable react-hooks/rules-of-hooks */
import { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';

import Icon from '~/common/components/Icon';
import LayoutProvider from '~/common/components/Layout';
import useLayout from '~/common/hooks/useLayout';

const meta = {
  title: 'Common/Components/Layout',
  args: {
    page: 'home',
  },
  argTypes: {
    page: {
      control: 'inline-radio',
      options: ['home', 'detail'],
    },
  },
  decorators: Story => (
    <LayoutProvider>
      <Story />
    </LayoutProvider>
  ),
} satisfies Meta<{ page: 'home' | 'detail' }>;

export default meta;

export const Default: StoryObj<{ page: 'home' | 'detail' }> = {
  render: args => (
    <section>
      <>{args.page === 'home' ? <HomePage /> : <DetailPage />}</>
      <div>{args.page}</div>
    </section>
  ),
};

function HomePage() {
  const { changeMeta } = useLayout();

  useEffect(() => {
    changeMeta({
      title: 'Main',
      left: <div></div>,
      right: <button className="text-primary">로그인</button>,
    });
  }, []);

  return (
    <section>
      <div>Home 페이지입니다.</div>
    </section>
  );
}

function DetailPage() {
  const { changeMeta } = useLayout();

  useEffect(() => {
    changeMeta({
      title: 'Detail',
      left: <Icon id="arrow-back" className="h-4 w-4" />,
      right: <Icon id="search" />,
    });
  }, []);

  return (
    <section>
      <div>Detail 페이지입니다.</div>
    </section>
  );
}
