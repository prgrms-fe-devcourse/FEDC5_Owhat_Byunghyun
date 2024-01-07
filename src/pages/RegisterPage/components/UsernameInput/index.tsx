import Group from '~/common/components/Group';
import Input from '~/common/components/Input';
import Text from '~/common/components/Text';

interface UsernameInput {
  username: string;
  setUsernameValidation: (value: string) => void;
  isUsernameValid: boolean;
}

const UsernameInput = ({
  username,
  setUsernameValidation,
  isUsernameValid,
}: UsernameInput) => {
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
