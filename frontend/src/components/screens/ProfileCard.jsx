import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  const { user } = useAuth();
  return (
    <section className="relative mt-8 lg:mt-0">
      <div className="bg-secondary_main/5  rounded-xl  duration-300 ease-in-out transition-all relative  h-[211px] flex items-center justify-center">
        <div className="flex flex-col gap-1 items-center">
          <h2 className="text-2xl font-semibold text-secondary_main-950 font-roboto">
            {user?.displayName}
          </h2>
          <Link to={`mailto:${user?.email}`}>Email: {user?.email}</Link>
        </div>
        <div className="w-32 h-32 absolute -bottom-16 bg-white overflow-hidden  border-secondary_main/5 rounded-full border-8 ">
          <img
            src={user?.avatar || "/user.png"}
            alt="user"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
