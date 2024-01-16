import Group from '~/common/components/Group';

const PostDetailSkeleton = () => {
  return (
    <Group direction="columns" spacing="md" className="animate-pulse">
      <Group spacing="md" align="center" noWrap className="w-full">
        <div className="h-12 w-12 shrink-0 rounded-small bg-gray-300" />
        <div className="flex w-full shrink flex-col gap-2">
          <div className="h-4 w-full bg-gray-300" />
          <div className="h-2 w-full bg-gray-300" />
        </div>
      </Group>
      <Group spacing="md" className="w-full">
        <div className="h-52 w-full rounded bg-gray-300" />
        <div className="h-4 w-full bg-gray-300" />
      </Group>
    </Group>
  );
};

export default PostDetailSkeleton;
