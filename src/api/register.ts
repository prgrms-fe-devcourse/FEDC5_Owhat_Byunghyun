import { instance } from '.';

interface RegisterData {
  email: string;
  fullName: string;
  password: string;
}

export const getUserList = async () => {
  return await instance.get('/users/get-users');
};

export const postJoinUser = async (userData: RegisterData) => {
  return await instance.post('/signup', userData);
};
