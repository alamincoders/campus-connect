import { Button } from "../ui/button";
const ProfileForm = ({ profileData, updateProfileData, register, errors }) => {
  return (
    <form
      onSubmit={updateProfileData}
      className=" p-6 bg-white rounded-lg shadow-md space-y-6"
    >
      <h2 className="text-2xl font-semibold text-secondary_main">
        Edit Profile
      </h2>

      <div>
        <label className="block text-sm font-medium text-secondary_main">
          Name:
        </label>
        <input
          type="text"
          {...register("displayName", {
            required: "Name is required",
          })}
          defaultValue={profileData?.displayName}
          className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500 ${
            errors.displayName ? "border-red-500" : ""
          }`}
        />
        {errors.displayName && (
          <p className="mt-1 text-sm text-red-500">
            {errors.displayName.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-secondary_main">
          Bio:
        </label>
        <input
          type="text"
          {...register("bio")}
          defaultValue={profileData?.bio || ""}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-secondary_main">
          Profession:
        </label>
        <input
          type="text"
          {...register("profession")}
          defaultValue={profileData?.profession || ""}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-secondary_main">
          Profile Picture:
        </label>
        <input
          type="file"
          {...register("image")}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          accept="image/*"
        />
      </div>

      <Button
        type="submit"
        className="mt-4 w-full rounded-md hover:shadow  py-3.5 transition duration-200"
      >
        Save Changes
      </Button>
    </form>
  );
};

export default ProfileForm;
