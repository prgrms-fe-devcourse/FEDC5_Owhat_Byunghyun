import { useState } from 'react';

// import { useNavigate } from 'react-router-dom';
import { User } from '~/api/types/userTypes';
import { useEditAccount } from '~/common/hooks/mutations/useEditAccount';
import { useUploadCoverImage } from '~/common/hooks/mutations/useUploadCoverImage';
import { useUploadImage } from '~/common/hooks/mutations/useUploadImage';

interface UpdateAccountFormProps {
  authUser: User;
}

export const useUpdateAccountForm = ({ authUser }: UpdateAccountFormProps) => {
  const { fullName } = authUser;
  // const navigate = useNavigate();

  const [formState, setFormState] = useState({
    inputValue: fullName,
    coverImageFile: new File([], ''),
    imageFile: new File([], ''),
  });

  const editAccount = useEditAccount();
  const uploadImage = useUploadImage();
  const uploadCoverImage = useUploadCoverImage();

  const handleEditAccount = () => {
    editAccount.mutate({
      fullName: formState.inputValue,
    });
  };

  const handleUploadCoverImage = () => {
    if (!formState.coverImageFile || !formState.coverImageFile.name) return;

    uploadCoverImage.mutate(formState.coverImageFile);
  };

  const handleUploadImage = () => {
    if (!formState.imageFile || !formState.imageFile.name) return;

    uploadImage.mutate(formState.imageFile);
  };

  const handleSubmit = (event: React.MouseEvent) => {
    event?.preventDefault();
    handleEditAccount();
    handleUploadCoverImage();
    handleUploadImage();

    // accountpage와 병합 후 주석 해제
    // navigate(`/account/${_id}`);
  };

  return {
    formState,
    setFormState,
    handleSubmit,
  };
};
