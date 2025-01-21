"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { AiFillCaretDown, AiFillCaretLeft } from "react-icons/ai";

function CollapseChild({ category, index }: any) {
  const [isExpanded, setIsExpanded] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const handleSearch = (id: string) => {
    const url = new URLSearchParams(searchParams);
    if (id) {
      url.set("catId", id);
    }
    push(`${pathname}?${url.toString()}`, {
      scroll: false,
    });
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="my-2 transition-all ">
      <div className="flex items-center">
        <input
          id={`toggle2-${category.id}`}
          type="checkbox"
          className="hidden"
          checked={isExpanded}
          onChange={handleToggle}
        />
        <label
          htmlFor={`toggle2-${index}`}
          className={`select-none cursor-pointer text-[14px] font-semibold ${
            isExpanded ? "text-red-700" : ""
          } flex justify-between w-full items-center gap-5`}
        >
          <button
            onClick={() => handleSearch(category.id)}
            className={` 
           ${
             searchParams.get("catId") == category.id &&
             "bg-body text-white px-2 py-1 rounded-md"
           }
             `}
          >
            {category.name}
          </button>
          {isExpanded ? <AiFillCaretDown /> : <AiFillCaretLeft />}
        </label>
      </div>
      {isExpanded && (
        <div className="pl-2 py-2 m-2 transition-all bg-sky-100 border-red-200 border-2 rounded-lg ">
          {category?.subCategories?.map((categoryI: any) => (
            <p
              className={`${
                searchParams.get("catId") == categoryI.id && "text-red-500 "
              } text-[14px] transition-all   mt-2`}
              key={categoryI.id}
            >
              <button
                onClick={() => handleSearch(categoryI.id)}
                className={` 
                ${
                  searchParams.get("catId") == categoryI.id &&
                  "bg-body text-white px-2 py-1 rounded-md"
                }
                  `}
              >
                {categoryI.name}
              </button>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default CollapseChild;
