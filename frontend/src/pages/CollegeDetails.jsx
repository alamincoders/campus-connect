import CollegeInformation from "@/components/screens/CollegeInformation";
import { BreadcrumbSection } from "@/components/shared/Breadcrumb";
import Spinner from "@/components/ui/spinner";
import {
  useGetReviewsQuery,
  useGetSingleCollegeQuery,
} from "@/redux/api/collegesApi";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const CollegeDetails = () => {
  const { collegeId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    data: college,
    error,
    isLoading,
  } = useGetSingleCollegeQuery(collegeId);

  const {
    data: reviewFromUsers,
    error: reviewError,
    isLoading: reviewLoading,
  } = useGetReviewsQuery(collegeId);

  console.log("reviewFromUsers", collegeId, reviewFromUsers);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    console.error(error);
    return (
      <div className="text-red-400 font-medium">Error: {error?.status}</div>
    );
  }

  if (!college || !college.data) {
    return <div>College not found</div>;
  }
  return (
    <>
      <BreadcrumbSection
        page_name="College Details"
        items={[
          { label: "Home", path: "/" },
          { label: "Colleges", path: "/colleges" },
          { label: "College Details" },
        ]}
      />

      <CollegeInformation college={college.data} />
    </>
  );
};

export default CollegeDetails;
