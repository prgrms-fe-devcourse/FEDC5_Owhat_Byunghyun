import Input from '~/common/components/Input';
import Text from '~/common/components/Text';

interface TextInputProps {
  label: string;
  type: string;
  value: string;
  id: string;
  name: string;
  placeholder: string;
  onChange: (value: string) => void;
  isValid: boolean;
  errorText: string;
}

const TextInput = ({
  label,
  type,
  value,
  id,
  name,
  placeholder,
  onChange,
  isValid,
  errorText,
}: TextInputProps) => {
  return (
    <>
      <label htmlFor={id}>
        <Text size="small" elementType="span">
          {label}
        </Text>
      </label>
      <Input
        type={type}
        value={value}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
        className="h-12 w-full px-[1rem]"
      />
      <div className="h">
        {!isValid && value && (
          <Text size="small" className="text-[13px] text-error">
            {errorText}
          </Text>
        )}
      </div>
    </>
  );
};

export default TextInput;
