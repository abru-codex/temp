"use client";
import SearchInput from "./SearchInput";

function NavSearchModal({ handleCheckboxChange, isChecked }: any) {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="nav-search-modal"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {/* content */}
          <div>
            <div className="flex my-4 justify-between">
              <h2 className="text-2xl font-medium text-mix-2">Search </h2>
              <label
                htmlFor="nav-search-modal"
                className="text-mix-2 text-2xl hover:text-mix"
              >
                X
              </label>
            </div>
            <SearchInput />
            <p className="text my-4 text-center ">Search Examples</p>
            <div className="flex justify-between text-gray-500 text-sm">
              <p>Part Number</p>
              <p>Ek0233</p>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between text-gray-500 text-xs">
              <p>Part Category</p>
              <p>Oil Filter</p>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between text-gray-500 text-xs">
              <p>Part Category + Car Make</p>
              <p>Murti Oil Filter</p>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between text-gray-500 text-xs">
              <p>Part Category + Car Model</p>
              <p>Murti Alto Oil Filter</p>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between text-gray-500 text-xs">
              <p>Part Category + Car</p>
              <p>Ek0233</p>
            </div>
            <div className="divider my-1"></div>
          </div>
          <div className="h-12"></div>
        </div>
      </div>
    </div>
  );
}

export default NavSearchModal;
