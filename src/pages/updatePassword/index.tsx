import { useEffect } from 'react';

import ArrowBackButton from '~/common/components/ArrowBackButton';
import useSuspenseAuthUser from '~/common/hooks/queries/useSuspenseAuthUser';
import useLayout from '~/common/hooks/useLayout';

import UpdatePasswordForm from './components/UpdatePasswordForm';

const UpdatePasswordPage = () => {
  const { authUser } = useSuspenseAuthUser();

  const { changeMeta } = useLayout();

  useEffect(() => {
    changeMeta({
      title: '비밀번호 변경',
      left: <ArrowBackButton />,
      right: <></>,
    });
  }, [authUser]);

  return <UpdatePasswordForm />;
};

export default UpdatePasswordPage;
