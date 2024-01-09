import Button from '~/common/components/Button';
import Group from '~/common/components/Group';
import Input from '~/common/components/Input';
import Text from '~/common/components/Text';

import useEmailValidation from '../../hooks/useEmailValidation';

interface EmailInputProps {
  mutation?: { isPending: boolean };
  onEmailCompleted: (isValid: boolean) => void;
}

const EmailInput = ({ mutation, onEmailCompleted }: EmailInputProps) => {
  const {
    email,
    isEmailValid,
    isEmailDuplicate,
    emailCheckMessage,
    isEmailCheckComplete,
    handleEmailChange,
    checkDuplicateId,
  } = useEmailValidation({ onEmailCompleted });

  return (
    <>
      <Group direction="columns" spacing="sm" grow={true}>
        <Text size="small" elementType="span">
          이메일
        </Text>
        <Group direction="rows" spacing="sm">
          <Input
            type="email"
            name="email"
            value={email}
            onChange={e => {
              handleEmailChange(e.target.value);
            }}
            placeholder="이메일을 입력해주세요."
            disabled={mutation?.isPending}
            className="grow"
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
    </>
  );
};

export default EmailInput;
