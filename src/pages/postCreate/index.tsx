import { useEffect } from 'react';

import ArrowBackButton from '~/common/components/ArrowBackButton';
import Icon from '~/common/components/Icon';
import Image from '~/common/components/Image';
import Input from '~/common/components/Input';
import Text from '~/common/components/Text';
import Textarea from '~/common/components/Textarea';
import Upload from '~/common/components/Upload';
import useLayout from '~/common/hooks/useLayout';

import UploadButton from './components/UploadButton';
import useChannelInfo from './hooks/useChannelInfo';
import useUpdatePostForm from './hooks/useUpdatePostForm';

export default function PostCreatePage() {
  const { channelId, channelName } = useChannelInfo();

  const {
    formState,
    handleUploadPostTitle,
    handleUploadPostImage,
    handleUploadPostContent,
    handleSubmit,
  } = useUpdatePostForm(channelId);

  const { changeMeta } = useLayout();

  useEffect(() => {
    changeMeta({
      title: `${channelName}`,
      left: <ArrowBackButton />,
      right: <UploadButton onSubmit={handleSubmit} />,
    });
  }, [formState]);

  return (
    <section className="">
      <form className="scroll-none h-full overflow-y-auto">
        <Input
          hasBorder={false}
          placeholder="제목을 입력해주세요!"
          className="w-full text-xl placeholder:text-xl"
          onChange={handleUploadPostTitle}
          value={formState.title}
        />
        <Upload
          onChange={file => {
            if (!file) return;
            handleUploadPostImage(file, 'postImage');
          }}
        >
          {(src, file) => (
            <div>
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
            </div>
          )}
        </Upload>
        <Textarea
          size="lg"
          placeholder="나누고 싶은 이야기를 공유해보세요!"
          className="scroll-none overflow-y-auto overscroll-auto px-small pt-5"
          onChange={handleUploadPostContent}
          value={formState.content}
        />
      </form>
    </section>
  );
}
