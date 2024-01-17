import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ArrowBackButton from '~/common/components/ArrowBackButton';
import Button from '~/common/components/Button';
import Icon from '~/common/components/Icon';
import Image from '~/common/components/Image';
import Input from '~/common/components/Input';
import Loading from '~/common/components/Loading';
import Text from '~/common/components/Text';
import Textarea from '~/common/components/Textarea';
import Upload from '~/common/components/Upload';
import useChannelList from '~/common/hooks/queries/useChannelList';
import usePostDetail from '~/common/hooks/queries/usePostDetail';
import useLayout from '~/common/hooks/useLayout';

import useChannelInfo from '../postCreate/hooks/useChannelInfo';
import { useUpdatePostForm } from './hooks/useUpdatePostForm';

export default function PostUpdatePage() {
  const { postId = '' } = useParams();

  const { channelId } = useChannelInfo();

  const { channelList } = useChannelList();
  const currentChannel = channelList.find(channel => channel._id === channelId);

  const { postDetailData: post, postDetailLoading } = usePostDetail(postId);
  const { handleChangePostImage, handleSubmit } = useUpdatePostForm({
    channelId,
    postId,
  });

  const parsedTitle = JSON.parse(post.title);
  const defaultTitle = parsedTitle.title;
  const defaultContent = parsedTitle.content || '';

  const { changeMeta, changeBottomNavigator } = useLayout();

  useEffect(() => {
    changeBottomNavigator(false);
    changeMeta({
      title: currentChannel?.name,
      left: <ArrowBackButton />,
      right: <Button form="updatePost">수정</Button>,
    });
  }, []);

  if (postDetailLoading) {
    return <Loading />;
  }

  return (
    <section>
      <form
        id="updatePost"
        onSubmit={handleSubmit}
        className="scroll-none h-full overflow-y-auto"
      >
        <Input
          name="postTitle"
          hasBorder={false}
          defaultValue={defaultTitle}
          placeholder="제목을 입력해주세요!"
          className="w-full text-xl placeholder:text-xl"
        />
        <Upload
          onChange={file => {
            if (!file) return;
            handleChangePostImage(file, 'postImage');
          }}
        >
          {(src, file) => (
            <div>
              {post.image ? (
                <>
                  <div className="flex px-small py-3">
                    <Icon id="add-photo" size={32} />
                    <Text
                      elementType="span"
                      size="small"
                      className="line-clamp-1 self-center pl-3"
                    >
                      {file ? file.name : '이미지 수정'}
                    </Text>
                  </div>
                  <Image
                    src={post.image}
                    imgWidth="full"
                    imgHeight="auto"
                    lazy={true}
                    threshold={0}
                  />
                </>
              ) : (
                <>
                  <div className="flex px-small py-3">
                    <Icon id="add-photo" size={32} />
                    <Text
                      elementType="span"
                      size="small"
                      className="line-clamp-1 self-center pl-3"
                    >
                      {file ? file.name : '이미지 추가'}
                    </Text>
                  </div>
                  {src && (
                    <Image
                      src={src}
                      imgWidth="full"
                      imgHeight="auto"
                      lazy={true}
                      threshold={0}
                    />
                  )}
                </>
              )}
            </div>
          )}
        </Upload>
        <Textarea
          name="content"
          defaultValue={defaultContent}
          size="lg"
          placeholder="나누고 싶은 이야기를 공유해보세요!"
          className="scroll-none overflow-y-auto overscroll-auto px-small pt-5"
        />
      </form>
    </section>
  );
}
