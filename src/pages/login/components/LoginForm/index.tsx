import { useState } from 'react';

import Button from '~/common/components/Button';
import Group from '~/common/components/Group';
import Icon from '~/common/components/Icon';
import Text from '~/common/components/Text';

import useEmailValidation from '../../hooks/useEmailValidation';
import TextInput from '../TextInput';

interface LoginProps {
  onLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  isError: boolean;
}
const LoginForm = ({ onLogin, loading, isError }: LoginProps) => {
  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState('password');
  const { email, isEmailValid, handleEmailChange } = useEmailValidation();

  const handleChangePasswordType = () => {
    setPasswordType(prev => (prev === 'password' ? 'text' : 'password'));
  };

  return (
    <form onSubmit={onLogin}>
      <Group direction="columns" spacing="sm" grow={true}>
        <TextInput
          label="이메일"
          type="text"
          value={email}
          id="email"
          name="email"
          placeholder="이메일을 입력해주세요."
          onChange={handleEmailChange}
          isValid={isEmailValid}
          errorText="올바른 이메일을 입력해주세요"
        />

        <Group direction="columns" spacing="sm" className="relative">
          <div className="relative w-full">
            <TextInput
              label="비밀번호"
              type={passwordType}
              value={password}
              id="password"
              name="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={setPassword}
              isValid={true}
              errorText=""
            />
            <Button
              styleType="ghost"
              type="button"
              onClick={handleChangePasswordType}
              className="absolute right-0 top-0 z-10 -translate-x-[20%] translate-y-[90%] text-sm"
            >
              <Icon
                size={17}
                viewBox="0 0 24 24"
                className="fill-gray-600"
                id={
                  passwordType === 'password' ? 'visibility' : 'visibility-off'
                }
              />
            </Button>
          </div>
          <div className="h-8">
            {isError && (
              <Text className="text-[13px] text-error">
                이메일 또는 비밀번호가 올바르지 않습니다.
                <br />
                입력한 내용을 다시 확인해 주세요.
              </Text>
            )}
          </div>
        </Group>
        <Button
          loading={loading}
          type="submit"
          fullwidth
          className="mt-large"
          disabled={loading || !isEmailValid || password.length === 0}
        >
          로그인
        </Button>
      </Group>
    </form>
  );
};

export default LoginForm;
