import CollapsibleSection from "@/app/_components/Collapse";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProductsFilter = () => {
  //    datas
  const companys = [
    {
      name: "DELPHI",
      items: 2,
    },
    {
      name: "DENSO",
      items: 11,
    },
    {
      name: "ELSTOCK",
      items: 3,
    },
  ];
  const [categories, setCategories] = useState([]);
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const pathname = usePathname();
  const clearCategoryFromFilter = () => {
    const url = new URLSearchParams(searchParams);
    url.delete("catId");
    push(`${pathname}?${url.toString()}`, {
      scroll: false,
    });
  };
  useEffect(() => {
    console.log("fetching categories");
    fetch(`https://localhost:7189/api/Category/LoadAllCategories`)
      .then((res) => res.json())
      .then((data) => {
        console.log("categories");
        console.log(data);
        setCategories(data.value);
      });
  }, []);

  return (
    <div className=" h-auto sticky top-4 p-4 ">
      <div className="flex justify-between items-center">
        <h2 className="text-mix-2 text-xl font-semibold my-4 flex gap-3 ">
          {" "}
          Filters
        </h2>
        {searchParams.has("catId") && (
          <button
            className="hover:text-red-500"
            onClick={() => clearCategoryFromFilter()}
          >
            Clear
          </button>
        )}
      </div>
      {/* <div className="divider" />
      <p className="text-mix-2 text-sm  font-semibold my-4 flex gap-3 ">
        {" "}
        Vehicle
      </p>
      <select
        defaultValue={"Choose a Car Maker"}
        className="select select-bordered w-full max-w-xs text-xs"
      >
        <option disabled>Choose a Car Maker</option>
        <option>Toyota</option>
        <option>Honda</option>
        <option>Hero</option>
      </select>
      <div className="divider"></div> */}

      {/* brand */}
      {/* <p className="text-mix-2 text-sm  font-semibold mt-6 mb-2 flex gap-3 ">
        {" "}
        Brand
      </p>
      {companys.map((company, index) => (
        <label
          key={index}
          className="flex text-xs items-center gap-4 text-gray-700 cursor-pointer mb-3"
        >
          <input type="checkbox" className="checkbox text-[12px]" />
          <p className="select-nonpy-1">
            {company.name}
            {` (${company.items})`}
          </p>
        </label>
      ))}
      <p className="text-mix-2">+15 More</p> */}
      {/* categorys */}
      <div className="divider"></div>
      <p className="text-mix-2 text-sm  font-semibold mb-2 flex gap-3 ">
        {" "}
        categories
      </p>

      {categories?.map((category, index) => (
        <CollapsibleSection key={index} category={category} index={index} />
      ))}
    </div>
  );
};

export default ProductsFilter;
