import { useEffect } from 'react';

import Group from '~/common/components/Group';
import useLayout from '~/common/hooks/useLayout';

const FollowPage = () => {
  const { changeMeta } = useLayout();

  useEffect(() => {
    changeMeta({
      title: '팔로우',
      left: <></>,
      right: <></>,
    });
  }, []);

  return (
    <Group spacing={0} direction={'columns'} grow>
      follow 페이지
    </Group>
  );
};

export default FollowPage;
