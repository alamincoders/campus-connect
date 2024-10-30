import { useGetAllCollegesQuery } from "@/redux/api/collegesApi";
import College from "./College";

const CollegeLists = () => {
  const { data: colleges, error, isLoading } = useGetAllCollegesQuery();

  if (error) {
    console.error(error);
    return <div>Error: {error?.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!colleges || !colleges.data) {
    return <div>No colleges found</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {colleges.data.map((college) => (
        <College
          key={college?._id}
          college={college}
        />
      ))}
    </div>
  );
};

export default CollegeLists;
