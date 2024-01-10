import { useEffect, useState } from 'react';

import Button from '~/common/components/Button';
import Group from '~/common/components/Group';
import Text from '~/common/components/Text';
import { User } from '~/pages/register/types';

import { useUserListQuery } from '../../hooks/queries/useUserListQuery';
import useForm from '../../hooks/useForm';
import FormField from '../FormField';

interface RegisterFormProps {
  mutation: { isPending: boolean };
  onRegisterCompleted: (isValid: boolean) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const isValidEmail = (value: string) =>
  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);

const isValidPassword = (value: string) =>
  value.length >= 8 &&
  /[a-zA-Z]/.test(value) &&
  /\d/.test(value) &&
  /[!@#$%^&*(),.?":{}|<>]/.test(value);

const isValidUsername = (value: string) =>
  value.length >= 3 && /^[가-힣a-zA-Z0-9]+$/.test(value);

const isValidPasswordMatch = ({
  value,
  newPassword,
}: {
  value: string;
  newPassword: string;
}) => {
  return newPassword === value;
};

const RegisterForm = ({
  mutation,
  onRegisterCompleted,
  handleSubmit,
}: RegisterFormProps) => {
  const [emailCheckMessage, setEmailCheckMessage] = useState('');
  const [isEmailDuplicate, setIsEmailDuplicate] = useState(false);
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

  const data = useUserListQuery();

  const checkDuplicateEmail = (email: string) => {
    try {
      const users: User[] = data;
      const isDuplicate = users.some(user => user.email === email);

      setIsEmailDuplicate(isDuplicate);

      if (isDuplicate) {
        setEmailCheckMessage('이메일이 이미 사용 중입니다.');
      } else {
        setEmailCheckMessage('가입 가능한 이메일입니다.');
      }
    } catch (error) {
      console.error('에러 발생:', (error as Error).message);
    }
  };

  //TODO: Email 값이 지워지거나 바뀌면 이메일 중복확인 메시지사라지도록하는 기능 -> 다른방법 구상해야함
  useEffect(() => {
    setEmailCheckMessage('');
  }, [values.email]);
  useEffect(() => {
    onRegisterCompleted(isCompleted && !isEmailDuplicate);
  }, [isCompleted, isEmailDuplicate, onRegisterCompleted]);

  return (
    <form onSubmit={handleSubmit} className="pb-[100px]">
      <Group direction="columns" spacing="md" grow={true}>
        <div className="relative">
          <FormField
            type="email"
            name="email"
            label="이메일"
            placeholder="이메일을 입력해주세요."
            onChange={handleChange}
            value={values.email}
            isValid={isValid.email}
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

          <Button
            onClick={() => checkDuplicateEmail(values.email)}
            type="button"
            styleType="ghost"
            className="absolute right-0 top-[33px] z-10 text-sm"
            disabled={
              !isValid.email ||
              (emailCheckMessage === '가입 가능한 이메일입니다.' &&
                !isEmailDuplicate)
            }
          >
            중복 확인
          </Button>
        </div>
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
            type="submit"
            fullwidth={true}
            disabled={mutation.isPending || !(isCompleted && !isEmailDuplicate)}
            className="max-w-[360px]"
          >
            회원가입
          </Button>
        </div>
      </Group>
    </form>
  );
};

export default RegisterForm;
