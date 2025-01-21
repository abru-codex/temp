"use client";
import { BiSearchAlt2 } from "react-icons/bi";
function SearchInput() {
  return (
    <div className="form-control w-full">
      <div className="input-group w-full">
        <input
          type="text"
          placeholder="Search : Car Oil"
          className="input h-auto w-full input-bordered px-8 md:py-2 py-1"
        />
        <button className="btn btn-square h-auto bg-mix border-0">
          <BiSearchAlt2 className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default SearchInput;
