import Avatar from '~/common/components/Avatar';
import Group from '~/common/components/Group';
import Image from '~/common/components/Image';
import Upload from '~/common/components/Upload';

interface AccountImagesProps {
  coverImage?: string;
  image?: string;
  isEdit?: boolean;
  setCoverImageFile: React.Dispatch<React.SetStateAction<File | undefined>>;
  setImageFile: React.Dispatch<React.SetStateAction<File | undefined>>;
}

const EditAccountImages = ({
  coverImage,
  image,
  setCoverImageFile,
  setImageFile,
}: AccountImagesProps) => {
  return (
    <Group
      spacing={0}
      align={'center'}
      position={'center'}
      className="relative"
    >
      <Upload id="coverImage" name="coverImage">
        {(src, file) => {
          if (file) {
            setCoverImageFile(file);
          }

          return (
            <div className="flex w-full items-center justify-center">
              {src ? (
                <Image
                  imgHeight={'full'}
                  imgWidth={'full'}
                  src={src}
                  className="inline-block aspect-[2/1] min-h-[150px]"
                />
              ) : coverImage ? (
                <Image
                  imgHeight={'full'}
                  imgWidth={'full'}
                  src={coverImage}
                  className="inline-block aspect-[2/1] min-h-[150px]"
                />
              ) : (
                <div className="inline-block min-h-[150px] min-w-layout bg-transparent">
                  <button className="h-full w-full"></button>
                </div>
              )}
            </div>
          );
        }}
      </Upload>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-1/4">
        <Upload id="profileImage" name="profileImage">
          {(src, file) => {
            if (file) {
              setImageFile(file);
            }

            return <Avatar src={src || image} size="small" />;
          }}
        </Upload>
      </div>
    </Group>
  );
};

export default EditAccountImages;
