import { useOutsideClick } from "@/hooks/useOutsideClick";
import { cn } from "@/lib/utils";
import { useGetAllCollegesQuery } from "@/redux/api/collegesApi";
import { useEffect, useRef, useState } from "react";

// react icons
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useModal } from "../ui/modal";

const SearchBar = ({ className, shortcut = true }) => {
  const [inputFocus, setInputFocus] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { setOpen } = useModal();
  const ref = useRef(null);
  const { data: colleges, error, isLoading } = useGetAllCollegesQuery();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "e") {
        event.preventDefault(); // Prevent browser's default search bar opening
        if (ref.current) {
          setInputFocus(true);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown, { capture: true }); // Capture phase added

    return () => {
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
    };
  }, [inputFocus, ref]);

  useOutsideClick(ref, () => setInputFocus(false));

  const filteredColleges =
    colleges?.data?.filter((college) =>
      college?.name?.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  return (
    <div
      className={cn(
        "relative w-full lg:w-[40%]  product_search_input",
        className
      )}
    >
      <input
        className="px-4 py-2 border border-border rounded-md w-full pl-[40px] outline-none"
        placeholder="Search Your College..."
        onClick={() => setInputFocus(true)}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <IoIosSearch className="absolute top-[9px] left-2 text-[1.5rem] text-[#adadad]" />

      {/* shortcut hint */}
      {shortcut && (
        <div className="absolute top-[5px] right-1.5 text-[0.6rem] font-bold border border-gray-100 p-[8px] rounded-md text-gray-500">
          Ctrl + E
        </div>
      )}

      <div
        ref={ref}
        className={`${
          inputFocus
            ? "opacity-100 h-auto translate-y-0 mt-2"
            : "translate-y-[-10px] opacity-0 h-0"
        } product_search_bar bg-white border border-gray-200 w-full transition-all duration-500 overflow-hidden flex flex-col rounded-md absolute top-[40px] left-0 right-0 z-10`}
      >
        <div>
          <div className="p-4">
            {/* colleges section */}
            <div>
              <p className="text-[0.9rem] text-gray-500">
                Colleges{" "}
                <span className="text-[0.8rem] text-gray-400">
                  ({filteredColleges.length})
                </span>
              </p>

              <div className="mt-4 h-[300px] overflow-y-auto">
                {filteredColleges.length > 0 ? (
                  filteredColleges.map((college, index) => (
                    <Link
                      onClick={() => setOpen(false)}
                      to={`/colleges/${college?._id}`}
                      key={index}
                      className="flex flex-wrap gap-[10px] items-center justify-between w-full hover:bg-gray-100 p-[10px] cursor-pointer rounded-md group"
                    >
                      <div className="flex items-center gap-[15px]">
                        {/*     <img
                          src={college?.picture}
                          alt="avatar"
                          className="w-[50px] h-[50px] object-cover custom_clip"
                        /> */}
                        <div>
                          <h3 className="text-[1.1rem] font-[500] text-gray-800">
                            {college?.name}
                          </h3>
                          <p className="text-[0.8rem] break-all text-gray-500">
                            <b>Next Admission Date:</b> {college?.admissionDate}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="text-rose-400">No result found!</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
