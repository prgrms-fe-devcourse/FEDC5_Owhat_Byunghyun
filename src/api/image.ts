import { instance } from '~/api';

import { User } from './types/userTypes';

export const postUploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append('image', file);
  formData.append('isCover', 'false');

  await instance.post<User>(`/users/upload-photo`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const postUploadCoverImage = async (file: File) => {
  const formData = new FormData();
  formData.append('image', file);
  formData.append('isCover', 'true');

  await instance.post<User>(`/users/upload-photo`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
