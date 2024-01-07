import Group from '~/common/components/Group';
import Input from '~/common/components/Input';
import Text from '~/common/components/Text';

import useUsernameValidation from './useNameValidation';

interface UsernameInputProps {
  onFullNameCompleted?: (isValid: boolean) => void;
}

const UsernameInput = ({ onFullNameCompleted }: UsernameInputProps) => {
  const {
    username,
    isUsernameValid,
    setUsername: setUsernameValidation,
  } = useUsernameValidation();

  onFullNameCompleted && onFullNameCompleted(isUsernameValid);

  return (
    <>
      <Group direction="columns" spacing="sm" className="w-full">
        <Text size="small" elementType="span">
          이름
        </Text>
        <Input
          type="text"
          name="fullName"
          value={username}
          onChange={e => setUsernameValidation(e.target.value)}
          placeholder="이름을 입력해주세요."
          className="w-full"
        />
        {!isUsernameValid && (
          <Text size="small">이름을 3글자 이상으로 입력해주세요</Text>
        )}
      </Group>
    </>
  );
};

export default UsernameInput;
