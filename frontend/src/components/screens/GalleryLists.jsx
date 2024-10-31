import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const images = [
  { src: "/slider1.webp", colSpan: 2 },
  { src: "/slider2.webp" },
  { src: "/slider1.webp", rowSpan: 2 },
  { src: "/slider2.webp", objectPosition: "object-right" },
  { src: "/slider1.webp", colSpan: 2 },
];

const GalleryLists = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative group ${
            image.colSpan ? `col-span-${image.colSpan}` : ""
          } ${image.rowSpan ? `row-span-${image.rowSpan}` : ""}`}
        >
          <img
            src={image.src}
            alt=""
            className={`w-full h-full object-cover ${
              image.objectPosition || ""
            }`}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-secondary_main hover:bg-primary_main p-1 rounded z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Link
              to={`/colleges`}
              className="text-white "
            >
              <Plus />
            </Link>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-primary_main-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  );
};

export default GalleryLists;
