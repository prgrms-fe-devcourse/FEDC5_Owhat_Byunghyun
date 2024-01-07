import Button from '~/common/components/Button';
import Group from '~/common/components/Group';
import Input from '~/common/components/Input';
import Text from '~/common/components/Text';

interface EmailInputProps {
  email: string;
  handleEmailChange: (value: string) => void;
  mutation: { isPending: boolean };
  checkDuplicateId: (email: string) => void;
  isEmailValid: boolean;
  isEmailCheckComplete: boolean;
  isEmailDuplicate: boolean;
  emailCheckMessage: string;
}

const EmailInput = ({
  email,
  handleEmailChange,
  mutation,
  checkDuplicateId,
  isEmailValid,
  isEmailCheckComplete,
  isEmailDuplicate,
  emailCheckMessage,
}: EmailInputProps) => {
  return (
    <>
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
              handleEmailChange(e.target.value);
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
    </>
  );
};

export default EmailInput;
