import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '~/common/components/Button';
import Group from '~/common/components/Group';
import Input from '~/common/components/Input';
import Text from '~/common/components/Text';
import { useEditAccount } from '~/common/hooks/mutations/useEditAccount';
import { useAuthUser } from '~/common/hooks/queries/useAuthUser';
import useLayout from '~/common/hooks/useLayout';

import AccountImages from '../account/components/AccountImages';

const AccountEditPage = () => {
  const { authUser } = useAuthUser();
  const { changeMeta } = useLayout();
  const navigate = useNavigate();

  const mutation = useEditAccount(authUser?._id);

  useEffect(() => {
    changeMeta({
      title: '프로필 수정',
      left: <></>,
      right: <></>,
    });
  }, []);

  const [inputValue, setInputValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const trimmedInputValue = inputValue.trim();
    trimmedInputValue.length >= 2 ? setIsDisabled(true) : setIsDisabled(false);
  }, [inputValue]);

  if (!authUser) {
    navigate('/login');
  }

  const { fullName, image, coverImage } = authUser;

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const handleSubmit = () => {
    mutation.mutate({
      fullName: inputValue,
    });
  };

  return (
    <form className="flex flex-col gap-large px-small">
      <AccountImages isEdit={true} image={image} coverImage={coverImage} />
      <Group spacing={'sm'} direction={'columns'} className="mt-large" grow>
        <Text size={'small'}>새로운 닉네임</Text>
        <Input
          defaultValue={fullName}
          className=" text-gray-400"
          placeholder="새로운 닉네임을 입력해주세요."
          onChange={handleChangeInput}
        />
        <Text className="mt-large font-thin text-primary hover:underline">
          <Link to={'/account/edit/password'}>내 비밀번호 변경</Link>
        </Text>
        <div className="fixed bottom-0 left-0 p">
          <Button
            type="submit"
            fullwidth
            disabled={!isDisabled}
            className="max-w-layout"
            onClick={handleSubmit}
          >
            저장하기
          </Button>
        </div>
      </Group>
    </form>
  );
};

export default AccountEditPage;
