import College from "./College";

const colleges = [
  {
    id: 1,
    name: "College 1",
  },
  {
    id: 2,
    name: "College 2",
  },
  {
    id: 3,
    name: "College 3",
  },
  {
    id: 4,
    name: "College 4",
  },
  {
    id: 5,
    name: "College 5",
  },
  {
    id: 6,
    name: "College 6",
  },
];

const CollegeLists = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {colleges.map((college) => (
        <College
          key={college.id}
          college={college}
        />
      ))}
    </div>
  );
};

export default CollegeLists;
