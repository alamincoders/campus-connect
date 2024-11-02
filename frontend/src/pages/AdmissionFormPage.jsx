import AdmissionForm from "@/components/screens/AdmissionForm";
import { BreadcrumbSection } from "@/components/shared/Breadcrumb";
import Spinner from "@/components/ui/spinner";
import { useGetAdmissionCollegeQuery } from "@/redux/api/collegesApi";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AdmissionFormPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    data: colleges,
    error,
    isLoading: collegeLoading,
  } = useGetAdmissionCollegeQuery();

  const user_id = JSON.parse(Cookies.get("user"))?.id;

  if (error) {
    console.error(error);
    return (
      <div className="text-red-400 font-medium">Error: {error?.status}</div>
    );
  }

  if (collegeLoading) {
    return <Spinner />;
  }

  // Check if the user has already applied to any college
  const hasApplied = colleges?.data.some(
    (college) => college.userId === user_id
  );

  if (hasApplied) {
    return (
      <div className="py-16 lg:py-30 bg-[#EFF7FF]">
        <div className="flex items-center justify-center p-6">
          <p className="text-center text-secondary_main">
            You have already applied to the maximum number of colleges.
          </p>
          <Link
            to="/my-college"
            className="text-primary_main px-4 py-4 underline underline-offset-4 decoration-primary_main decoration-wavy"
          >
            See Your Colleges
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <BreadcrumbSection
        page_name="Admission Form"
        items={[
          { label: "Home", path: "/" },
          { label: "Admission", path: "/admission" },
          { label: "Admission Form" },
        ]}
      />
      <AdmissionForm />
    </>
  );
};

export default AdmissionFormPage;
