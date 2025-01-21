"use client";
import { ControllerContext } from "@/app/_providers/ControllerProvider";
import { useContext, useState } from "react";
import Banner from "./Banner";
import CurrentOffer from "./CurrentOffer";
import OurProducts from "./OurProducts";
import Search from "./Search";
import SearchModal from "./SearchModal";

const Home = () => {
  const [isOnView, SetOnView] = useState(false);
  const [isSearchChecked, setSearchChecked] = useState(false);
  //@ts-ignore
  const { windowWidth, isChecked, setOpenFilter } =
    useContext(ControllerContext);
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const viewPointEnter = () => {
    SetOnView(true);
  };
  const viewPointLeave = () => {
    SetOnView(false);
  };

  return (
    <div>
      <Banner />
      <CurrentOffer />
      {windowWidth > 500 && <Search />}

      <OurProducts
        viewPointLeave={viewPointLeave}
        viewPointEnter={viewPointEnter}
      />

      {/* floating Button */}
      {!isChecked[0] && !isChecked[1] && !isSearchChecked && isOnView && (
        <div className="z-[999999] md:hidden absolute left-0 bottom-4 p-4  w-full flex gap-3 drawer-button">
          <label
            onClick={handleOpenFilter}
            htmlFor="my-drawer"
            className="text-mix flex-1  btn btn-outline bg-white text-mix-2 "
          >
            Filter
          </label>
          <label
            onClick={() => {
              setSearchChecked(true);
            }}
            htmlFor="search-modal"
            className="text-mix    btn btn-outline bg-white flex-1 text-mix-2 "
          >
            Search
          </label>
        </div>
      )}
      <SearchModal
        handleCheckboxChange={setSearchChecked}
        isChecked={isSearchChecked}
      />
    </div>
  );
};

export default Home;
