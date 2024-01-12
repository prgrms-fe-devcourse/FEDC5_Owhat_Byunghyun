import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { postJoinUser } from '~/api/register';

interface RegisterData {
  email: string;
  fullName: string;
  password: string;
}

export const useRegisterMutation = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (userData: RegisterData) => postJoinUser(userData),
    onSuccess: () => navigate('/login'),
  });

  return mutation;
};
