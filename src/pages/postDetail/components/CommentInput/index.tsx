import { User } from '~/api/types/userTypes';
import Avatar from '~/common/components/Avatar';
import Button from '~/common/components/Button';
import Input from '~/common/components/Input';

interface CommentInputProps {
  handleSubmitComment: (e: React.FormEvent<HTMLFormElement>) => void;
  user: User | undefined;
  isLogin: boolean;
  loading?: boolean;
}

const CommentInput = ({
  handleSubmitComment,
  user,
  loading,
  isLogin,
}: CommentInputProps) => {
  return (
    <section className="fixed bottom-0 left-0 min-w-layout">
      <form
        onSubmit={handleSubmitComment}
        className="flex w-full items-center rounded rounded-b-none border border-primary bg-primary-lighter p-2 "
      >
        <div className="flex">
          <Avatar size="auto" src={user?.image} className="h-8 w-8" />
        </div>

        <Input
          name="comment"
          placeholder={isLogin ? '댓글 추가...' : '로그인후 이용 가능합니다.'}
          className="mx-3 grow"
          disabled={!isLogin}
        />
        <Button
          loading={loading}
          styleType="primary"
          className="p-xsmall text-sm"
          disabled={!isLogin}
        >
          등록
        </Button>
      </form>
    </section>
  );
};
export default CommentInput;
