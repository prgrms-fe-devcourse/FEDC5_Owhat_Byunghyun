import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import ArrowBackButton from '~/common/components/ArrowBackButton';
import Button from '~/common/components/Button';
import Group from '~/common/components/Group';
import Input from '~/common/components/Input';
import Text from '~/common/components/Text';
import useSuspenseAuthUser from '~/common/hooks/queries/useSuspenseAuthUser';
import useLayout from '~/common/hooks/useLayout';
import { cn } from '~/utils/cn';
import { isValidUsername } from '~/utils/isValid';

import EditAccountImages from './components/EditAccountImages';
import { useUpdateAccountForm } from './hooks/useUpdateAccountForm';

const AccountEditPage = () => {
  // 로컬스토리지에 토큰이 있다는 전제 하에만 미리보기가 가능합니다.
  const navigate = useNavigate();
  const { changeMeta } = useLayout();
  const [submitPossible, setSubmitPossible] = useState(false);
  const { authUser, isLoading } = useSuspenseAuthUser();
  const { _id, fullName, image, coverImage } = authUser;

  useEffect(() => {
    if (!isLoading) return;

    if (!isLoading && !authUser) {
      navigate('/login');
    }

    changeMeta({
      title: '프로필 수정',
      left: <ArrowBackButton />,
      right: <></>,
    });
  }, [authUser]);

  const { formState, setFormState, handleSubmit } = useUpdateAccountForm({
    authUser,
  });

  const isUserNameValid = useMemo(
    () => isValidUsername(formState.inputValue),
    [formState.inputValue],
  );

  const handleChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormState(prev => ({ ...prev, inputValue: event.target.value }));
      setSubmitPossible(isUserNameValid);
    },
    [isUserNameValid, setFormState],
  );

  return (
    <form className="flex flex-col gap-large px-small">
      <EditAccountImages
        image={image}
        coverImage={coverImage}
        setFormState={setFormState}
        setSubmitPossible={setSubmitPossible}
        isUserNameValid={isUserNameValid}
      />
      <Group spacing={'sm'} direction={'columns'} className="mt-large" grow>
        <Text>새로운 닉네임</Text>
        <Input
          defaultValue={fullName}
          className="text-gray-400"
          placeholder="새로운 닉네임을 입력해주세요."
          onChange={handleChangeInput}
        />
        <Text
          className={cn(
            isUserNameValid ? 'hidden' : '',
            'text-right text-sm text-error',
          )}
        >
          이름을 3글자 이상 공백없이 입력해주세요.
        </Text>
        <Text className="mt-large font-thin text-primary hover:underline">
          <Link to={'/update-password'} state={_id}>
            내 비밀번호 변경
          </Link>
        </Text>
        <div className="fixed bottom-[56px] left-0 p">
          <Button
            type="button"
            fullwidth
            className="max-w-layout"
            onClick={handleSubmit}
            disabled={!submitPossible}
          >
            저장하기
          </Button>
        </div>
      </Group>
    </form>
  );
};

export default AccountEditPage;
