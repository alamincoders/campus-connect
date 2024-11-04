import { updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { auth } from "../services/firebase";

export function useProfile() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Fetch user profile data on mount
  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setProfileData({
        displayName: currentUser.displayName,
        email: currentUser.email,
        avatar: currentUser.photoURL,
        bio: currentUser.bio || "N/A", // Assuming "bio" is stored in user's custom data
        profession: currentUser.profession || "N/A",
      });
    }
    setLoading(false);
  }, []);

  // Update user profile data
  const updateProfileData = async (data) => {
    const { displayName, bio, profession, image } = data;
    try {
      setLoading(true);

      let imageUrl = profileData.avatar; // Default to the existing avatar URL

      // Upload new image to Cloudinary if a new file is provided
      if (image && image[0]) {
        const formData = new FormData();
        formData.append("file", image[0]);
        formData.append("upload_preset", "qedu-campus");

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dzsu72yx6/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        const uploadData = await response.json();
        imageUrl = uploadData.secure_url; // Set new image URL from Cloudinary response
      }

      // Update Firebase user profile with new imageUrl and other details
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL: imageUrl,
      });

      // Update the local state with new profile data
      setProfileData((prev) => ({
        ...prev,
        displayName,
        bio,
        profession,
        avatar: imageUrl,
      }));

      toast.success("Profile updated successfully!");
      reset(); // Reset form after submission
    } catch (error) {
      console.error("Profile Update Error:", error);
      toast.error("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  return {
    profileData,
    loading,
    register,
    handleSubmit,
    errors,
    updateProfileData: handleSubmit(updateProfileData),
  };
}
