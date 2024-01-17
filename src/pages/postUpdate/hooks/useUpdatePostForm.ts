import { useState } from 'react';

import { Post } from '~/api/types/postTypes';
import useUpdatePost from '~/common/hooks/mutations/useUpdatePost';
interface useUpdatePostFormProps {
  channelId: string;
  postId: string;
  post: Post;
}

export const useUpdatePostForm = ({
  channelId,
  postId,
  post,
}: useUpdatePostFormProps) => {
  const [formState, setFormState] = useState(() => {
    const postObj = { title: post.title, content: '내용 없음' };

    if (post.title.includes('content')) {
      const { title, content } = JSON.parse(post.title as string);

      postObj.title = title;
      postObj.content = content;
    }

    return {
      title: postObj.title,
      content: postObj.content,
      postImage: new File([], ''),
    };
  });

  const handleChangePostTitle = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFormState(prev => ({ ...prev, title: event.target.value }));
  };

  const handleChangePostImage = (file: File, name: string) => {
    setFormState(prev => ({ ...prev, [name]: file }));
  };

  const handleChangePostContent = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setFormState({ ...formState, content: event.target.value });
  };

  const updatePost = useUpdatePost();

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    const title = JSON.stringify({
      title: formState.title,
      content: formState.content,
    });

    updatePost.mutate({
      title,
      image: formState.postImage,
      channelId: channelId,
      postId: postId,
      imageToDeletePublicId: '',
    });
  };

  return {
    formState,
    handleChangePostTitle,
    handleChangePostImage,
    handleChangePostContent,
    handleSubmit,
  };
};
