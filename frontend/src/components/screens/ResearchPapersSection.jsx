import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SubHeading from "../shared/SubHeading";
import { Button } from "../ui/button";
import ResearchPaper from "./ResearchPaper";

const researchPapers = [
  {
    id: 1,
    title: "Understanding the Impacts of Climate Change",
    author: "Jane Doe",
    description:
      "An in-depth look at how climate change affects global weather patterns and ecosystems.",
    url: "https://example.com/research/climate-change",
    category: "Environmental Science",
  },
  {
    id: 2,
    title: "Advances in Machine Learning",
    author: "John Smith",
    description: "Exploring new techniques and algorithms in machine learning.",
    url: "https://example.com/research/machine-learning",
    category: "Computer Science",
  },
  {
    id: 3,
    title: "The Future of Renewable Energy",
    author: "Alice Johnson",
    description:
      "A comprehensive study on the potential of renewable energy sources.",
    url: "https://example.com/research/renewable-energy",
    category: "Renewable Energy",
  },
];

const ResearchPapersSection = () => {
  return (
    <section className="py-16 lg:py-30 relative overflow-hidden">
      {/* Paper List */}
      <div className="container_fluid">
        <div className="space-y-8 lg:space-y-0 lg:flex items-center justify-between gap-8">
          <SubHeading
            className="max-w-[686px] w-full"
            heading="We Recommend Our Latest Research Papers"
            sub_heading="Our Research Papers"
          />
          <div className="mt-8 text-center">
            <Link to="/about-us">
              <Button className="bg-secondary_main before:bg-primary_main py-5 px-6 lg:px-[30px]">
                View All Papers <FaArrowRightLong />
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {researchPapers.map((paper, index) => (
            <ResearchPaper
              key={index}
              paper={paper}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchPapersSection;