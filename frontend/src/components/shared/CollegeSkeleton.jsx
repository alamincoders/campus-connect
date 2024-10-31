const CollegeSkeleton = () => {
  return (
    <div className="group  bg-white shadow-xl rounded overflow-hidden duration-300 ease-in-out transition-all relative z-0 animate-pulse h-[511px]">
      <div className="relative h-48" />
      <div className="p-4 space-y-4 relative">
        <div className="h-6 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded" />
        <div className="flex flex-wrap gap-2">
          <div className="h-3 bg-gray-200 rounded w-1/5" />
          <p className="h-3 bg-gray-200 rounded w-1/6" />
        </div>
        <div className="h-3 bg-gray-200 rounded w-1/4" />
      </div>
    </div>
  );
};

export default CollegeSkeleton;
