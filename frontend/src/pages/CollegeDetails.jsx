import { useColleges } from "@/hooks/useColleges";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const CollegeDetails = () => {
  const { collegeId } = useParams();
  const { singleCollege, data: college } = useColleges();

  console.log(college);

  useEffect(() => {
    singleCollege(collegeId);
  }, [collegeId, singleCollege]);

  return <div>CollegeDetails</div>;
};

export default CollegeDetails;
