import { useState } from 'react';

import Button from '~/common/components/Button';
import Group from '~/common/components/Group';
import Icon from '~/common/components/Icon';

import useEmailValidation from '../../hooks/useEmailValidation';
import TextInput from '../TextInput';

interface LoginProps {
  onLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
}
const LoginForm = ({ onLogin, loading }: LoginProps) => {
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
          <div className="absolute right-[12px] top-[38px]">
            <Button
              styleType="ghost"
              type="button"
              onClick={handleChangePasswordType}
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
        </Group>

        <div className="fixed bottom-0 left-0 mt-large p">
          <Button
            loading={loading}
            type="submit"
            fullwidth
            className="max-w-[360px]"
            disabled={loading || !isEmailValid || password.length === 0}
          >
            로그인
          </Button>
        </div>
      </Group>
    </form>
  );
};

export default LoginForm;
