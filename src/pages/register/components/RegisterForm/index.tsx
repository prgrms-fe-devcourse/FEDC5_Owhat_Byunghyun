import { useEffect } from 'react';

import Button from '~/common/components/Button';
import Group from '~/common/components/Group';
import Text from '~/common/components/Text';
import useForm from '~/common/hooks/useForm';
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
  const {
    emailCheckMessage,
    setEmailCheckMessage,
    isEmailDuplicate,
    checkDuplicateEmail,
  } = useEmailDuplicate();

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
    setEmailCheckMessage('');
  }, [values.email, setEmailCheckMessage]);

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
        (emailCheckMessage === '가입 가능한 이메일입니다.' && !isEmailDuplicate)
      }
    >
      중복 확인
    </Button>
  );

  return (
    <form onSubmit={handleSubmit} className="pb-[100px]">
      <Group direction="columns" spacing="md" grow={true}>
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

        <FormField
          type="text"
          name="username"
          label="이름"
          placeholder="이름을 입력해주세요."
          onChange={handleChange}
          value={values.username}
          isValid={isValid.username}
        />
        <FormField
          type="password"
          name="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          onChange={handleChange}
          value={values.password}
          isValid={isValid.password}
          errorMessage="비밀번호는 8자 이상이어야 하며, 영문 대/소문자, 숫자, 특수문자를 포함해야 합니다."
        />
        <FormField
          type="password"
          name="confirmPassword"
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 한번 입력해주세요."
          onChange={handleChange}
          value={values.confirmPassword}
          isValid={isValid.confirmPassword}
          errorMessage="비밀번호가 일치하지 않습니다."
        />
        <div className="fixed bottom-0 left-0 w-full p">
          <Button
            loading={mutation.isPending}
            fullwidth={true}
            disabled={mutation.isPending || !(isCompleted && !isEmailDuplicate)}
            className="max-w-layout"
          >
            회원가입
          </Button>
        </div>
      </Group>
    </form>
  );
};

export default RegisterForm;
