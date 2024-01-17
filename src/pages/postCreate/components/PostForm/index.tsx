import { Post } from '~/api/types/postTypes';
import Icon from '~/common/components/Icon';
import Image from '~/common/components/Image';
import Input from '~/common/components/Input';
import Text from '~/common/components/Text';
import Textarea from '~/common/components/Textarea';
import Upload from '~/common/components/Upload';

interface PostFormProps {
  channelId: string;
  formState: {
    title: string;
    content: string;
    postImage: File;
  };
  handleChangePostContent: (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  handleChangePostTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangePostImage: (file: File, name: string) => void;
  post: Post;
}

const PostForm = ({
  handleChangePostContent,
  handleChangePostTitle,
  handleChangePostImage,
  formState,
  post,
}: PostFormProps) => {
  const { title, content } = formState;

  return (
    <form className="scroll-none h-full overflow-y-auto">
      <Input
        hasBorder={false}
        placeholder="제목을 입력해주세요!"
        className="w-full text-xl placeholder:text-xl"
        onChange={handleChangePostTitle}
        value={title}
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
        size="lg"
        placeholder="나누고 싶은 이야기를 공유해보세요!"
        className="scroll-none overflow-y-auto overscroll-auto px-small pt-5"
        onChange={handleChangePostContent}
        value={content}
      />
    </form>
  );
};

export default PostForm;
