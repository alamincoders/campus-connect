import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const GalleryLists = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-2 relative group">
        <img
          src="/slider1.webp"
          alt=""
          className="w-full h-full object-cover"
        />{" "}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-secondary_main p-1 rounded z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            to="/"
            className="text-white"
          >
            <Plus />
          </Link>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-primary_main-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>{" "}
      <div className="relative group">
        <img
          src="/slider2.webp"
          alt=""
          className="w-full h-full object-cover"
        />{" "}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-secondary_main p-1 rounded z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            to="/"
            className="text-white"
          >
            <Plus />
          </Link>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-primary_main-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>{" "}
      <div className=" row-span-2 relative group">
        <img
          src="/slider1.webp"
          alt=""
          className="w-full h-full object-cover"
        />{" "}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-secondary_main p-1 rounded z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            to="/"
            className="text-white"
          >
            <Plus />
          </Link>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-primary_main-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>{" "}
      <div className=" relative group">
        <img
          src="/slider2.webp"
          alt=""
          className="w-full h-full object-cover"
        />{" "}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-secondary_main p-1 rounded z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            to="/"
            className="text-white"
          >
            <Plus />
          </Link>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-primary_main-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>{" "}
      <div className="col-span-2 relative group">
        <img
          src="/slider1.webp"
          alt=""
          className="w-full h-full object-cover"
        />{" "}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-secondary_main p-1 rounded z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            to="/"
            className="text-white"
          >
            <Plus />
          </Link>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-primary_main-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
};

export default GalleryLists;
