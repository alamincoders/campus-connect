import CollegeInformation from "@/components/screens/CollegeInformation";
import { BreadcrumbSection } from "@/components/shared/Breadcrumb";
import Spinner from "@/components/ui/spinner";
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
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error?.message || "unknown error"}</div>;
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
