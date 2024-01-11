import { useEffect } from 'react';

import useLayout from '~/common/hooks/useLayout';

const AccountEditPage = () => {
  const { changeMeta } = useLayout();

  useEffect(() => {
    changeMeta({
      title: '프로필 수정',
      left: <></>,
      right: <></>,
    });
  }, []);

  return (
    <form className="flex flex-col gap-large px-small">계정 수정 페이지</form>
  );
};

export default AccountEditPage;
