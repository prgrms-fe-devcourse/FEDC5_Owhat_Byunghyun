import Avatar from '~/common/components/Avatar';
import Group from '~/common/components/Group';
import Icon from '~/common/components/Icon';
import Image from '~/common/components/Image';
import Upload from '~/common/components/Upload';

interface AccountImagesProps {
  coverImage?: string;
  image?: string;
  isEdit?: boolean;
  setFormState: React.Dispatch<
    React.SetStateAction<{
      inputValue: string;
      coverImageFile: File;
      imageFile: File;
    }>
  >;
  setSubmitPossible: React.Dispatch<React.SetStateAction<boolean>>;
  isUserNameValid?: boolean;
}

const EditAccountImages = ({
  coverImage,
  image,
  setFormState,
  setSubmitPossible,
  isUserNameValid,
}: AccountImagesProps) => {
  const handleChangeUploadFile = (file: File, name: string) => {
    setFormState(prev => ({ ...prev, [name]: file }));
    isUserNameValid && setSubmitPossible(true);
  };

  return (
    <Group
      spacing={0}
      align={'center'}
      position={'center'}
      className="relative"
    >
      <Upload
        id="coverImage"
        name="coverImage"
        onChange={file => {
          if (!file) return;

          handleChangeUploadFile(file, 'coverImageFile');
        }}
      >
        {src => (
          <div className="flex w-full items-center justify-center">
            {src ? (
              <>
                <div className="group absolute h-full w-full cursor-pointer bg-black opacity-20 transition hover:opacity-50 hover:duration-500 hover:ease-in-out">
                  <Icon
                    id={'add-circle'}
                    className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 fill-white drop-shadow-md"
                  />
                </div>
                <Image
                  imgHeight={'full'}
                  imgWidth={'full'}
                  src={src}
                  className="inline-block aspect-[2/1] min-h-[150px]"
                />
              </>
            ) : coverImage ? (
              <>
                <div className="group absolute h-full w-full cursor-pointer bg-black opacity-20 transition hover:opacity-50 hover:duration-500 hover:ease-in-out">
                  <Icon
                    id={'add-circle'}
                    className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 fill-white drop-shadow-md"
                  />
                </div>
                <Image
                  imgHeight={'full'}
                  imgWidth={'full'}
                  src={coverImage}
                  className="inline-block aspect-[2/1] min-h-[150px] "
                />
              </>
            ) : (
              <div className="inline-block min-h-[150px] min-w-layout bg-transparent">
                <button className="h-full w-full"></button>
              </div>
            )}
          </div>
        )}
      </Upload>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-1/4">
        <Upload
          id="profileImage"
          name="profileImage"
          onChange={file => {
            if (!file) return;

            handleChangeUploadFile(file, 'imageFile');
          }}
        >
          {src => (
            <div className="relative">
              <Avatar src={src || image} size="small" />
              <div className="group absolute top-0 box-border h-full w-full -translate-y-[0.2rem] cursor-pointer rounded-full bg-black opacity-20 ring-1 ring-black ring-offset-2 transition hover:opacity-50 hover:duration-500 hover:ease-in-out">
                <Icon
                  id={'add-circle'}
                  className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 fill-white drop-shadow-md"
                />
              </div>
            </div>
          )}
        </Upload>
      </div>
    </Group>
  );
};

export default EditAccountImages;
