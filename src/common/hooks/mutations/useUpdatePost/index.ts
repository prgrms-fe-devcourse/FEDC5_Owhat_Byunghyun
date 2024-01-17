import { useMutation, useQueryClient } from '@tanstack/react-query';

import { putPost } from '~/api/post';
// import { Post } from '~/api/types/postTypes';
import { QUERY_KEY } from '~/constants/queryKey';

export interface putPostProps {
  title: string;
  image: File;
  postId: string;
  channelId: string;
  imageToDeletePublicId?: string;
}

const useUpdatePost = () => {
  const queryClient = useQueryClient();

  const mutationUpdatePost = useMutation({
    mutationFn: (data: putPostProps) => putPost(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.POST_LIST],
      });

      alert('수정이 완료되었습니다.');
    },
    onError: error => {
      if (error instanceof Error) console.warn(error.message);
    },
  });

  return mutationUpdatePost;
};

export default useUpdatePost;
