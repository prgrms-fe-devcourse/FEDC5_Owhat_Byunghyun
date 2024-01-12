import { useState } from 'react';

import { useEditAccount } from '~/common/hooks/mutations/useEditAccount';
import { useUploadCoverImage } from '~/common/hooks/mutations/useUploadCoverImage';
import { useUploadImage } from '~/common/hooks/mutations/useUploadImage';

interface UpdateAccountFormProps {
  userId: string;
}

export const useUpdateAccountForm = ({ userId }: UpdateAccountFormProps) => {
  const [formState, setFormState] = useState({
    inputValue: '',
    coverImageFile: new File([], ''),
    imageFile: new File([], ''),
  });

  const editAccount = useEditAccount(userId);
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
  };

  return {
    formState,
    setFormState,
    handleSubmit,
  };
};
