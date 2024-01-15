import { useQuery } from '@tanstack/react-query';

import { getMessageList } from '~/api/message';
import { QUERY_KEY } from '~/constants/queryKey';

const useMessageList = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY.MESSAGE],
    queryFn: getMessageList,
  });

  return {
    messageList: data || [],
    isLoading,
  };
};

export default useMessageList;
