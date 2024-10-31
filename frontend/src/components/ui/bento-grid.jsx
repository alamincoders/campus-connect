import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, src, to = "/" }) => {
  return (
    <div className={cn("relative group", className)}>
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
};
