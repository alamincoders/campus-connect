import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

import { FaArrowRightLong } from "react-icons/fa6";
const AboutSection = () => {
  return (
    <section className="py-16 lg:py-30 bg-[#EFF7FF]">
      <div className="container_fluid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="relative">
              <div className="w-[292px] absolute top-0 right-4 text-center bg-primary_main rounded-[10px] shadow-md overflow-hidden p-[21.5px] ">
                <div className="about-text-img" />
                <div>
                  <span className="text-white inline-block text-5xl font-semibold relative">
                    49{" "}
                    <sub className="absolute bottom-1 -right-5 text-3xl">+</sub>
                  </span>
                  <p className="text-white text-lg mb-0">Years of Experience</p>
                </div>
              </div>
            </div>
            <div className="w-full h-full ">
              <img
                src="/about-section.png"
                alt="about"
                className="select-none"
              />
            </div>
          </div>
          <div>
            <div className="pb-6">
              <h5 className="inline-flex items-center gap-2 text-primary_main text-lg mb-2.5 break-words font-semibold">
                <GraduationCap /> About Our System
              </h5>
              <h2 className="text-3xl lg:text-[50px] leading-none font-semibold text-[#141b22]">
                A Few Words About our System
              </h2>
            </div>
            <div>
              <p className="text-lg leading-[28px] text-secondary_main mb-4">
                Our community is being called to reimagine the future. As the
                only university where a renowned design school comes together
                with premier colleges, we are making learning more relevant and
                transformational.
              </p>{" "}
              <p className="mb-8 text-black/70">
                We are proud to offer top ranige in employment services such and
                asser payroll and benefits administrato managemen and asistance
                with global business range ployment employer readings from
                religious texts or literature are also commonly inc compliance.
              </p>
            </div>

            <div className="hidden xl:grid grid-cols-1  xl:grid-cols-2 gap-4">
              <div className="flex items-center gap-4">
                <span className="text-white text-[20px] bg-primary_main font-semibold w-24 h-14 flex items-center justify-center custom_clip">
                  01
                </span>
                <div className="w-full max-w-[240px] ">
                  <h3 className="text-2xl font-semibold mb-4">
                    Doctoral Degrees
                  </h3>
                  <p>
                    consectetur adipiscing elit sed do eiusmod tem incid idunt.
                  </p>
                </div>
              </div>{" "}
              <div className="flex items-center gap-4">
                <span className="text-white text-[20px] bg-primary_main font-semibold w-24 h-14 flex items-center justify-center custom_clip">
                  02
                </span>
                <div className="w-full max-w-[240px] ">
                  <h3 className="text-2xl font-semibold mb-4">
                    Global Students
                  </h3>
                  <p>
                    consectetur adipiscing elit sed do eiusmod tem incid idunt.
                  </p>
                </div>
              </div>
            </div>

            <Link to="/about-us">
              <Button className="xl:mt-8 py-5 px-8 bg-secondary_main before:bg-primary_main text-white items-center">
                Read More <FaArrowRightLong />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
