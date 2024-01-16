import { useEffect } from 'react';

import ArrowBackButton from '~/common/components/ArrowBackButton';
import useSuspenseAuthUser from '~/common/hooks/queries/useSuspenseAuthUser';
import useLayout from '~/common/hooks/useLayout';

import AccountEditForm from './components/AccountEditForm';

const AccountEditPage = () => {
  const { changeMeta } = useLayout();
  const { authUser } = useSuspenseAuthUser();

  useEffect(() => {
    changeMeta({
      title: '프로필 수정',
      left: <ArrowBackButton />,
      right: <></>,
    });
  }, [authUser]);

  return <AccountEditForm authUser={authUser} />;
};

export default AccountEditPage;
