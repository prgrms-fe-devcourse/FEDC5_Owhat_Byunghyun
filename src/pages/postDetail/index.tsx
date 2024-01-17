import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ArrowBackButton from '~/common/components/ArrowBackButton';
import useCreateComment from '~/common/hooks/mutations/useCreateComment';
import useDeletePost from '~/common/hooks/mutations/useDeletePost';
import useAuthUser from '~/common/hooks/queries/useAuthUser';
import usePostDetail from '~/common/hooks/queries/usePostDetail';
import useLayout from '~/common/hooks/useLayout';

import PostDetailComponent from './components/PostDetailComponent';
import PostDetailSkeleton from './components/PostDetailSkeleton';

const PostDetailPage = () => {
  const { postId = '' } = useParams();
  const navigate = useNavigate();

  const { postDetailData, postDetailLoading } = usePostDetail(postId);
  const { user } = useAuthUser();
  const { changeMeta, changeBottomNavigator } = useLayout();
  const mutationDeletePost = useDeletePost();
  const mutationCreateComment = useCreateComment({
    postUserId: !postDetailLoading && postDetailData.author._id,
    authUserId: user?._id ? user._id : '',
  });

  const handleDeletePost = async (postId: string) => {
    if (confirm('정말로 삭제하시겠습니까?')) {
      mutationDeletePost.mutate(postId);
      navigate('/');
    }
  };

  const handleEditPost = () => {
    //TODO: 포스트 수정페이지로 가는 함수
  };
  const handleSubmitComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const elements = e.currentTarget;
    const comment = elements.comment.value;
    e.currentTarget.comment.value = '';

    if (!comment) return;

    mutationCreateComment.mutate({
      comment,
      postId: postDetailData._id,
    });
  };

  useEffect(() => {
    if (!postDetailLoading) {
      changeBottomNavigator(false);
      changeMeta({
        title: postDetailData.channel.name,
        left: <ArrowBackButton />,
        right: <></>,
      });
    }
  }, [postDetailLoading, postDetailData]);

  if (postDetailLoading) return <PostDetailSkeleton />;

  return (
    <section className="overflow-hidden">
      <div className="scroll-none flex h-full flex-col gap-12 overflow-y-auto p-1">
        <PostDetailComponent
          postDetailData={postDetailData}
          comments={postDetailData.comments}
          handleDeletePost={handleDeletePost}
          handleEditPost={handleEditPost}
          handleSubmitComment={handleSubmitComment}
          user={user!}
          commentSubmitPending={mutationCreateComment.isPending}
        />
      </div>
    </section>
  );
};

export default PostDetailPage;
