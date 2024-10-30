import { useGetSingleCollegeQuery } from "@/redux/api/collegesApi";
import { useParams } from "react-router-dom";

const CollegeDetails = () => {
  const { collegeId } = useParams();

  const {
    data: college,
    error,
    isLoading,
  } = useGetSingleCollegeQuery(collegeId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error?.message || "unknown error"}</div>;
  }

  if (!college || !college.data) {
    return <div>College not found</div>;
  }

  const { name, admissionDate } = college.data;

  return (
    <div>
      CollegeDetails {name} {admissionDate}
    </div>
  );
};

export default CollegeDetails;
