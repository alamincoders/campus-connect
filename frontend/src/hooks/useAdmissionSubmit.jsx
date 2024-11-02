import {
  useAdmissionCollegeMutation,
  useGetAllCollegesQuery,
} from "@/redux/api/collegesApi";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const useAdmissionForm = () => {
  const { data: colleges, error } = useGetAllCollegesQuery();
  const [admissionCollege] = useAdmissionCollegeMutation(); // Initialize the mutation hook
  const { collegeId } = useParams();
  const [selectedCollegeId, setSelectedCollegeId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const loggingInUser = JSON.parse(Cookies.get("user"));
  const userId = loggingInUser?.id;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (collegeId && colleges?.data) {
      const matchedCollege = colleges.data.find(
        (college) => college._id === collegeId
      );
      if (matchedCollege) {
        setSelectedCollegeId(matchedCollege._id);
        setValue("collegeId", matchedCollege._id);
      }
    }
  }, [collegeId, colleges, setValue]);

  const handleCollegeChange = (value) => {
    setSelectedCollegeId(value);
    setValue("collegeId", value);
  };

  if (error) {
    console.error(error);
    return (
      <div className="text-red-400 font-medium">Error: {error?.status}</div>
    );
  }

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const file = data.image[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "qedu-campus");

      // Upload image to Cloudinary
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dzsu72yx6/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const uploadData = await response.json();

      // Store URL
      const imageUrl = uploadData.secure_url;
      const submissionData = { ...data, image: imageUrl, userId };

      // Submit data to backend using the mutation
      await admissionCollege(submissionData).unwrap();

      // Navigate and display success message
      setIsLoading(false);
      navigate("/profile");
      toast.success("Application submitted successfully!");
    } catch (error) {
      toast.error("Error submitting application");
    }
  };

  return {
    colleges,
    isLoading,
    selectedCollegeId,
    handleCollegeChange,
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
  };
};
