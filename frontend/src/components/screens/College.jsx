import { FaArrowRightLong } from "react-icons/fa6";
import { PiStarFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import collegeImg from "../../assets/colleges/college-1.webp";
import { Badge } from "../ui/badge";

const College = ({ college }) => {
  return (
    <div className="group bg-[#F0F7FF] hover:bg-white hover:shadow-xl rounded overflow-hidden duration-300 ease-in-out transition-all relative z-0">
      <div className="relative">
        <Link to={`/colleges/${college._id}`}>
          <img
            src={college?.image ? college.image : collegeImg}
            alt="college"
            className="w-full h-full object-cover"
          />
        </Link>
        <span className="text-white inline-flex gap-3 items-center bg-secondary_main px-2.5 py-[5px] rounded absolute -bottom-[17px] right-4 lg:right-[30px]">
          <PiStarFill /> {college?.rating}
        </span>
      </div>
      <div className="p-4 lg:p-[30px] space-y-4 relative">
        <h3 className="text-[#141b22] text-[28px] leading-none font-semibold truncate">
          <Link to={`/colleges/${college._id}`}>{college.name}</Link>
        </h3>
        <p className="text-[#777777] text-base">{college.description}</p>
        <div className="flex flex-wrap gap-2 text-[#777777]">
          <b>Sports:</b>
          {college?.sports?.map((sport) => (
            <Badge
              key={sport._id}
              className="bg-primary_main text-[10px]"
            >
              {sport}
            </Badge>
          ))}
          <p>
            <b>Admission Date:</b> {college.admissionDate}
          </p>
        </div>
        <Link
          to={`/colleges/${college._id}`}
          className="text-primary_main font-medium bg-transparent px-0 py-0.5 inline-block transition-all duration-100 ease-in-out"
        >
          <span className="bg-left-bottom bg-gradient-to-r from-transparent to-primary_main bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out inline-flex gap-2 items-center">
            View Details <FaArrowRightLong />
          </span>
        </Link>

        {/* book img */}
        <div className="absolute bottom-[20px] right-4 lg:right-[30px]">
          <img
            src="/cou-icon.png"
            alt="cou"
          />
        </div>
      </div>
    </div>
  );
};

export default College;
