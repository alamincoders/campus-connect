import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const GalleryItem = ({ src, colSpan, rowSpan, to = "/" }) => (
  <div
    className={`relative group ${colSpan ? `col-span-${colSpan}` : ""} ${
      rowSpan ? `row-span-${rowSpan}` : ""
    }`}
  >
    <img
      src={src}
      alt=""
      className="w-full h-full object-cover"
    />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-secondary_main hover:bg-primary_main p-1 rounded z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
      <Link
        to={to}
        className="text-white"
      >
        <Plus />
      </Link>
    </div>
    <div className="absolute top-0 left-0 w-full h-full bg-primary_main-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);

const GalleryLists = () => {
  const images = [
    { src: "/slider1.webp", colSpan: 2, href: "/" },
    { src: "/slider2.webp", href: "/" },
    { src: "/slider1.webp", rowSpan: 2, href: "/" },
    { src: "/slider2.webp", href: "/" },
    { src: "/slider1.webp", colSpan: 2, href: "/" },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {images.map((image, index) => (
        <GalleryItem
          key={index}
          src={image.src}
          to={image.href}
          colSpan={image.colSpan}
          rowSpan={image.rowSpan}
        />
      ))}
    </div>
  );
};

export default GalleryLists;
