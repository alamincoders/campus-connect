import { useGetReviewsQuery } from "@/redux/api/collegesApi";
import { Check, GraduationCap, Info } from "lucide-react";
import { useEffect } from "react";
import { PiCricket, PiStarFill } from "react-icons/pi";
import { VscServerProcess } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Spinner from "../ui/spinner";
import EventCard from "./EventCard";
import ResearchCard from "./ResearchCard";
import ReviewCard from "./ReviewCard";

const CheckItem = ({ text }) => (
  <div className="flex items-center gap-4">
    <Check
      className="text-primary_main p-1.5 border-gray-100 rounded-full border"
      size={32}
    />
    <p className=" text-xs xl:text-[15px] text-[#777777] leading-relaxed font-roboto">
      {text}
    </p>
  </div>
);

const Section = ({ title, children }) => (
  <div className="pt-8 space-y-4">
    <h2 className="text-2xl font-semibold text-secondary_main-950">{title}</h2>
    <div>{children}</div>
  </div>
);

const CollegeInformation = ({ college }) => {
  const {
    _id,
    name,
    description,
    image,
    admissionDate,
    admissionProcess,
    events,
    researchHistory,
    sports,
    rating,
    reviews,
  } = college;

  const {
    data: reviewFromUsers,
    error: reviewError,
    isLoading: reviewLoading,
    refetch: reviewRefetch,
  } = useGetReviewsQuery(_id);

  useEffect(() => {
    reviewRefetch();
  }, [reviewRefetch]);

  if (reviewLoading) {
    return <Spinner />;
  }

  if (reviewError) {
    console.error(reviewError);
    return (
      <div className="text-red-400 font-medium">
        Error: {reviewError?.status}
      </div>
    );
  }

  const filterReviewsForThisCollege = reviewFromUsers?.data.filter(
    (review) => review.collegeId === _id
  );

  const combinedReviews = [...reviews, ...(filterReviewsForThisCollege ?? [])];

  const reasons = [
    "A prestigious institution known for academic excellence.",
    "A top-ranking university with a vibrant campus life.",
    "Renowned for innovation and world-class programs.",
    "An esteemed environment for learning and growth.",
  ];

  return (
    <div className="py-16 lg:py-30 relative bg-[#FEFEFE]">
      <div className="container_fluid">
        <div className="flex flex-wrap lg:flex-nowrap gap-8 relative">
          <div className="max-w-[978px] w-full">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-secondary_main-950 pb-4">
                {name}
              </h2>
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded drop-shadow-2xl"
              />
              <Section title="Overview">
                <p className="text-[15px] text-[#777777] leading-relaxed font-roboto">
                  {description}
                </p>
              </Section>
              <Section title="Why Choose Us">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {reasons.map((reason, idx) => (
                    <CheckItem
                      key={idx}
                      text={reason}
                    />
                  ))}
                </div>
              </Section>
              <Section title="Upcoming Events">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {events?.map((event, index) => (
                    <EventCard
                      key={index}
                      event={event}
                    />
                  ))}
                </div>
              </Section>
              {/* researchHistory */}
              <section>
                <div className="pt-8 space-y-4">
                  <h2 className="text-2xl font-semibold text-secondary_main-950">
                    Research History
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {researchHistory?.map((research) => (
                      <ResearchCard
                        key={research?.title}
                        research={research}
                      />
                    ))}
                  </div>
                </div>
              </section>{" "}
              {/* researchHistory */}
              <section>
                <div className="pt-8 space-y-4">
                  <h2 className="text-2xl font-semibold text-secondary_main-950">
                    Reviews ({reviews?.length})
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {combinedReviews?.map((review) => (
                      <ReviewCard
                        key={review._id}
                        review={{
                          name: review?.name || "Unknown",
                          profession:
                            review?.profession || "Anonymous Reviewer",
                          rating: review.rating,
                          message: review.comment,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
          <aside className="w-full lg:w-[306px]">
            {/* other site */}
            <div className="bg-white shadow rounded-lg sticky top-20">
              <div className="">
                <h2 className="text-xl bg-secondary_main p-3 rounded-t-lg font-semibold text-white flex items-center gap-2">
                  <Info size={20} /> Information
                </h2>
                <div>
                  <p className="text-sm text-[#777777] leading-relaxed font-roboto border-b p-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 font-bold text-secondary_main">
                      <GraduationCap
                        size={20}
                        className="text-primary_main"
                      />{" "}
                      Admission Open:
                    </span>{" "}
                    {admissionDate}
                  </p>

                  <p className="text-sm text-[#777777] leading-relaxed font-roboto p-4 border-b flex justify-between">
                    <span className="inline-flex items-center gap-2 font-bold text-secondary_main">
                      <PiCricket
                        size={20}
                        className="text-primary_main"
                      />{" "}
                      Sports:
                    </span>{" "}
                    {sports?.slice(0, 3).map((sport) => (
                      <Badge
                        key={sport._id}
                        className="bg-primary_main text-[10px]"
                      >
                        {sport}
                      </Badge>
                    ))}
                  </p>

                  <p className="text-sm text-[#777777] leading-relaxed font-roboto p-4 border-b flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 font-bold text-secondary_main">
                      <PiStarFill
                        size={20}
                        className="text-primary_main"
                      />{" "}
                      Rating:
                    </span>
                    <span className="text-white inline-flex gap-3 items-center bg-secondary_main px-2.5 py-[1.5px] rounded">
                      <PiStarFill /> {rating}
                    </span>
                  </p>

                  <p className="text-sm text-[#777777] leading-relaxed font-roboto p-4 border-b">
                    <VscServerProcess
                      size={18}
                      className="text-primary_main inline-block -mt-1"
                    />{" "}
                    <b className="text-secondary_main">Admission Process:</b>{" "}
                    {admissionProcess}
                  </p>

                  <Link
                    to={`/admission-form/${_id}`}
                    className="p-4 block"
                  >
                    <Button className="w-full py-5 rounded-lg inline-block">
                      Admission Open
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CollegeInformation;
