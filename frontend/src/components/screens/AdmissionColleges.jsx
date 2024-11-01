import { useGetAllCollegesQuery } from "@/redux/api/collegesApi";
import CollegeSkeleton from "../shared/CollegeSkeleton";
import AdmissionCollegeCard from "./AdmissionCollegeCard";

const AdmissionColleges = ({ size }) => {
  const { data: colleges, error, isLoading } = useGetAllCollegesQuery();

 if (error) {
   console.error(error);
   return (
     <div className="text-red-400 font-medium">Error: {error?.status}</div>
   );
 }


  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {size
          ? Array.from({ length: size }).map((_, index) => (
              <CollegeSkeleton key={index} />
            ))
          : Array.from({ length: 6 }).map((_, index) => (
              <CollegeSkeleton key={index} />
            ))}
      </div>
    );
  }

  if (!colleges || !colleges.data) {
    return <div>No colleges found</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {colleges.data.map((college) => (
        <AdmissionCollegeCard
          key={college?._id}
          college={college}
        />
      ))}
    </div>
  );
};

export default AdmissionColleges;
