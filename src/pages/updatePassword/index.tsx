import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ArrowBackButton from '~/common/components/ArrowBackButton';
import Button from '~/common/components/Button';
import Group from '~/common/components/Group';
import Input from '~/common/components/Input';
import Text from '~/common/components/Text';
import { useUpdatePassword } from '~/common/hooks/mutations/useUpdatePassword';
import useSuspenseAuthUser from '~/common/hooks/queries/useSuspenseAuthUser';
import useLayout from '~/common/hooks/useLayout';

import { usePasswordValidation } from './usePasswordValidation';

const UpdatePasswordPage = () => {
  const { authUser } = useSuspenseAuthUser();

  const navigate = useNavigate();
  const { updatePassword } = useUpdatePassword();

  const { changeMeta } = useLayout();

  useEffect(() => {
    if (!authUser) {
      navigate('/login');
      alert('로그인이 필요합니다.');
    }

    changeMeta({
      title: '비밀번호 변경',
      left: <ArrowBackButton />,
      right: <></>,
    });
  }, [authUser]);

  const [isComplete, setIsComplete] = useState(false);

  const onPasswordCompleted = (value: boolean) => {
    setIsComplete(value);
  };

  const {
    password,
    confirmPassword,
    isPasswordMatch,
    isPasswordValid,
    handlePasswordChange,
    handleConfirmPasswordChange,
  } = usePasswordValidation({
    onPasswordCompleted,
  });

  const handleUpdatePassword = () => {
    updatePassword(password);
    // TODO: accountpage가 main 브랜치로 merge되면 주석해제
    // navigate('/account');
  };

  return (
    <form
      className="flex flex-col gap-large p-small"
      onSubmit={handleUpdatePassword}
    >
      <Group spacing={'sm'} direction={'columns'} className="mt-large" grow>
        <Text size={'small'}>새로운 비밀번호</Text>
        <Input
          value={password}
          onChange={e => handlePasswordChange(e.target.value)}
          type="password"
          placeholder="새로운 비밀번호를 입력해주세요."
        />
        {!isPasswordValid && (
          <Text className="text-wrap text-xs text-error">
            비밀번호는 8자 이상이어야 하며, 영문 대/소문자, 숫자, 특수문자를
            포함해야 합니다.
          </Text>
        )}
        <Input
          value={confirmPassword}
          onChange={e => handleConfirmPasswordChange(e.target.value)}
          type="password"
          placeholder="비밀번호를 다시 확인해주세요."
        />
        {!isPasswordMatch && (
          <Text className="text-xs text-error">
            비밀번호가 일치하지 않습니다.
          </Text>
        )}
        <div className="fixed bottom-[56px] left-0 p">
          <Button
            type="submit"
            fullwidth
            disabled={!isComplete}
            onSubmit={(event: FormEvent<HTMLButtonElement>) => {
              event.preventDefault();
            }}
          >
            변경하기
          </Button>
        </div>
      </Group>
    </form>
  );
};

export default UpdatePasswordPage;
