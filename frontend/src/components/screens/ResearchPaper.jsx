import { GraduationCap } from "lucide-react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import collegeImg from "../../assets/colleges/college-1.webp";

const ResearchPaper = ({ paper }) => {
  return (
    <div className="group bg-[#F0F7FF] hover:bg-secondary_main hover:shadow-xl rounded overflow-hidden duration-300 ease-in-out transition-all relative z-0">
      <div className="relative">
        <Link to={`/researches/${paper.id}`}>
          <img
            src={collegeImg}
            alt="college"
            className="w-full h-full object-cover"
          />
        </Link>
        <span className="text-white inline-flex gap-3 items-center bg-primary_main px-2.5 py-[5px] rounded absolute -bottom-[17px] right-4 lg:right-[30px]">
          <GraduationCap /> {paper.category}
        </span>
      </div>
      <div className="p-4 lg:p-[30px] space-y-4 relative">
        <h3 className="text-[#141b22] group-hover:text-white text-[28px] leading-none font-semibold">
          <Link to={`/researches/${paper.id}`}>{paper.title}</Link>
        </h3>
        <p className="text-[#777777] group-hover:text-white/70 text-base">
          Seamlessly visualize quality intellectual capital without superior
          collaboration and idea tically...
        </p>
        <Link
          to={`/researches/${paper.id}`}
          className="text-primary_main font-medium bg-transparent px-0 py-0.5 inline-block transition-all duration-100 ease-in-out"
        >
          <span className="bg-left-bottom bg-gradient-to-r from-transparent to-primary_main bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out inline-flex gap-2 items-center">
            Read More <FaArrowRightLong />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ResearchPaper;
