import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

export function BreadcrumbSection({ items, page_name }) {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center min-h-40 lg:min-h-96 2xl:min-h-[450px] relative mb-[26px]"
      style={{ backgroundImage: `url("/bdrc-bg.png")` }}
    >
      <div className="container_fluid">
        <div className="text-white flex items-center justify-center min-h-40 lg:min-h-96 2xl:min-h-[450px]">
          <h2 className="text-3xl lg:text-5xl xl:text-7xl font-bold mb-6 capitalize">
            {page_name}
          </h2>
        </div>

        <Breadcrumb className="py-4 px-9 bg-primary_main max-w-max rounded-full absolute -bottom-[26px] z-10 left-1/2 -translate-x-1/2 ">
          <BreadcrumbList>
            {items.map((item, index) => (
              <BreadcrumbItem key={index}>
                {item.path ? (
                  <BreadcrumbLink className="text-white hover:text-white/80 duration-300 transition-all hover:underline decoration-wavy text-base">
                    <Link to={item.path}>{item.label}</Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className="text-white/80 text-base">
                    {item.label}
                  </BreadcrumbPage>
                )}
                {index < items.length - 1 && <BreadcrumbSeparator />}
              </BreadcrumbItem>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
