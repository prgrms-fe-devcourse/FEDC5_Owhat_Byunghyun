import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { postPostCreate } from '~/api/post';
import { QUERY_KEY } from '~/constants/queryKey';

const useCreatePost = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: ({
      title,
      file,
      channelId,
    }: {
      title: string;
      file: File;
      channelId: string;
    }) => postPostCreate(title, file, channelId),
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.POST_LIST] });
      navigate(`/?channel=${data.channel._id}`);
    },
    onError: error => {
      if (error instanceof Error) console.warn(error.message);
    },
  });

  return mutation;
};

export default useCreatePost;
