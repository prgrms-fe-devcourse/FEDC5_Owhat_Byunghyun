import { useState } from 'react';

const useUsernameValidation = () => {
  const [username, setUsername] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(false);

  const validateUsername = (value: string) => {
    const hasMinLength = value.length >= 3;

    const hasOnlyKoreanOrEnglish = /^[가-힣a-zA-Z]+$/.test(value);

    const hasAccurateVowelsAndConsonants =
      /^[가-힣]*([ㄱ-ㅎㅏ-ㅣ])*[가-힣]*$/.test(value);

    setIsUsernameValid(
      hasMinLength && hasOnlyKoreanOrEnglish && hasAccurateVowelsAndConsonants,
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
