import { useEffect } from 'react';

import ArrowBackButton from '~/common/components/ArrowBackButton';
import Button from '~/common/components/Button';
import Icon from '~/common/components/Icon';
import Image from '~/common/components/Image';
import Input from '~/common/components/Input';
import Text from '~/common/components/Text';
import Textarea from '~/common/components/Textarea';
import Upload from '~/common/components/Upload';
import useChannelList from '~/common/hooks/queries/useChannelList';
import useLayout from '~/common/hooks/useLayout';

import useChannelInfo from './hooks/useChannelInfo';
import useCreatePostForm from './hooks/useCreatePostForm';

export default function PostCreatePage() {
  const { channelId } = useChannelInfo();

  const { channelList } = useChannelList();
  const currentChannel = channelList.find(channel => channel._id === channelId);

  const { formState, handleSubmit, handleCreatePostImage } =
    useCreatePostForm(channelId);

  const { changeMeta } = useLayout();

  useEffect(() => {
    changeMeta({
      title: currentChannel?.name,
      left: <ArrowBackButton />,
      right: <Button form="createPost">완료</Button>,
    });
  }, [formState]);

  return (
    <section className="">
      <form
        id="createPost"
        onSubmit={handleSubmit}
        className="scroll-none h-full overflow-y-auto"
      >
        <Input
          name="postTitle"
          hasBorder={false}
          placeholder="제목을 입력해주세요!"
          className="w-full text-xl placeholder:text-xl"
        />
        <Upload
          onChange={file => {
            if (!file) return;
            handleCreatePostImage(file, 'postImage');
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
          name="content"
          size="lg"
          placeholder="나누고 싶은 이야기를 공유해보세요!"
          className="scroll-none overflow-y-auto overscroll-auto px-small pt-5"
        />
      </form>
    </section>
  );
}
