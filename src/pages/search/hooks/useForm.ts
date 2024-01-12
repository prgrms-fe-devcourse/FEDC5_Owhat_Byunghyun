import { ChangeEvent, FormEvent, useState } from 'react';

import type { ValuesObj } from '../type.ts';

type OnSubmitFn = (values: ValuesObj) => void;
type ValidateFn = (values: ValuesObj) => ValuesObj;

interface useFormParams {
  initialValues?: ValuesObj;
  onSubmit: OnSubmitFn;
  validate: ValidateFn;
}

const useForm = ({ initialValues = {}, onSubmit, validate }: useFormParams) => {
  const [values, setValues] = useState<ValuesObj>(initialValues);
  const [errors, setErrors] = useState<ValuesObj>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();

    const newErrors = validate ? validate(values) : {};

    if (Object.keys(newErrors).length === 0) {
      await onSubmit(values);
    }

    setErrors(newErrors);
    setIsLoading(false);
  };

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
