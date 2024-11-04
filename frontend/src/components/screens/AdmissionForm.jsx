// components/AdmissionForm.js
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAdmissionForm } from "@/hooks/useAdmissionSubmit";
import { FaSpinner } from "react-icons/fa";

const AdmissionForm = () => {
  const {
    colleges,
    isLoading,
    selectedCollegeId,
    handleCollegeChange,
    register,
    handleSubmit,
    errors,
  } = useAdmissionForm();

  return (
    <div className="py-16 lg:py-30 bg-[#EFF7FF] -mt-6">
      <div className="flex flex-col items-center justify-center p-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl p-8 bg-white shadow-md rounded-lg"
        >
          {/* College Selection */}
          <Label
            htmlFor="college"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Choose Your College
          </Label>
          <div className="mb-4">
            <Select
              value={selectedCollegeId}
              onValueChange={handleCollegeChange}
            >
              <SelectTrigger
                className={`w-full text-gray-400 focus:outline-none ${
                  selectedCollegeId ? "text-black" : ""
                } `}
              >
                <SelectValue placeholder="Select College..." />
              </SelectTrigger>
              <SelectContent>
                {colleges?.data.map((college) => (
                  <SelectItem
                    key={college._id}
                    value={college._id}
                  >
                    {college.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Candidate Name */}
          <div className="mb-4">
            <Label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Candidate Name
            </Label>
            <Input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="John Doe"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <Label
              htmlFor="dob"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Date of Birth
            </Label>
            <Input
              {...register("dob", { required: "Date of Birth is required" })}
              type="date"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.dob && <p className="text-red-500">{errors.dob.message}</p>}
          </div>

          {/* Address */}
          <div className="mb-4">
            <Label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Address
            </Label>
            <Input
              {...register("address", { required: "Address is required" })}
              type="text"
              placeholder="123 Main St, City, State"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.address && (
              <p className="text-red-500">{errors.address.message}</p>
            )}
          </div>

          {/* Contact Number */}
          <div className="mb-4">
            <Label
              htmlFor="contactNumber"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Contact Number
            </Label>
            <Input
              {...register("contactNumber", {
                required: "Contact Number is required",
              })}
              type="tel"
              placeholder="(123) 456-7890"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.contactNumber && (
              <p className="text-red-500">{errors.contactNumber.message}</p>
            )}
          </div>

          {/* Personal Statement */}
          <div className="mb-4">
            <Label
              htmlFor="statement"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Personal Statement
            </Label>
            <Input
              {...register("statement")}
              as="textarea"
              placeholder="Write a brief statement about yourself..."
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Image Upload */}
          <div className="mb-4">
            <Label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Upload Image
            </Label>
            <Input
              {...register("image", { required: "Image is required" })}
              type="file"
              accept="image/*"
              className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full px-4 py-4 mt-4 text-white bg-primary_main focus:outline-none"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="inline-flex items-center justify-center gap-2">
                <FaSpinner className="animate-spin" /> Submitting...
              </div>
            ) : (
              "Admission Submit"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
