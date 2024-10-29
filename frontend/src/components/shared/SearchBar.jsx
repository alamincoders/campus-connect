import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useEffect, useRef, useState } from "react";

// react icons
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  const [inputFocus, setInputFocus] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const ref = useRef(null);

  const allPeoples = [
    {
      name: "Emily Johnson",
      picture:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1724422719~exp=1724426319~hmac=0ef6c552041a747907df66c476c3e7785bd05b39e09c2f54fa04367876376dfa&w=996",
      email: "emily.johnson@example.com",
      emailCount: 12,
      fileCount: null,
    },
    {
      name: "Michael Brown",
      picture:
        "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1724422850~exp=1724426450~hmac=7a97c16dbec9136ae629c05ef06d0c108c5f768493a2cd105ed06e1e059ffca2&w=740",
      email: "michael.brown@example.com",
      emailCount: 6,
      fileCount: 3,
    },
    {
      name: "Sophia Williams",
      picture:
        "https://img.freepik.com/free-photo/front-view-smiley-business-man_23-2148479583.jpg?t=st=1724422909~exp=1724426509~hmac=dbbbe6ba54c4c4fd7201076106decb3439f1beb48102a69ce2880283680ee650&w=826",
      email: "sophia.williams@example.com",
      emailCount: 24,
      fileCount: 10,
    },
    {
      name: "James Smith",
      picture:
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?t=st=1724422836~exp=1724426436~hmac=170d19af0485e5196848d41f6a7298d320fec8ce665445c9f37ac9ee537bedfc&w=826",
      email: "james.smith@example.com",
      emailCount: 5,
      fileCount: null,
    },
    {
      name: "Olivia Davis",
      picture:
        "https://img.freepik.com/free-photo/indoor-studio-shot-attractive-beautiful-pretty-young-woman-wearing-eyeglasses-yellow-sweatshirt-having-long-fair-hair-posing-isolated-pink-wall-people-emotions-concept_176532-6755.jpg?t=st=1724423006~exp=1724426606~hmac=616b0852a84a45ed1da08a2100bb732bc690b807d840e4cf02a0880aff3d7e68&w=996",
      email: "olivia.davis@example.com",
      emailCount: 1,
      fileCount: 12,
    },
  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "e") {
        event.preventDefault(); // Prevent browser's default search bar opening
        setInputFocus(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown, { capture: true }); // Capture phase added

    return () => {
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
    };
  }, [inputFocus]);

  useOutsideClick(ref, () => setInputFocus(false));

  const filteredPeoples = allPeoples.filter((people) =>
    people.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative w-full lg:w-[40%] product_search_input">
      <input
        className="px-4 py-2 border border-border rounded-md w-full pl-[40px] outline-none"
        placeholder="Search Your College..."
        onClick={() => setInputFocus(true)}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <IoIosSearch className="absolute top-[9px] left-2 text-[1.5rem] text-[#adadad]" />

      {/* shortcut hint */}
      <div className="absolute top-[5px] right-1.5 text-[0.6rem] font-bold border border-gray-100 p-[8px] rounded-md text-gray-500">
        Ctrl + E
      </div>

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
                  ({filteredPeoples.length})
                </span>
              </p>

              <div className="mt-4 h-[300px] overflow-y-auto">
                {filteredPeoples.length > 0 ? (
                  filteredPeoples.map((people, index) => (
                    <div
                      key={index}
                      className="flex flex-wrap gap-[10px] items-center justify-between w-full hover:bg-gray-100 p-[10px] cursor-pointer rounded-md group"
                    >
                      <div className="flex items-center gap-[15px]">
                        <img
                          src={people.picture}
                          alt="avatar"
                          className="w-[50px] h-[50px] rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-[1.1rem] font-[500] text-gray-800">
                            {people.name}
                          </h3>
                          <p className="text-[0.8rem] break-all text-gray-500">
                            {people.email}
                          </p>
                        </div>
                      </div>
                    </div>
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
