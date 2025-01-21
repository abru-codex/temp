"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BiSearchAlt2 } from "react-icons/bi";
import { useDebouncedCallback } from "use-debounce";
function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("name", term);
    } else {
      params.delete("name");
    }
    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }, 500);

  return (
    <div className="form-control w-full ">
      <div className="input-group w-full">
        <input
          type="text"
          defaultValue={searchParams.get("name")?.toString()}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          placeholder="Search : Car Oil"
          className="input h-auto w-full input-bordered px-8 md:py-4 py-2"
        />
        <button className="btn btn-square h-auto bg-mix-2">
          <BiSearchAlt2 className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default SearchInput;
