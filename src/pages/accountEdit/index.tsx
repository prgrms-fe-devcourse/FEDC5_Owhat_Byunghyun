import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '~/common/components/Button';
import Group from '~/common/components/Group';
import Input from '~/common/components/Input';
import Text from '~/common/components/Text';
import { useEditAccount } from '~/common/hooks/mutations/useEditAccount';
import { useUploadCoverImage } from '~/common/hooks/mutations/useUploadCoverImage';
import { useUploadImage } from '~/common/hooks/mutations/useUploadImage';
import { useAuthUser } from '~/common/hooks/queries/useAuthUser';
import useLayout from '~/common/hooks/useLayout';

import EditAccountImages from './components/EditAccountImages';

const AccountEditPage = () => {
  const { changeMeta } = useLayout();

  useEffect(() => {
    changeMeta({
      title: '프로필 수정',
      left: <></>,
      right: <></>,
    });
  }, []);

  // 추후 mainpage 브랜치 병합 후 동작
  const { authUser } = useAuthUser();
  const navigate = useNavigate();

  const editAccount = useEditAccount(authUser._id);

  const [inputValue, setInputValue] = useState('');
  const [coverImageFile, setCoverImageFile] = useState<File>();
  const [imageFile, setImageFile] = useState<File>();

  const uploadImage = useUploadImage();
  const uploadCoverImage = useUploadCoverImage();

  if (!authUser) {
    navigate('/login');
  }

  const { fullName, image, coverImage } = authUser;

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const handleSubmit = (event: React.MouseEvent) => {
    event?.preventDefault();
    editAccount.mutate({
      fullName: inputValue,
    });

    if (coverImageFile) {
      uploadCoverImage.mutate(coverImageFile);
    }

    if (imageFile) {
      uploadImage.mutate(imageFile);
    }
  };

  return (
    <form className="flex flex-col gap-large px-small">
      <EditAccountImages
        image={image}
        coverImage={coverImage}
        setCoverImageFile={setCoverImageFile}
        setImageFile={setImageFile}
      />
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
            type="button"
            fullwidth
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
