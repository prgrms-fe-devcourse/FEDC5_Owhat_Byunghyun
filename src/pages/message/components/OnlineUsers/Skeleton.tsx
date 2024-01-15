import Group from '~/common/components/Group';

const Skeleton = () => {
  return (
    <Group spacing={12} className="border-b border-b-gray-300 pb-4">
      <div className=" flex w-14 animate-pulse flex-col items-center gap-2">
        <div className="mx-1 box-content h-14 w-14 rounded-full bg-gray-200"></div>
        <div className="h-2 w-14 rounded-small bg-gray-200" />
      </div>
      <div className=" flex w-14 animate-pulse flex-col items-center gap-2">
        <div className="mx-1 box-content h-14 w-14 rounded-full bg-gray-200"></div>
        <div className="h-2 w-14 rounded-small bg-gray-200" />
      </div>
      <div className=" flex w-14 animate-pulse flex-col items-center gap-2">
        <div className="mx-1 box-content h-14 w-14 rounded-full bg-gray-200"></div>
        <div className="h-2 w-14 rounded-small bg-gray-200" />
      </div>
    </Group>
  );
};

export default Skeleton;
