import { useGetAdmissionCollegeQuery } from "@/redux/api/collegesApi";
import Spinner from "../ui/spinner";
import MyCollegeInfo from "./MyCollegeInfo";

const MyAdmittedCollege = () => {
  const { data: colleges, error, isLoading } = useGetAdmissionCollegeQuery();
  console.log(colleges?.data);

  if (error) {
    console.error(error);
    return (
      <div className="text-red-400 font-medium">Error: {error?.status}</div>
    );
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (!colleges || !colleges.data) {
    return <div>No colleges found</div>;
  }

  return colleges?.data.map((college) => (
    <MyCollegeInfo
      key={college._id}
      college={college}
    />
  ));
};

export default MyAdmittedCollege;
