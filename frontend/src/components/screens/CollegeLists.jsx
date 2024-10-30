import { useColleges } from "@/hooks/useColleges";
import College from "./College";

const CollegeLists = () => {
  const { data: colleges } = useColleges();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {colleges.map((college) => (
        <College
          key={college._id}
          college={college}
        />
      ))}
    </div>
  );
};

export default CollegeLists;
