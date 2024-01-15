import { ChangeEvent, useEffect, useState } from 'react';

interface FormValues {
  [key: string]: string;
}

interface FormIsValid {
  [key: string]: boolean;
}

interface FormValidate {
  [key: string]: (value: string) => boolean;
}

interface useFormParams {
  initialValues: FormValues;
  isValidinitialValues: FormIsValid;
  validate: FormValidate;
}

const useForm = ({
  initialValues,
  isValidinitialValues,
  validate,
}: useFormParams) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [isValid, setIsValid] = useState<FormIsValid>(isValidinitialValues);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    const result = validate[name](value);

    setValues(prevValues => ({ ...prevValues, [name]: value }));
    setIsValid(prevIsValid => ({ ...prevIsValid, [name]: result }));

    // confirmPassword 필드에 대한 유효성 검사 함수가 등록되어 있다면 실행 - 재사용성 감소의 원인
    if (name === 'password' && validate['confirmPassword']) {
      const confirmPasswordResult = value === values.confirmPassword;
      setIsValid(prevIsValid => ({
        ...prevIsValid,
        confirmPassword: confirmPasswordResult,
      }));
    }
  };

  const areAllValid = (obj: FormIsValid): boolean => {
    return Object.values(obj).every(value => value);
  };

  useEffect(() => {
    const result = areAllValid(isValid);
    setIsCompleted(result);
  }, [isValid]);

  return {
    values,
    isValid,
    isCompleted,
    handleChange,
  };
};

export default useForm;
