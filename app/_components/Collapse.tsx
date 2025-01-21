"use client";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { AiFillCaretDown, AiFillCaretLeft } from "react-icons/ai";
import CollapseChild from "./CollapseChild";

function CollapsibleSection({ category, index }: any) {
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
    if (category.subCategories) {
      setIsExpanded(!isExpanded);
    } else {
      handleSearch(category.id);
    }
  };

  return (
    <div className="my-2 transition-all ">
      <div className="flex items-center">
        <input
          id={`toggle-${index}`}
          type="checkbox"
          className="hidden"
          checked={isExpanded}
          onChange={handleToggle}
        />
        <label
          htmlFor={`toggle-${index}`}
          className={`select-none cursor-pointer text-[14px] font-semibold ${
            isExpanded ? "text-red-500" : ""
          } flex justify-between w-full items-center gap-5`}
        >
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleSearch(category.id)}
              className={` 
           ${
             searchParams.get("catId") == category.id &&
             "bg-body text-white px-2 py-1 rounded-md"
           }
             `}
            >
              {category?.name}
            </button>
            {category?.iconUrl && (
              <Image src={category?.iconUrl} width={20} height={20} alt="" />
            )}
          </div>

          {category.subCategories !== null &&
            (isExpanded ? <AiFillCaretDown /> : <AiFillCaretLeft />)}
        </label>
      </div>
      {isExpanded && (
        <div className="pl-2 py-2 m-2 transition-all bg-[#EDFAFE] rounded-lg ">
          {category?.subCategories?.map((categoryI: any) => {
            return (
              <div key={categoryI.id}>
                {categoryI?.subCategories === null && (
                  <p
                    className={`${
                      searchParams.get("catId") == categoryI.id &&
                      "text-red-500"
                    } text-[14px] transition-all  cursor-pointer mt-2`}
                  >
                    <button
                      className={`
                    ${
                      searchParams.get("catId") == categoryI.id &&
                      "bg-body text-white px-2 py-1 rounded-md"
                    }
                      `}
                      onClick={() => handleSearch(categoryI.id)}
                    >
                      {categoryI.name}
                    </button>
                  </p>
                )}

                {categoryI?.subCategories?.length > 0 && (
                  <CollapseChild category={categoryI} index={categoryI.id} />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CollapsibleSection;
