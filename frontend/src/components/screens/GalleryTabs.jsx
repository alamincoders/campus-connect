import { useState } from "react";

const GalleryTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: "View All", translateX: "translate-x-[5px]" },
    { id: 2, label: "Financial", translateX: "translate-x-[109px]" },
    { id: 3, label: "Analyzing", translateX: "translate-x-[220px]" },
    { id: 4, label: "Marketing", translateX: "translate-x-[336px]" },
    {
      id: 5,
      label: "Business",
      translateX: "translate-x-[447px]",
      width: "!w-[100px]",
    },
  ];

  return (
    <ul className="hidden 2xl:flex items-center border rounded-full p-1 pl-0 relative z-0">
      <div
        className={`${tabs.find((tab) => tab.id === activeTab).translateX} ${
          tabs.find((tab) => tab.id === activeTab).width || "w-[95px]"
        } !bg-primary_main absolute !text-[#fff] h-[85%] transition duration-700 rounded-full border-transparent cursor-pointer`}
      ></div>
      {tabs.map((tab) => (
        <li
          key={tab.id}
          className={`${
            activeTab === tab.id ? "!text-[#fff]" : "text-[#424242]"
          } px-6 py-2 z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </li>
      ))}
    </ul>
  );
};

export default GalleryTabs;
