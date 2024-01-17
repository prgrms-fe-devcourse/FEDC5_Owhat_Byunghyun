import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { deletePost } from '~/api/post';
import Toast from '~/common/components/Toast';

const useDeletePost = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutationDeletePost = useMutation({
    mutationFn: (postId: string) => deletePost(postId),
    onSuccess: data => {
      queryClient.invalidateQueries();
      navigate(`/?channel=${data.channel}`);
    },
    onError: () => {
      Toast.show('게시글 삭제에 실패했습니다.', 2000);
    },
  });

  return mutationDeletePost;
};

export default useDeletePost;
