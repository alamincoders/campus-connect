import { useGetAdmissionCollegeQuery } from "@/redux/api/collegesApi";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../ui/spinner";
import MyCollegeInfo from "./MyCollegeInfo";

const MyAdmittedCollege = () => {
  const [colleges, setColleges] = useState([]);
  const [hasApplied, setHasApplied] = useState(false);
  const { data, error, isLoading } = useGetAdmissionCollegeQuery();
  const user_id = JSON.parse(Cookies.get("user"))?.id;

  useEffect(() => {
    if (data) {
      setColleges(data.data);
      const applied = data.data.some((college) => college.userId === user_id);
      setHasApplied(applied);
    }
  }, [data, user_id]);

  if (error) {
    console.error(error);
    return (
      <div className="text-red-400 font-medium">Error: {error?.status}</div>
    );
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (!colleges) {
    return (
      <div className="py-16 lg:py-30 bg-[#EFF7FF]">
        <div className="flex items-center justify-center p-6">
          <p className="text-center text-secondary_main">
            No college has applied yet.
          </p>
          <Link
            to="/admission"
            className="text-primary_main px-4 py-4 -mt-1.5 underline underline-offset-4 decoration-primary_main decoration-wavy"
          >
            Admission Open
          </Link>
        </div>
      </div>
    );
  }

  if (!hasApplied) {
    return (
      <div className="py-16 lg:py-30 bg-[#EFF7FF]">
        <div className="flex items-center justify-center p-6">
          <p className="text-center text-secondary_main">
            You have not applied to any college.
          </p>
          <Link
            to="/admission"
            className="text-primary_main px-4 py-4 underline underline-offset-4 decoration-primary_main decoration-wavy"
          >
            Admission Open
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {colleges.map((college) => (
        <MyCollegeInfo
          key={college._id}
          college={college}
        />
      ))}
    </div>
  );
};

export default MyAdmittedCollege;
