import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

export default function CartCard({ product, index }) {
  const { img, company, name } = product;
  const [count, setCount] = useState(0);
  const counterComponent = (
    <div className="  ">
      <button
        className="rounded-full bg-mix-2  text-white px-2 "
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <input
        className="w-[50px] border-2 mx-2 border-slate-300 px-1"
        value={count}
        type="number"
      />
      <button
        className="rounded-full bg-mix-2 text-white px-2 "
        onClick={() => {
          {
            if (count >= 1) {
              setCount(count - 1);
            }
          }
        }}
      >
        -
      </button>
    </div>
  );
  return (
    <div className="card  grid grid-cols-3 md:grid-cols-4 mt-2 gap-5 rounded-lg bg-base-100 shadow-md border-2 border-gray-100 transition-all duration-500 filter hover:brightness-105  p-4">
      <div className="overflow-hidden col-span-1">
        <figure>
          <img src={img} alt="Car item" />
        </figure>
      </div>
      <div className="col-span-2 md:col-span-3">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-mix-2">
          {name}
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <span className="text-sm text-gray-500">TLLSSN-S</span>
        <div className="w-[500]  my-2">
          <button className="btn flex-1 btn-outline rounded-md btn-xs  text-[10px] lowercase mr-2">
            full filled by
            <span className="text-white flex-1 bg-sky-900 px-[2px] py-1 font-bold ms-2 rounded-lg ">
              b
            </span>
          </button>
          <button className=" btn btn-primary btn-xs text-[10px] rounded-md">
            boodmo's choice
          </button>
        </div>
        {/* for mobile */}
        <div className="md:hidden">
          <div>
            <div className="flex gap-4 items-center">
              <h3 className="font-bold text-xl">$589</h3>
              <p className="flex font-semibold items-center text-white bg-mix py-1 rounded-md px-2 text-xs">
                -22%
              </p>
            </div>
          </div>
          <div className="text-xs flex gap-3 my-2">
            <h2 className="uppercase  text-gray-400 font-semibold">Brand</h2>
            <p className="uppercase text-mix-2   ">{company}</p>
          </div>
          <div className="text-xs flex gap-3 my-2">
            <h2 className="uppercase  text-gray-400 font-semibold">Sold By</h2>
            <p className=" uppercase text-mix-2  ">Bangalore/AVI</p>
          </div>
          <div className="flex justify-between">
            <div></div>
            {counterComponent}
          </div>
          <AiFillDelete className="text-mix-2 text-xl md:text-2xl " />
        </div>
        {/* for desktop */}
        <div className="hidden md:grid md:grid-cols-5">
          <div className="text-sm  ">
            <h2 className="uppercase  text-gray-400 font-semibold">Brand</h2>
            <p className="uppercase text-mix-2   ">{company}</p>
          </div>
          <div className="text-sm">
            <h2 className="uppercase  text-gray-400 font-semibold">Sold By</h2>
            <p className=" uppercase text-mix-2  ">Bangalore/AVI</p>
          </div>
          {counterComponent}
          <div>
            <div className="flex gap-4 items-center">
              <h3 className="font-bold text-xl">$589</h3>
              <span className="line-through font-semibold text-gray-500">
                $ 200
              </span>
            </div>
            <div>
              <span className=" font-semibold items-center text-white bg-mix py-1 rounded-md px-2 text-xs">
                -22%
              </span>
            </div>
          </div>
          <div className="flex justify-end">
            <AiFillDelete className="text-mix text-xl md:text-2xl " />
          </div>
        </div>
      </div>
    </div>
  );
}
