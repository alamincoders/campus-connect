import { useGetAllCollegesQuery } from "@/redux/api/collegesApi";
import { Check } from "lucide-react";
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

const MyCollegeInfo = ({ college }) => {
  const { data: colleges, isLoading } = useGetAllCollegesQuery();

  if (isLoading) {
    return <Spinner />;
  }

  const admittedCollege = colleges?.data.find(
    (c) => c._id === college?.collegeId
  );

  const {
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
  } = admittedCollege;

  const reasons = [
    "A prestigious institution known for academic excellence.",
    "A top-ranking university with a vibrant campus life.",
    "Renowned for innovation and world-class programs.",
    "An esteemed environment for learning and growth.",
  ];

  return (
    <div>
      <div className="w-full">
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
                {reviews?.map((review) => (
                  <ReviewCard
                    key={review._id}
                    review={{
                      name: "Unknown",
                      profession: "Anonymous Reviewer",
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
    </div>
  );
};

export default MyCollegeInfo;
