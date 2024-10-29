import { GraduationCap } from "lucide-react";

const SubHeading = ({ heading, sub_heading, className }) => {
  return (
    <div className={className}>
      <h5 className="inline-flex items-center gap-2 text-primary_main text-lg mb-2.5 break-words font-semibold">
        <GraduationCap /> {sub_heading}
      </h5>
      <h2 className="text-3xl lg:text-[50px] leading-none font-semibold text-[#141b22] break-words">
        {heading}
      </h2>
    </div>
  );
};

export default SubHeading;
