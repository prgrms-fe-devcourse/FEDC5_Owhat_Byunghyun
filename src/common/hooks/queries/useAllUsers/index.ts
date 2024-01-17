import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { User } from '~/api/types/userTypes';
import { QUERY_KEY } from '~/constants/queryKey';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const PORT = import.meta.env.VITE_PORT;

const getUsers = async () => {
  const { data } = await axios.get<User[]>(
    `${BASE_URL}:${PORT}/users/get-users`,
  );

  return data;
};

export const useAllUsers = () => {
  const { data: allUsers } = useQuery({
    queryKey: [QUERY_KEY.USER_LIST],
    queryFn: getUsers,
  });

  return { allUsers };
};
