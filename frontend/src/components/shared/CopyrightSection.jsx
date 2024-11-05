const CopyrightSection = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-primary_main text-white py-3.5">
      <div className="container_fluid flex items-center gap-2 justify-center md:justify-between flex-wrap md:flex-nowrap">
        <div>
          <img
            src="/logo.png"
            alt="logo"
          />
        </div>

        <p className="text-[15px]">Copyright © {year}. All rights reserved.</p>
      </div>
    </div>
  );
};

export default CopyrightSection;
