import { ReactNode } from 'react';

import Group from '~/common/components/Group';
import Input from '~/common/components/Input';
import Text from '~/common/components/Text';

interface FormFieldProps {
  type: string;
  name: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isValid: boolean;
  errorMessage?: string;
  placeholder: string;
  right?: ReactNode;
}

const FormField = ({
  type,
  name,
  label,
  onChange,
  value,
  isValid,
  errorMessage,
  placeholder,
  right,
}: FormFieldProps) => {
  return (
    <Group direction="columns" spacing="sm" grow={true} className="relative">
      <label htmlFor={name}>
        <Text size="small" elementType="span">
          {label}
        </Text>
      </label>
      <div className="relative w-full">
        <Input
          type={type}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          className="h-11 w-full pr-10"
        />
        {right}
        {value && !isValid && (
          <Text className="text-sm text-error">
            {errorMessage || `올바른 ${label}을(를) 입력하세요.`}
          </Text>
        )}
      </div>
    </Group>
  );
};

export default FormField;
