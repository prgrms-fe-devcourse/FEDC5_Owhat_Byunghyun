import { useState } from 'react';

interface useUsernameValidationParams {
  onFullNameCompleted: (value: boolean) => void;
}

const useUsernameValidation = ({
  onFullNameCompleted,
}: useUsernameValidationParams) => {
  const [username, setUsername] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(false);

  const validateUsername = (value: string) => {
    const hasMinLength = value.length >= 3;

    const hasOnlyKoreanOrEnglishOrDigits = /^[가-힣a-zA-Z0-9]+$/.test(value);

    setIsUsernameValid(hasMinLength && hasOnlyKoreanOrEnglishOrDigits);
    onFullNameCompleted(hasMinLength && hasOnlyKoreanOrEnglishOrDigits);
  };

  return {
    username,
    isUsernameValid,
    setUsername: (value: string) => {
      setUsername(value);
      validateUsername(value);
    },
  };
};

export default useUsernameValidation;

/*
^[가-힣]*: 문자열이 시작되면서 한글이 올 수 있음
([ㄱ-ㅎㅏ-ㅣ가-힣])*: 한글 자음과 모음이 함께 올 수 있음
[a-zA-Z0-9]*$: 영문 대소문자와 숫자가 함께 올 수 있음
 */
