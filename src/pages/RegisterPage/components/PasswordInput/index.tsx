import Group from '~/common/components/Group';
import Input from '~/common/components/Input';
import Text from '~/common/components/Text';

import usePasswordValidation from './usePasswordValidation';

interface PasswordInputProps {
  onPasswordCompleted?: (isValid: boolean) => void;
}

const PasswordInput = ({ onPasswordCompleted }: PasswordInputProps) => {
  const {
    password,
    confirmPassword,
    isPasswordMatch,
    handlePasswordChange,
    handleConfirmPasswordChange,
  } = usePasswordValidation();

  onPasswordCompleted &&
    onPasswordCompleted(password.length >= 4 && isPasswordMatch);

  return (
    <>
      <Group direction="columns" spacing="sm" className="w-full">
        <Text size="small" elementType="span">
          비밀번호
        </Text>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={e => handlePasswordChange(e.target.value)}
          placeholder="비밀번호를 입력해주세요."
          className="w-full"
        />
      </Group>
      <Group direction="columns" spacing="sm" className="w-full">
        <Text size="small" elementType="span">
          비밀번호 확인
        </Text>
        <Input
          type="password"
          name="confirmpassword"
          value={confirmPassword}
          onChange={e => handleConfirmPasswordChange(e.target.value)}
          placeholder="비밀번호를 다시 한번 입력해주세요"
          className="w-full"
        />
        {!isPasswordMatch && (
          <Text size="small" className="text-error">
            비밀번호가 일치하지 않습니다.
          </Text>
        )}
      </Group>
    </>
  );
};

export default PasswordInput;
