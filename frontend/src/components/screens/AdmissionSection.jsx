import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const AdmissionSection = () => {
  return (
    <section className="py-16 lg:py-30 relative overflow-hidden">
      <div className="container_fluid">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/about_img.png"
              alt="about"
            />
          </div>
          <div className=" space-y-4 lg:space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-secondary_main-950 ">
              Admission & Aid
            </h2>
            <div className="space-y-4 text-lg text-secondary_main leading-[28px]">
              <p>
                Our community is being called to reimagine the future. As the
                only university where a renowned design school comes together
                with premier colleges, we are making learning more relevant and
                transformational.
              </p>
              <p className="hidden lg:block">
                At Estuidar University, we prepare you to launch your career by
                pro supportive, creative, and professional environment from
                which to learn practical skills, build a network of industry
                contacts.
              </p>
            </div>
            <Link
              to="/admission"
              className="inline-block"
            >
              <Button className="bg-secondary_main before:bg-primary_main py-5 px-6 lg:px-[30px] rounded">
                Read More <FaArrowRightLong />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;
