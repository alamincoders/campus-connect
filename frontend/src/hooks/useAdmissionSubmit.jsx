// hooks/useAdmissionForm.js
import { useGetAllCollegesQuery } from "@/redux/api/collegesApi";
import { Cloudinary } from "@cloudinary/url-gen";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const useAdmissionForm = () => {
  const { data: colleges, error, isLoading } = useGetAllCollegesQuery();
  const { collegeId } = useParams();
  const [selectedCollegeId, setSelectedCollegeId] = useState("");
  const navigate = useNavigate();

  const cld = new Cloudinary({ cloud: { cloudName: "dzsu72yx6" } });

  const loggingInUser = JSON.parse(Cookies.get("user"));
  let userId = loggingInUser?.id;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Initialize selected college if collegeId is provided
  useEffect(() => {
    if (collegeId && colleges?.data) {
      const matchedCollege = colleges.data.find(
        (college) => college._id === collegeId
      );
      if (matchedCollege) {
        setSelectedCollegeId(matchedCollege._id);
        setValue("college", matchedCollege._id); // Set default value
      }
    }
  }, [collegeId, colleges, setValue]);

  const handleCollegeChange = (value) => {
    setSelectedCollegeId(value);
    setValue("collegeId", value);
  };

  const onSubmit = async (data) => {
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

      console.log(submissionData);
      // After successful submission, navigate to the "my-college" page
      navigate("/my-college");
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
