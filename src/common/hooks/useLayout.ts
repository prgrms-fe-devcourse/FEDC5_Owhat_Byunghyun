import { useContext } from 'react';

import { LayoutContext } from '~/common/components/Layout';

const useLayout = () => {
  const context = useContext(LayoutContext);

  if (!context) throw new Error('Context가 없어요!');

  return context;
};

export default useLayout;
