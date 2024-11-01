import AdmissionForm from "@/components/screens/AdmissionForm";
import { BreadcrumbSection } from "@/components/shared/Breadcrumb";
import Spinner from "@/components/ui/spinner";
import { useGetAdmissionCollegeQuery } from "@/redux/api/collegesApi";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AdmissionFormPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {
    data: college,
    error,
    isLoading: collegeLoading,
  } = useGetAdmissionCollegeQuery();

  if (error) {
    console.error(error);
    return (
      <div className="text-red-400 font-medium">Error: {error?.status}</div>
    );
  }

  if (collegeLoading) {
    return <Spinner />;
  }

  if (college.data.length === 1) {
    return (
      <div className="py-16 lg:py-30 bg-[#EFF7FF]">
        <div className="flex  items-center justify-center p-6">
          <p className="text-center text-secondary_main ">
            You have applied already ({college.data.length} college) maximum
            number of colleges.
          </p>
          <Link
            to="/my-college"
            className="text-primary_main px-4 py-4 underline underline-offset-4 decoration-primary_main decoration-wavy "
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
