import { useCallback, useState } from 'react';

import useUploadPost from '~/common/hooks/mutations/useUploadPostImage';

const useUpdatePostForm = (channelId: string) => {
  const [formState, setFormState] = useState({
    title: '',
    content: '',
    postImage: new File([], ''),
    channelId,
  });

  const handleUploadPostTitle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormState(prev => ({ ...prev, title: event.target.value }));
    },
    [setFormState],
  );

  const handleUploadPostImage = (file: File, name: string) => {
    setFormState(prev => ({ ...prev, [name]: file }));
  };

  const handleUploadPostContent = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setFormState(prev => ({ ...prev, content: event.target.value }));
    },
    [setFormState],
  );

  const uploadPost = useUploadPost();

  const handleUploadPost = () => {
    const title = JSON.stringify({
      title: formState.title,
      content: formState.content,
    });
    uploadPost.mutate({
      title,
      file: formState.postImage,
      channelId: formState.channelId,
    });
  };

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    handleUploadPost();
  };

  return {
    formState,
    handleUploadPostTitle,
    handleUploadPostImage,
    handleUploadPostContent,
    handleSubmit,
  };
};

export default useUpdatePostForm;
