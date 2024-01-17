import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ArrowBackButton from '~/common/components/ArrowBackButton';
import Loading from '~/common/components/Loading';
import usePostDetail from '~/common/hooks/queries/usePostDetail';
import useLayout from '~/common/hooks/useLayout';

import PostForm from '../postCreate/components/PostForm';
import UploadButton from '../postCreate/components/UploadButton';
import useChannelInfo from '../postCreate/hooks/useChannelInfo';
import { useUpdatePostForm } from './hooks/useUpdatePostForm';

export default function PostUpdatePage() {
  const { postId = '' } = useParams();

  const { channelId, channelName } = useChannelInfo();

  const { postDetailData: post, postDetailLoading } = usePostDetail(postId);
  const {
    formState,
    handleChangePostContent,
    handleChangePostTitle,
    handleChangePostImage,
    handleSubmit,
  } = useUpdatePostForm({ channelId, postId, post });

  const { changeMeta, changeBottomNavigator } = useLayout();

  useEffect(() => {
    changeBottomNavigator(false);
    changeMeta({
      title: `${channelName}`,
      left: <ArrowBackButton />,
      right: (
        <UploadButton
          isEdit
          onSubmit={event => {
            handleSubmit(event);
          }}
        />
      ),
    });
  }, []);

  if (postDetailLoading) {
    return <Loading />;
  }

  return (
    <section className="">
      <PostForm
        formState={formState}
        handleChangePostContent={handleChangePostContent}
        handleChangePostTitle={handleChangePostTitle}
        handleChangePostImage={handleChangePostImage}
        channelId={channelId}
        post={post}
      />
    </section>
  );
}
