import Group from '~/common/components/Group';
import Input from '~/common/components/Input';
import Text from '~/common/components/Text';

import usePasswordValidation from '../../hooks/usePasswordValidation';

interface PasswordInputProps {
  onPasswordCompleted: (isValid: boolean) => void;
}

const PasswordInput = ({ onPasswordCompleted }: PasswordInputProps) => {
  const {
    password,
    confirmPassword,
    isPasswordMatch,
    isPasswordValid,
    handlePasswordChange,
    handleConfirmPasswordChange,
  } = usePasswordValidation({ onPasswordCompleted });

  return (
    <>
      <Group direction="columns" spacing="sm" grow={true}>
        <Text size="small" elementType="span">
          비밀번호
        </Text>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={e => handlePasswordChange(e.target.value)}
          placeholder="비밀번호를 입력해주세요."
        />
        {!isPasswordValid && (
          <Text className="text-wrap text-xs text-error">
            비밀번호는 8자 이상이어야 하며, 영문 대/소문자, 숫자, 특수문자를
            포함해야 합니다.
          </Text>
        )}
      </Group>
      <Group direction="columns" spacing="sm" grow={true}>
        <Text size="small" elementType="span">
          비밀번호 확인
        </Text>
        <Input
          type="password"
          name="confirmpassword"
          value={confirmPassword}
          onChange={e => handleConfirmPasswordChange(e.target.value)}
          placeholder="비밀번호를 다시 한번 입력해주세요"
        />
        {!isPasswordMatch && (
          <Text className="text-xs text-error">
            비밀번호가 일치하지 않습니다.
          </Text>
        )}
      </Group>
    </>
  );
};

export default PasswordInput;
