import { Link } from 'react-router-dom';

import { User } from '~/api/types/userTypes';
import Avatar from '~/common/components/Avatar';
import Group from '~/common/components/Group';
import Text from '~/common/components/Text';
import useDeleteComment from '~/common/hooks/mutations/useDeleteComment';
import { elapsedTime } from '~/utils/time';

import MoreButton from '../MoreButton';

interface CommentListItemProps {
  id: string;
  author: User | string;
  createdAt: string;
  comment: string;
  loginId: string;
  isMyComment: boolean;
}

const CommentListItem = ({
  id,
  author,
  loginId,
  createdAt,
  comment,
  isMyComment,
}: CommentListItemProps) => {
  const mutationDeleteComment = useDeleteComment();

  const handleDeleteComment = () => {
    if (confirm('정말로 삭제하시겠습니까?')) {
      mutationDeleteComment.mutate(id);
    }
  };

  return (
    <Group direction="rows" spacing={14} align="center" className="w-full">
      {typeof author !== 'string' && (
        <Link
          to={loginId === author._id ? '/account' : `/account/${author._id}`}
          className="flex"
        >
          <Avatar src={author.image} size="full" className="h-8 w-8" />
        </Link>
      )}
      <Group direction="columns" spacing={0} className="flex-1">
        <Group direction="rows" spacing="sm" align="center">
          <Text size="xsmall" strong elementType="span">
            {typeof author !== 'string' && author.fullName}
          </Text>
          <span>·</span>
          <Text size="xsmall" elementType="span">
            {elapsedTime(createdAt)}
          </Text>
        </Group>
        <Text size="small">{comment}</Text>
      </Group>
      {isMyComment && (
        <MoreButton type="comment" id={id} handleDelete={handleDeleteComment} />
      )}
    </Group>
  );
};

export default CommentListItem;
