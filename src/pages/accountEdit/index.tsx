import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import ArrowBackButton from '~/common/components/ArrowBackButton';
import Button from '~/common/components/Button';
import Group from '~/common/components/Group';
import Input from '~/common/components/Input';
import Text from '~/common/components/Text';
import { useLogout } from '~/common/hooks/mutations/useLogout';
import useSuspenseAuthUser from '~/common/hooks/queries/useSuspenseAuthUser';
import useLayout from '~/common/hooks/useLayout';
import { ERROR } from '~/constants/message';
import { cn } from '~/utils/cn';
import { isValidUsername } from '~/utils/isValid';

import EditAccountImages from './components/EditAccountImages';
import { useUpdateAccountForm } from './hooks/useUpdateAccountForm';

const AccountEditPage = () => {
  const { changeMeta } = useLayout();

  const [submitPossible, setSubmitPossible] = useState(false);
  const { authUser } = useSuspenseAuthUser();
  const { _id, fullName, image, coverImage } = authUser;

  const { logout } = useLogout();

  useEffect(() => {
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
      setSubmitPossible(isValidUsername(event.target.value));
    },
    [isUserNameValid, setFormState],
  );

  return (
    <form className="flex flex-col gap-large ">
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
          onKeyDown={e => {
            e.key === 'Enter' && e.preventDefault();
          }}
          defaultValue={fullName}
          className="py-xsmall placeholder:text-sm placeholder:text-gray-400"
          placeholder="새로운 닉네임을 입력해주세요."
          onChange={handleChangeInput}
        />
        <Text
          className={cn(
            isUserNameValid ? 'hidden' : '',
            'text-balance text-right text-xs text-error',
          )}
        >
          {ERROR.NAME_INVALID}
        </Text>
        <Text className="mt-large font-thin text-primary">
          <Link to={'/update-password'} state={_id} className="hover:underline">
            내 비밀번호 변경
          </Link>
        </Text>

        <button type="button" className="cursor-default text-start">
          <Text
            elementType="span"
            role="button"
            className="w-fit text-error hover:underline"
            onClick={() => {
              logout();
            }}
          >
            로그아웃
          </Text>
        </button>

        <div className="fixed bottom-[56px] left-0 p">
          <Button
            type="submit"
            fullwidth
            className="max-w-layout"
            disabled={!submitPossible}
            onClick={handleSubmit}
          >
            저장하기
          </Button>
        </div>
      </Group>
    </form>
  );
};

export default AccountEditPage;
