const CollegeInformation = ({ college }) => {
  const { name, image } = college;
  return (
    <div className="py-16 lg:py-30 relative">
      <div className="container_fluid">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-4">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-secondary_main-950 pb-4">
                {name}
              </h2>
              <img
                src={image}
                alt="name"
              />
            </div>
          </div>
          <div className="">
            <h2 className="text-3xl lg:text-5xl font-bold text-secondary_main-950">
              About {name}
            </h2>
            <p className="text-lg text-secondary_main leading-[28px]">
              {college.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeInformation;
