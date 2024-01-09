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

    const hasAccurateVowelsAndConsonants =
      /^[가-힣]*([ㄱ-ㅎㅏ-ㅣ])*[가-힣0-9]*$/.test(value) ||
      /^[a-zA-Z0-9]+$/.test(value);

    setIsUsernameValid(
      hasMinLength &&
        hasOnlyKoreanOrEnglishOrDigits &&
        hasAccurateVowelsAndConsonants,
    );
    onFullNameCompleted(
      hasMinLength &&
        hasOnlyKoreanOrEnglishOrDigits &&
        hasAccurateVowelsAndConsonants,
    );
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