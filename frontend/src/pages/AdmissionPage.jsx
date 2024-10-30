import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AdmissionPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Admission Form</h1>

      <form className="w-full max-w-lg p-8 bg-white shadow-md rounded-lg">
        <div className="mb-4">
          <Label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Candidate Name
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <Label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Subject
          </Label>
          <Input
            id="subject"
            type="text"
            placeholder="Subject of Interest"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <Label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Candidate Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="example@example.com"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <Label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Candidate Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(123) 456-7890"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <Label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Address
          </Label>
          <Input
            id="address"
            type="text"
            placeholder="123 Main St, City, State"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <Label
            htmlFor="dob"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Date of Birth
          </Label>
          <Input
            id="dob"
            type="date"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <Label
            htmlFor="image"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Upload Image
          </Label>
          <Input
            id="image"
            type="file"
            accept="image/*"
            className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full px-4 py-4 mt-4 text-white bg-primary_main focus:outline-none"
        >
          Submit Application
        </Button>
      </form>
    </div>
  );
};

export default AdmissionPage;
