import { useMutation } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';

import { User } from '~/common/api/types';
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
  const [isEmailDuplicate, setIsEmailDuplicate] = useState(false);
  const [emailCheckMessage, setEmailCheckMessage] = useState('');
  const [isEmailCheckComplete, setIsEmailCheckComplete] = useState(false);
  const [username, setUsername] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(false);

  const validateEmail = (value: string) => {
    const isValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
      value,
    );
    setIsEmailValid(isValid);
  };

  useEffect(() => {
    validateEmail(email);
  }, [email]);

  const checkDuplicateId = async (email: string) => {
    try {
      const response = await fetch(`${API_HOST}/users/get-users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('서버에서 오류 응답');
      }

      const users: User[] = await response.json();
      const isDuplicate = users.some(user => user.email === email);

      setIsEmailDuplicate(isDuplicate);

      if (isDuplicate) {
        setEmailCheckMessage('이메일이 이미 사용 중입니다.');
      } else {
        setIsEmailCheckComplete(true);
        setEmailCheckMessage('가입 가능한 이메일입니다.');
      }
    } catch (error) {
      console.error('에러 발생:', (error as Error).message);
    }
  };

  const validateUsername = (value: string) => {
    const hasMinLength = value.length >= 3;

    const hasOnlyKoreanOrEnglish = /^[가-힣a-zA-Z]+$/.test(value);

    const hasAccurateVowelsAndConsonants =
      /^[가-힣]*([ㄱ-ㅎㅏ-ㅣ])*[가-힣]*$/.test(value);

    setIsUsernameValid(
      hasMinLength && hasOnlyKoreanOrEnglish && hasAccurateVowelsAndConsonants,
    );
  };

  useEffect(() => {
    validateUsername(username);
  }, [username]);

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

      if (!isEmailValid || isEmailDuplicate || isUsernameValid) return;

      const elements = e.currentTarget;
      const email = elements.email.value;
      const fullName = elements.fullName.value;
      const password = elements.password.value;
      mutation.mutate({ email, fullName, password });
    },
    [mutation, isEmailValid, isEmailDuplicate, isUsernameValid],
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
                setIsEmailDuplicate(false);
                setEmailCheckMessage('');
                setIsEmailCheckComplete(false);
              }}
              placeholder="이메일을 입력해주세요."
              disabled={mutation.isPending}
            />

            <Button
              onClick={() => checkDuplicateId(email)}
              type="button"
              styleType="ghost"
              className="text-sm"
              disabled={
                !isEmailValid || (isEmailCheckComplete && !isEmailDuplicate)
              }
            >
              중복 확인
            </Button>
          </Group>
          {emailCheckMessage && (
            <Text
              size="small"
              className={isEmailDuplicate ? 'text-error' : 'text-success'}
            >
              {emailCheckMessage}
            </Text>
          )}
        </Group>
        <Group direction="columns" spacing="sm" className="w-full">
          <Text size="small" elementType="span">
            이름
          </Text>
          <Input
            type="text"
            name="fullName"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="이름을 입력해주세요."
            className="w-full"
          />
          {!isUsernameValid && (
            <Text size="small">이름을 3글자 이상으로 입력해주세요</Text>
          )}
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
