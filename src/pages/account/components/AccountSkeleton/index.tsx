const AccountSkeleton = () => {
  return (
    <div className="flex w-full animate-pulse flex-col space-y-10">
      <div className="min-h-[150px] rounded bg-gray-200"></div>
      <div className="min-h-10 rounded bg-gray-200"></div>
      <div className="flex space-x-4">
        <div className="h-11 w-11 rounded-full bg-gray-200"></div>
        <div className="flex-1 space-y-2 py-1">
          <div className="h-4 w-3/4 rounded bg-gray-200"></div>
          <div className="h-4 rounded bg-gray-200"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-4 rounded bg-gray-200"></div>
        <div className="h-4 w-5/6 rounded bg-gray-200"></div>
      </div>
      <div className="flex space-x-4">
        <div className="h-11 w-11 rounded-full bg-gray-200"></div>
        <div className="flex-1 space-y-2 py-1">
          <div className="h-4 w-3/4 rounded bg-gray-200"></div>
          <div className="h-4 rounded bg-gray-200"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-4 rounded bg-gray-200"></div>
        <div className="h-4 w-5/6 rounded bg-gray-200"></div>
      </div>
      <div className="flex space-x-4">
        <div className="h-11 w-11 rounded-full bg-gray-200"></div>
        <div className="flex-1 space-y-2 py-1">
          <div className="h-4 w-3/4 rounded bg-gray-200"></div>
          <div className="h-4 rounded bg-gray-200"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-4 rounded bg-gray-200"></div>
        <div className="h-4 w-5/6 rounded bg-gray-200"></div>
      </div>
    </div>
  );
};

export default AccountSkeleton;
