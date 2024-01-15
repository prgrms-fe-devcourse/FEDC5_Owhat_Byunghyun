import { useSuspenseQuery } from '@tanstack/react-query';
import axios from 'axios';

import { User } from '~/api/types/userTypes';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const PORT = import.meta.env.VITE_PORT;
// 추후 api 폴더 내 user.ts로 이동할 예정임
const getUsers = async () => {
  const { data } = await axios.get<User[]>(
    `${BASE_URL}:${PORT}/users/get-users`,
  );

  return data;
};

export const useAllUsers = () => {
  const { data: allUsers } = useSuspenseQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  return { allUsers };
};