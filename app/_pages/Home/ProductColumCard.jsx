import React from "react";
import { RiTruckFill } from "react-icons/ri";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { GiReturnArrow } from "react-icons/gi";
import { RiMoneyCnyBoxFill } from "react-icons/ri";

export default function ProductColumCard({ product, index }) {
  const { img, company, name } = product;
  return (
    <div className="card  grid grid-cols-3 rounded-lg bg-base-100 shadow-md transition-all duration-500 filter hover:brightness-105  p-4">
      <div className="overflow-hidden">
        <figure>
          <img src={img} alt="Car item" />
        </figure>
        <div className="flex gap-2 mt-4">
          <button className="btn flex-1 btn-outline rounded-md btn-xs text-[12px] lowercase ">
            full filled by
            <span className="text-white flex-1 bg-sky-900 px-[2px] py-1 font-bold ms-2 rounded-lg ">
              b
            </span>
          </button>
          <button className=" btn btn-primary btn-xs text-[12px] rounded-md">
            boodmo's choice
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5 p-4">
        <div>
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            {name}
            {/* <div className="badge badge-secondary">NEW</div> */}
          </h2>
          <span className="text-sm text-gray-500">TLLSSN-S</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="uppercase text-[10px] text-slate-700 font-semibold">
              Brand
            </h2>
            <p className="uppercase text-mix-2 text-[14px] underline ">
              {company}
            </p>
          </div>
          <div>
            <h2 className="uppercase text-[10px] text-slate-700 font-semibold">
              Class
            </h2>
            <p className=" text-mix-2 text-[14px] underline ">Timing Belt</p>
          </div>
          <div>
            <h2 className="uppercase text-[10px] text-slate-700 font-semibold">
              Sold By
            </h2>
            <p className=" text-mix-2 text-[14px] underline ">Bangalore/AVI</p>
          </div>
          <div>
            <h2 className="uppercase text-[10px] text-slate-700 font-semibold">
              Origin
            </h2>
            <p className=" text-mix-2 text-[14px] underline ">AfterMarket</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex  flex-col gap-3">
          <div className="flex gap-4 items-center">
            <h3 className="font-bold text-xl">$589</h3>
            <p className="flex font-semibold items-center text-mix bg-sky-50 px-2 text-xs">
              -22%
            </p>
          </div>
          <div className="flex gap-4 items-center pt-3">
            <p className="flex font-semibold items-center text-mix bg-sky-100 rounded-md p-2 text-xl">
              <RiTruckFill />
            </p>
            <p className="text-xs text-gray-500">Dispatch Within 1 day</p>
          </div>
          <div className="flex gap-4 items-center">
            <p className="flex font-semibold items-center text-mix bg-sky-100 rounded-md p-2 text-xl">
              <GiReturnArrow />
            </p>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              10 Days Assured Return
              <AiOutlineExclamationCircle />
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <p className="flex font-semibold items-center text-mix bg-sky-100 rounded-md p-2 text-xl">
              <RiMoneyCnyBoxFill />
            </p>
            <p className="text-xs text-gray-500">GST invoice</p>
          </div>
          <button className="btn  mt-5 md:text-sm px-2 py-1 rounded-sm bg-mix border-0">
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
}
