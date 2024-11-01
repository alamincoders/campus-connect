import AdmissionForm from "@/components/screens/AdmissionForm";
import { BreadcrumbSection } from "@/components/shared/Breadcrumb";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/ui/spinner";
import { useGetAdmissionCollegeQuery } from "@/redux/api/collegesApi";

const AdmissionFormPage = () => {
  /*   const {
    data: college,
    error,
    isLoading: collegeLoading,
  } = useGetAdmissionCollegeQuery(); */

  /*   if (error) {
    console.error(error);
    return (
      <div className="text-red-400 font-medium">Error: {error?.status}</div>
    );
  }


  if (collegeLoading) {
    return <Spinner />;
  } */

  /*   if (college.data.length === 1) {
    return (
      <div className="py-16 lg:py-30 bg-[#EFF7FF]">
        <div className="flex flex-col items-center justify-center p-6 max-w-xl mx-auto">
          <p className="text-center text-secondary_main underline underline-offset-4 decoration-primary_main decoration-wavy ">
            You have selected only one college for admission.
          </p>
          <Button className="rounded-lg px-4 py-4 mt-4 text-white _main focus:outline-none">
            See Your Admitted College
          </Button>
        </div>
      </div>
    );
  }
 */
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
