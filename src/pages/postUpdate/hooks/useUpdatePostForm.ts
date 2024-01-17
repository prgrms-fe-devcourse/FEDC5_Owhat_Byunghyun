import { FormEvent, useState } from 'react';

import useUpdatePost from '~/common/hooks/mutations/useUpdatePost';
interface useUpdatePostFormProps {
  channelId: string;
  postId: string;
}

export const useUpdatePostForm = ({
  channelId,
  postId,
}: useUpdatePostFormProps) => {
  const [formState, setFormState] = useState({
    postImage: new File([], ''),
  });

  const handleChangePostImage = (file: File, name: string) => {
    setFormState(prev => ({ ...prev, [name]: file }));
  };

  const updatePost = useUpdatePost();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { postTitle, content } = e.currentTarget;
    const parsedTitle = JSON.stringify({
      title: postTitle.value,
      content: content.value,
    });

    updatePost.mutate({
      title: parsedTitle,
      image: formState.postImage,
      channelId: channelId,
      postId: postId,
      imageToDeletePublicId: '',
    });
  };

  return {
    formState,
    handleChangePostImage,
    handleSubmit,
  };
};
