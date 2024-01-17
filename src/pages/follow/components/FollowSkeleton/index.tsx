const FollowSkeleton = () => {
  return (
    <div className="scroll-none flex h-full  w-full animate-pulse flex-col space-y-4 overflow-y-auto pb">
      <div className="min-h-10 rounded bg-gray-200"></div>
      {new Array(15).fill(0).map((_, index) => (
        <div key={index} className="flex items-center space-x-4">
          <div className="h-11 w-11 rounded-full bg-gray-200"></div>
          <div className="h-4 w-1/3 rounded bg-gray-200"></div>
        </div>
      ))}
    </div>
  );
};

export default FollowSkeleton;
