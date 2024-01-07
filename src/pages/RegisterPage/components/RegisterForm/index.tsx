import { useMutation } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';

import Button from '~/common/components/Button';
import Group from '~/common/components/Group';
import Input from '~/common/components/Input';
import Text from '~/common/components/Text';

const API_HOST = 'https://kdt.frontend.5th.programmers.co.kr:5007';

interface RegisterData {
  email: string;
  fullName: string;
  password: string;
}

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const validateEmail = (value: string) => {
    const isValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
      value,
    );
    setIsEmailValid(isValid);
  };

  useEffect(() => {
    validateEmail(email);
  }, [email]);

  const registerUser = async (userData: RegisterData) => {
    const response = await fetch(`${API_HOST}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    return response.json();
  };

  const mutation = useMutation({
    mutationFn: (userData: RegisterData) => {
      return registerUser(userData);
    },
  });

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const elements = e.currentTarget;
      const email = elements.email.value;
      const fullName = elements.fullName.value;
      const password = elements.password.value;
      mutation.mutate({ email, fullName, password });
    },
    [mutation],
  );

  return (
    <form onSubmit={handleSubmit}>
      <Group direction="columns" spacing="md">
        <Group direction="columns" spacing="sm">
          <Text size="small" elementType="span">
            이메일
          </Text>
          <Group direction="rows" spacing="sm">
            <Input
              type="email"
              name="email"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
              placeholder="이메일을 입력해주세요."
              disabled={mutation.isPending}
            />

            <Button
              type="button"
              styleType="ghost"
              className="text-sm"
              disabled={!isEmailValid}
            >
              중복 확인
            </Button>
          </Group>
        </Group>
        <Group direction="columns" spacing="sm" className="w-full">
          <Text size="small" elementType="span">
            이름
          </Text>
          <Input
            type="text"
            name="fullName"
            placeholder="이름을 입력해주세요."
            className="w-full"
          />
        </Group>
        <Group direction="columns" spacing="sm" className="w-full">
          <Text size="small" elementType="span">
            비밀번호
          </Text>
          <Input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요."
            className="w-full"
          />
        </Group>
        <Group direction="columns" spacing="sm" className="w-full">
          <Text size="small" elementType="span">
            비밀번호 확인
          </Text>
          <Input
            type="password"
            name="confirmpassword"
            placeholder="비밀번호를 다시 한번 입력해주세요"
            className="w-full"
          />
        </Group>
        <Button
          loading={mutation.isPending}
          type="submit"
          fullwidth={true}
          disabled={mutation.isPending}
        >
          회원가입
        </Button>
      </Group>
    </form>
  );
};
export default RegisterForm;
