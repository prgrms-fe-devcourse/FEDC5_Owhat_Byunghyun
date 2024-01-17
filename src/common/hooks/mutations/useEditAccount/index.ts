import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { putUserSettings } from '~/api/user';
import Toast from '~/common/components/Toast';
import { QUERY_KEY } from '~/constants/queryKey';

export const useEditAccount = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: putUserSettings,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.USER] });

      Toast.show('계정 정보가 변경되었습니다.');
      navigate('/account');
    },
    onError: error => {
      if (error instanceof Error) console.warn(error.message);
    },
  });

  return mutation;
};
