import Group from '~/common/components/Group';
import Input from '~/common/components/Input';
import Text from '~/common/components/Text';

import useUsernameValidation from '../../hooks/useNameValidation';

interface UsernameInputProps {
  onFullNameCompleted: (isValid: boolean) => void;
}

const UsernameInput = ({ onFullNameCompleted }: UsernameInputProps) => {
  const {
    username,
    isUsernameValid,
    setUsername: setUsernameValidation,
  } = useUsernameValidation({ onFullNameCompleted });

  return (
    <Group direction="columns" spacing="sm" grow={true}>
      <Text size="small" elementType="span">
        이름
      </Text>
      <Input
        type="text"
        name="fullName"
        value={username}
        onChange={e => setUsernameValidation(e.target.value)}
        placeholder="이름을 입력해주세요."
      />
      {!isUsernameValid && username && (
        <Text className="text-xs">
          이름을 3글자 이상으로 올바르게 입력해주세요.
        </Text>
      )}
    </Group>
  );
};

export default UsernameInput;
