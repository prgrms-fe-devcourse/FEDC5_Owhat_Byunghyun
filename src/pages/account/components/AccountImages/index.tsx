import { createElement } from 'react';

import Avatar from '~/common/components/Avatar';
import Group from '~/common/components/Group';
import Image from '~/common/components/Image';
import Upload from '~/common/components/Upload';

interface AccountImagesProps {
  coverImage?: string;
  image?: string;
  isEdit?: boolean;
}

const AccountImages = ({
  coverImage,
  image,
  isEdit = false,
}: AccountImagesProps) => {
  const defaultCoverImage = createElement('div', {
    className: 'inline-block min-h-[150px] min-w-layout bg-transparent',
  });

  return (
    <Group
      spacing={0}
      align={'center'}
      position={'center'}
      className="relative"
    >
      {isEdit ? (
        <Upload id="coverImage" name="coverImage">
          {src =>
            src ? (
              <div className="flex w-full items-center justify-center">
                <Image
                  imgHeight={'full'}
                  imgWidth={'full'}
                  src={src}
                  className="inline-block aspect-[2/1] min-h-[150px]"
                />
              </div>
            ) : (
              defaultCoverImage
            )
          }
        </Upload>
      ) : coverImage ? (
        <div className="flex w-full items-center justify-center">
          <Image
            imgHeight={'full'}
            imgWidth={'full'}
            src={coverImage}
            className="inline-block aspect-[2/1] min-h-[150px]"
          />
        </div>
      ) : (
        defaultCoverImage
      )}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-1/4">
        {isEdit ? (
          <Upload id="profileImage" name="profileImage">
            {src => <Avatar src={src || image} size="small" />}
          </Upload>
        ) : (
          <Avatar src={image} size="small" />
        )}
      </div>
    </Group>
  );
};

export default AccountImages;
