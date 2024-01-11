import { useQuery } from '@tanstack/react-query';

import { getUser } from '~/api/user';
import { QUERY_KEY } from '~/constants/queryKey';

const useUser = () => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.USER],
    queryFn: getUser,
  });

  return { user: data };
};

export default useUser;
