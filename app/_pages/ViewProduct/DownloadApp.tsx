import React from "react";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
const DownloadApp = () => {
  return (
    <div className="bg-mix-2 p-9 md:p-16 my-10 rounded-lg text-white md:flex justify-around items-center">
      <div>
        <h2 className="text-2xl md:text-4xl font-semibold md:hidden">
          <span>Download </span>
          <span className="text-mix">Our Mobile App</span>
        </h2>
        <h2 className="text-2xl md:text-4xl font-semibold hidden md:block">
          <p>Download </p>
          <span className="text-mix">Our Mobile App</span>
        </h2>

        <p className="text-sm text-gray-300 my-4">
          And get the full boodmo experience on the go
        </p>
      </div>
      <div >
      <div className="flex md:gap-5 gap-3 justify-between ">
        <button className="text-white bg-mix flex gap-2 items-center py-2 px-3 md:py-3 md:px-5 rounded-md">
          <AiFillApple className="text-3xl md:text-4xl" />
          <div className="text-left">
            <p className="text-[10px]">AVAILABLE ON THE</p>
            <p className="text-lg md:text-xl">App Store</p>
          </div>
        </button>
        <button className=" text-white bg-mix flex gap-2 items-center py-2 px-3 md:py-3 md:px-5 rounded-md">
          <FaGooglePlay className="text-3xl md:text-4xl " />
          <div className="text-left">
            <p className="text-[10px] ">GET IT ON</p>
            <p className="text-lg md:text-xl">Google Play</p>
          </div>
        </button>
      </div>
      </div>
    </div>
  );
};

export default DownloadApp;
