import { instance } from '.';

interface RegisterData {
  email: string;
  fullName: string;
  password: string;
}

export const getUserList = async () => {
  const { data } = await instance.get('/users/get-users');
  return data;
};

export const postJoinUser = async (userData: RegisterData) => {
  return await instance.post('/signup', userData);
};
