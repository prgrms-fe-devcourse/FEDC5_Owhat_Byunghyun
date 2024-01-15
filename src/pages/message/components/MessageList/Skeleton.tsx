import Group from '~/common/components/Group';

const Skeleton = () => {
  return (
    <div>
      <Group direction="columns" spacing="md" className="animate-pulse">
        <Group spacing={16} align="center" noWrap className="w-full">
          <div className="h-14 w-14 shrink-0 rounded-full bg-gray-300" />
          <div className="flex h-14 w-full shrink flex-col justify-center gap-1">
            <div className="flex h-6 w-full items-center">
              <div className="h-4 w-1/4 bg-gray-300" />
            </div>
            <div className="flex h-6 w-full items-start">
              <div className="h-3 w-full bg-gray-300" />
            </div>
          </div>
        </Group>
        <Group spacing={16} align="center" noWrap className="w-full">
          <div className="h-14 w-14 shrink-0 rounded-full bg-gray-300" />
          <div className="flex h-14 w-full shrink flex-col justify-center gap-1">
            <div className="flex h-6 w-full items-center">
              <div className="h-4 w-1/4 bg-gray-300" />
            </div>
            <div className="flex h-6 w-full items-start">
              <div className="h-3 w-full bg-gray-300" />
            </div>
          </div>
        </Group>
        <Group spacing={16} align="center" noWrap className="w-full">
          <div className="h-14 w-14 shrink-0 rounded-full bg-gray-300" />
          <div className="flex h-14 w-full shrink flex-col justify-center gap-1">
            <div className="flex h-6 w-full items-center">
              <div className="h-4 w-1/4 bg-gray-300" />
            </div>
            <div className="flex h-6 w-full items-start">
              <div className="h-3 w-full bg-gray-300" />
            </div>
          </div>
        </Group>
      </Group>
    </div>
  );
};

export default Skeleton;
