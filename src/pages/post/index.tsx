import { useEffect } from 'react';

import Icon from '~/common/components/Icon';
import Image from '~/common/components/Image';
import Input from '~/common/components/Input';
import Text from '~/common/components/Text';
import Textarea from '~/common/components/Textarea';
import Upload from '~/common/components/Upload';
import useLayout from '~/common/hooks/useLayout';

export default function PostCreatePage() {
  const { changeMeta } = useLayout();

  useEffect(() => {
    changeMeta({
      title: '넷플릭스',
      left: <></>,
      right: '완료',
    });
  }, []);

  return (
    <section className="scroll-none overflow-y-auto">
      <Input
        hasBorder={false}
        placeholder="제목을 입력해주세요!"
        className="w-full px-0 text-xl placeholder:text-xl"
      />
      <Upload>
        {(src, file) => (
          <div>
            <div className="flex py-3">
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
        className="overscroll-auto px-0 pt-5"
      />
    </section>
  );
}
