import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "@/hooks/useProfile";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "../ui/modal";
import Spinner from "../ui/spinner";
import ProfileForm from "./ProfileForm";

const ProfileCard = () => {
  const { user } = useAuth();
  const { profileData, loading, register, updateProfileData, errors } =
    useProfile();

  if (loading) {
    return <Spinner />;
  }

  const gradientAnimation = {
    animate: {
      backgroundImage: [
        "linear-gradient(45deg, #125875, #ff7350)",
        "linear-gradient(65deg, #ff7350, #125875)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const username = profileData?.displayName
    ? profileData.displayName.toLowerCase().replace(/\s+/g, "_")
    : "username";

  return (
    <section className="relative mt-8 lg:mt-0">
      <motion.div
        className="rounded-xl duration-300 ease-in-out transition-all relative h-[211px] flex items-center justify-center"
        style={{ backgroundSize: "100% 100%" }}
        {...gradientAnimation}
      >
        <div className="absolute bottom-0 right-0">
          <Modal>
            <ModalTrigger asChild>
              <Button className="mt-6 rounded-tl-md rounded-b-none rounded-r-none text-white">
                Edit Profile
              </Button>
            </ModalTrigger>
            <ModalBody>
              <ModalContent>
                <ProfileForm
                  profileData={profileData}
                  updateProfileData={updateProfileData}
                  register={register}
                  errors={errors}
                />
              </ModalContent>
            </ModalBody>
          </Modal>
        </div>
        <div className="w-32 h-32 absolute -bottom-16 bg-white overflow-hidden border-secondary_main/5 rounded-full border-8">
          {loading ? (
            <div className="w-full h-full bg-gray-200 animate-pulse" />
          ) : (
            <img
              src={profileData?.avatar || "/user.png"}
              alt="user"
              className="w-full h-full object-cover object-center"
            />
          )}
        </div>
      </motion.div>

      <div className="max-w-xl mx-auto mt-32 bg-white shadow-around duration-300 ease-in-out transition-all relative p-8 rounded-xl font-roboto">
        <div className="w-1 h-20 bg-primary_main absolute top-0 left-0" />
        <div className="w-1 h-20 bg-primary_main absolute bottom-0 right-0" />

        <div className="flex flex-col gap-4">
          <p className="text-secondary_main-950 grid grid-cols-1 lg:grid-cols-2">
            <span className="font-semibold">Name:</span>{" "}
            <span>{profileData?.displayName}</span>
          </p>
          <Link
            className="text-secondary_main-950 grid grid-cols-1 lg:grid-cols-2 cursor-default"
            to={`#`}
          >
            <span className="font-semibold">Email:</span>{" "}
            <span>{profileData?.email}</span>
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <label
              className="font-semibold"
              htmlFor="username"
            >
              Username:
            </label>
            <p className="text-secondary_main-950">
              {username || <span className="text-gray-400">username</span>}
            </p>
          </div>
          <p className="text-secondary_main-950 grid grid-cols-1 lg:grid-cols-2">
            <span className="font-semibold">Bio:</span>{" "}
            <span>{profileData?.bio}</span>
          </p>{" "}
          <p className="text-secondary_main-950 grid grid-cols-1 lg:grid-cols-2">
            <span className="font-semibold">Profession:</span>{" "}
            <span>{profileData?.profession}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
