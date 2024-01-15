import { useEffect } from 'react';

import useLayout from '~/common/hooks/useLayout';

const UpdatePasswordPage = () => {
  const { changeMeta } = useLayout();

  useEffect(() => {
    changeMeta({
      title: '비밀번호 변경',
      left: <></>,
      right: <></>,
    });
  }, []);

  return (
    <form className="flex flex-col gap-large p-small">
      비밀번호 변경 페이지
    </form>
  );
};

export default UpdatePasswordPage;
