import { useEffect } from 'react';

import Button from '~/common/components/Button';
import Group from '~/common/components/Group';
import Text from '~/common/components/Text';
import { useUserListQuery } from '~/common/hooks/queries/useUserList';
import useForm from '~/common/hooks/useForm';
import { ERROR, MESSAGE } from '~/constants/message';
import {
  isValidEmail,
  isValidPassword,
  isValidPasswordMatch,
  isValidUsername,
} from '~/utils/isValid';

import useEmailDuplicate from '../../hooks/useEmailDuplicate';
import FormField from '../FormField';

interface RegisterFormProps {
  mutation: { isPending: boolean };
  onRegisterCompleted: (isValid: boolean) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const RegisterForm = ({
  mutation,
  onRegisterCompleted,
  handleSubmit,
}: RegisterFormProps) => {
  const { data: userList } = useUserListQuery();

  const {
    emailCheckMessage,
    setIsEmailDuplicate,
    setEmailCheckMessage,
    isEmailDuplicate,
    checkDuplicateEmail,
  } = useEmailDuplicate({ userList });

  const { values, isValid, isCompleted, handleChange } = useForm({
    initialValues: {
      email: '',
      password: '',
      username: '',
      confirmPassword: '',
    },
    isValidinitialValues: {
      email: false,
      password: false,
      username: false,
      confirmPassword: false,
    },
    validate: {
      email: value => isValidEmail(value),
      password: value => isValidPassword(value),
      username: value => isValidUsername(value),
      confirmPassword: value =>
        isValidPasswordMatch({
          value,
          newPassword: values.password,
        }),
    },
  });

  useEffect(() => {
    setIsEmailDuplicate(true);
    setEmailCheckMessage('');
  }, [values.email, setEmailCheckMessage, setIsEmailDuplicate]);

  useEffect(() => {
    onRegisterCompleted(isCompleted && !isEmailDuplicate);
  }, [isCompleted, isEmailDuplicate, onRegisterCompleted]);

  const DuplicateButton = () => (
    <Button
      onClick={() => checkDuplicateEmail(values.email)}
      type="button"
      styleType="ghost"
      className="absolute right-0 top-0 z-10 translate-y-[7%] text-sm"
      disabled={
        !isValid.email ||
        (emailCheckMessage === MESSAGE.POSSIBLE_EMAIL && !isEmailDuplicate)
      }
    >
      중복 확인
    </Button>
  );

  return (
    <form onSubmit={handleSubmit} className="pb-[100px]">
      <Group direction="columns" spacing="md" grow={true}>
        <div>
          <FormField
            type="email"
            name="email"
            label="이메일"
            placeholder="이메일을 입력해주세요."
            onChange={handleChange}
            value={values.email}
            isValid={isValid.email}
            right={<DuplicateButton />}
          />
          {emailCheckMessage && (
            <Text
              className={
                isEmailDuplicate ? 'text-sm text-error' : 'text-sm text-success'
              }
            >
              {emailCheckMessage}
            </Text>
          )}
        </div>

        <FormField
          type="text"
          name="username"
          label="이름"
          placeholder="이름을 입력해주세요."
          onChange={handleChange}
          value={values.username}
          isValid={isValid.username}
          errorMessage={ERROR.NAME_INVALID}
        />
        <FormField
          type="password"
          name="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          onChange={handleChange}
          value={values.password}
          isValid={isValid.password}
          errorMessage={ERROR.PASSWORD_INVAILD}
        />
        <FormField
          type="password"
          name="confirmPassword"
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 한번 입력해주세요."
          onChange={handleChange}
          value={values.confirmPassword}
          isValid={isValid.confirmPassword}
          errorMessage={ERROR.PASSWORD_NOT_MATCH}
        />
        <div className="sticky w-full p">
          <Button
            loading={mutation.isPending}
            fullwidth={true}
            disabled={mutation.isPending || isEmailDuplicate || !isCompleted}
          >
            회원가입
          </Button>
        </div>
      </Group>
    </form>
  );
};

export default RegisterForm;
