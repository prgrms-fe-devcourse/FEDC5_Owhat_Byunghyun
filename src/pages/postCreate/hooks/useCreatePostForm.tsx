import { FormEvent, useState } from 'react';

import useCreatePost from '~/common/hooks/mutations/useCreatePost';

const useCreatePostForm = (channelId: string) => {
  const [formState, setFormState] = useState({
    postImage: new File([], ''),
  });

  const handleCreatePostImage = (file: File, name: string) => {
    setFormState(prev => ({ ...prev, [name]: file }));
  };

  const createPost = useCreatePost();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { postTitle, content } = e.currentTarget;

    const parsedTitle = JSON.stringify({
      title: postTitle.value,
      content: content.value,
    });

    createPost.mutate({
      title: parsedTitle,
      file: formState.postImage,
      channelId,
    });
  };

  return {
    formState,
    handleCreatePostImage,
    handleSubmit,
  };
};

export default useCreatePostForm;
