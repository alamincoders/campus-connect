import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ResearchCard = ({ research }) => {
  return (
    <div>
      <div className="group bg-[#F0F7FF] hover:bg-white hover:shadow-xl rounded overflow-hidden duration-300 ease-in-out transition-all relative z-0">
        <div className="relative"></div>
        <div className="p-4 lg:p-[30px] space-y-2 relative">
          <h3 className="text-[#141b22] text-[28px] leading-none font-semibold truncate">
            <Link to={`${research.link}`}>{research.title}</Link>
          </h3>
          <p className="text-[#777777] text-base truncate">
            {research.description}
          </p>

          <p className="text-[#777777] text-base">
            <b>Published on:</b> {research.publicationDate}
          </p>

          <Link
            to={`${research.link}`}
            className="text-primary_main font-medium bg-transparent px-0 py-0.5 inline-block transition-all duration-100 ease-in-out"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-transparent to-primary_main bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out inline-flex gap-2 items-center">
              Read More <FaArrowRightLong />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResearchCard;
