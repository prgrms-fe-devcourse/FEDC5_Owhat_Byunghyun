import Group from '~/common/components/Group';
import Text from '~/common/components/Text';

import RegisterForm from './components/RegisterForm';

const register = () => {
  return (
    <Group direction="columns" spacing="md">
      <Text size="xlarge">회원가입</Text>

      <RegisterForm />
    </Group>
  );
};

export default register;
