import { useAuth } from "@/hooks/useAuth";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "../ui/modal";

const ProfileCard = () => {
  const { user } = useAuth();

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

  // Generate username by converting to lowercase and replacing spaces with underscores
  const username = user?.displayName
    ? user.displayName.toLowerCase().replace(/\s+/g, "_")
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
              <ModalContent ent>Hello world profile form submit</ModalContent>
            </ModalBody>
          </Modal>
        </div>
        <div className="w-32 h-32 absolute -bottom-16 bg-white overflow-hidden border-secondary_main/5 rounded-full border-8">
          <img
            src={user?.avatar || "/user.png"}
            alt="user"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </motion.div>

      <div className="max-w-xl mx-auto mt-32 bg-white shadow-around duration-300 ease-in-out transition-all relative p-8 rounded-xl font-roboto">
        <div className="w-1 h-20 bg-primary_main absolute top-0 left-0" />
        <div className="w-1 h-20 bg-primary_main absolute bottom-0 right-0" />

        <div className="flex flex-col gap-4">
          <p className="text-secondary_main-950 grid grid-cols-1 lg:grid-cols-2">
            <span className="font-semibold">Name:</span>{" "}
            <span>{user?.displayName}</span>
          </p>
          <Link
            className="text-secondary_main-950 grid grid-cols-1 lg:grid-cols-2 cursor-default"
            to={`#`}
          >
            <span className="font-semibold">Email:</span>{" "}
            <span className="">{user?.email}</span>
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <label
              className="font-semibold"
              htmlFor="bio"
            >
              Bio:
            </label>
            <p className="text-secondary_main-950">{user?.bio || "N/A"}</p>
          </div>
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
            <span className="font-semibold">Profession:</span>{" "}
            <span>{user?.profession || "N/A"}</span>
          </p>{" "}
          <p className="text-secondary_main-950 grid grid-cols-1 lg:grid-cols-2">
            <span className="font-semibold">Admission:</span>{" "}
            <span>{user?.profession || "N/A"}</span>
          </p>{" "}
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
