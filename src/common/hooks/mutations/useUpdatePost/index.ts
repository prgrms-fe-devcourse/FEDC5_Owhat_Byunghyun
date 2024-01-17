import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { putPost } from '~/api/post';
import Toast from '~/common/components/Toast';
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
  const navigate = useNavigate();

  const mutationUpdatePost = useMutation({
    mutationFn: (data: putPostProps) => putPost(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.POST_LIST],
      });

      navigate('..', { replace: true });
      Toast.show('수정이 완료되었습니다.');
    },
    onError: error => {
      if (error instanceof Error) console.warn(error.message);
    },
  });

  return mutationUpdatePost;
};

export default useUpdatePost;
