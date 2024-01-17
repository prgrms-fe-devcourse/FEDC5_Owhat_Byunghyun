import { useCallback, useState } from 'react';

import useCreatePost from '~/common/hooks/mutations/useCreatePost';

const useCreatePostForm = (channelId: string) => {
  const [formState, setFormState] = useState({
    title: '',
    content: '',
    postImage: new File([], ''),
    channelId,
  });

  const handleCreatePostTitle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormState(prev => ({ ...prev, title: event.target.value }));
    },
    [setFormState],
  );

  const handleCreatePostImage = (file: File, name: string) => {
    setFormState(prev => ({ ...prev, [name]: file }));
  };

  const handleCreatePostContent = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setFormState(prev => ({ ...prev, content: event.target.value }));
    },
    [setFormState],
  );

  const createPost = useCreatePost();

  const handleCreatePost = () => {
    const title = JSON.stringify({
      title: formState.title,
      content: formState.content,
    });
    createPost.mutate({
      title,
      file: formState.postImage,
      channelId: formState.channelId,
    });
  };

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    handleCreatePost();
  };

  return {
    formState,
    handleCreatePostTitle,
    handleCreatePostImage,
    handleCreatePostContent,
    handleSubmit,
  };
};

export default useCreatePostForm;
