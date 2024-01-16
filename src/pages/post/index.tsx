import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Icon from '~/common/components/Icon';
import Image from '~/common/components/Image';
import Input from '~/common/components/Input';
import Text from '~/common/components/Text';
import Textarea from '~/common/components/Textarea';
import Upload from '~/common/components/Upload';
import useChannelList from '~/common/hooks/queries/useChannelList';
import useLayout from '~/common/hooks/useLayout';

type ChannelNameType = string | undefined;

export default function CreatePostPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const channelId = searchParams.get('channelId');

  const { channelList } = useChannelList();

  const channelListAbout = channelList.find(({ _id }) => {
    if (_id === channelId) {
      return true;
    }
    return false;
  });

  let channelName: ChannelNameType;

  if (channelListAbout) {
    channelName = channelListAbout.name;
  } else {
    // TODO: 404 페이지
  }

  const { changeMeta } = useLayout();

  useEffect(() => {
    changeMeta({
      title: `${channelName}`,
      left: <></>,
      right: '완료',
    });
  }, []);

  return (
    <section className="scroll-none overflow-y-auto">
      <Input
        hasBorder={false}
        placeholder="제목을 입력해주세요!"
        className="w-full text-xl placeholder:text-xl"
      />
      <Upload>
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
        className="overscroll-auto px-small pt-5"
      />
    </section>
  );
}
