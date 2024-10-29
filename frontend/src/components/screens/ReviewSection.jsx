import SubHeading from "../shared/SubHeading";
import { Carousel } from "./ReviewCarousel";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    profession: "Software Engineer",
    message: "Amazing Campus!",
    avatar: "https://example.com/avatar1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    profession: "Data Scientist",
    message: "Good Experience",
    avatar: "https://example.com/avatar2.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Alice Johnson",
    profession: "Product Manager",
    message: "Highly Recommended",
    avatar: "https://example.com/avatar3.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Bob Brown",
    profession: "UX Designer",
    message: "Great place to learn and grow.",
    avatar: "https://example.com/avatar4.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Charlie Davis",
    profession: "Marketing Specialist",
    message: "Friendly environment and helpful staff.",
    avatar: "https://example.com/avatar5.jpg",
    rating: 4,
  },
  {
    id: 55,
    name: "Charlie Davis",
    profession: "Marketing Specialist",
    message: "Friendly environment and helpful staff.",
    avatar: "https://example.com/avatar5.jpg",
    rating: 4,
  },
  {
    id: 6,
    name: "Charlie Davis",
    profession: "Marketing Specialist",
    message: "Friendly environment and helpful staff.",
    avatar: "https://example.com/avatar5.jpg",
    rating: 4,
  },
  {
    id: 7,
    name: "Charlie Davis",
    profession: "Marketing Specialist",
    message: "Friendly environment and helpful staff.",
    avatar: "https://example.com/avatar5.jpg",
    rating: 4,
  },
  {
    id: 8,
    name: "Charlie Davis",
    profession: "Marketing Specialist",
    message: "Friendly environment and helpful staff.",
    avatar: "https://example.com/avatar5.jpg",
    rating: 4,
  },
  {
    id: 9,
    name: "Charlie Davis",
    profession: "Marketing Specialist",
    message: "Friendly environment and helpful staff.",
    avatar: "https://example.com/avatar5.jpg",
    rating: 4,
  },
  {
    id: 10,
    name: "Charlie Davis",
    profession: "Marketing Specialist",
    message:
      "Friendly environment and helpful staff.Friendly environment and helpful staff.Friendly environment and helpful staff.Friendly environment and helpful staff.Friendly environment and helpful staff.Friendly environment and helpful staff.Friendly environment and helpful staff.Friendly environment and helpful staff.",
    avatar: "https://example.com/avatar5.jpg",
    rating: 4,
  },
];

const ReviewSection = () => {
  return (
    <section className="py-16 lg:py-30 relative bg-[#EFF7FF]  overflow-hidden ">
      <div className="container_fluid relative">
        <SubHeading
          className="max-w-[500px] w-full mb-8"
          heading="What Our Students Say About Us"
          sub_heading="Testimonials"
        />
        <Carousel reviews={reviews} />
      </div>
    </section>
  );
};

export default ReviewSection;
