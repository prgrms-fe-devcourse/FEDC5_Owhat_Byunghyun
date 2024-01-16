const AccountEditSkeleton = () => {
  return (
    <div className="relative flex w-full animate-pulse flex-col space-y-10">
      <div className="relative min-h-[150px] rounded bg-gray-200">
        <div className="absolute bottom-[-18px] left-1/2 z-10 h-20 w-20 -translate-x-1/2 animate-pulse rounded-full bg-gray-200"></div>
      </div>
      <div className="flex flex-col space-x-4 space-y-2">
        <div className="flex-1 space-y-2 py-1">
          <div className="h-4 w-1/3 rounded bg-gray-200"></div>
          <div className="h-8 rounded bg-gray-200"></div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="h-4 w-1/3 rounded bg-gray-200"></div>
          <div className="h-4 w-1/3 rounded bg-gray-200"></div>
        </div>
      </div>
      <div className="fixed bottom-[56px] left-0 min-h-10 w-full rounded bg-gray-200 p"></div>
    </div>
  );
};

export default AccountEditSkeleton;
