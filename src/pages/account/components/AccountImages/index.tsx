import { createElement } from 'react';

import Avatar from '~/common/components/Avatar';
import Group from '~/common/components/Group';
import Image from '~/common/components/Image';

interface AccountImagesProps {
  coverImage?: string;
  image?: string;
}

const AccountImages = ({ coverImage, image }: AccountImagesProps) => {
  const defaultCoverImage = createElement('div', {
    className: 'inline-block min-h-[150px] min-w-layout bg-transparent',
  });

  return (
    <Group spacing={0} align="center" position="center" className="relative">
      <div className="flex w-full items-center justify-center">
        {coverImage ? (
          <Image
            imgHeight="full"
            imgWidth="full"
            src={coverImage}
            className="inline-block aspect-[2/1] min-h-[150px]"
          />
        ) : (
          defaultCoverImage
        )}
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-1/4">
        <Avatar src={image} size="small" />
      </div>
    </Group>
  );
};

export default AccountImages;
