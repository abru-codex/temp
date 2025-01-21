"use client";
import { useContext, useState } from "react";
import { BsUiChecksGrid } from "react-icons/bs";
import { CiGrid2H } from "react-icons/ci";
import { Waypoint } from "react-waypoint";

import SectionTittle from "@/app/_components/SectionTittle";
import { ControllerContext } from "@/app/_providers/ControllerProvider";

import ProductList from "./ProductList";
import ProductsFilter from "./ProductsFilter";
const OurProducts = ({ viewPointEnter, viewPointLeave }: any) => {
  //@ts-ignore
  const { windowWidth, setColumn, column } = useContext(ControllerContext);
  const [total, setTotal] = useState(0);
  return (
    <Waypoint onEnter={viewPointEnter} onLeave={viewPointLeave}>
      <div className="px-2 md:px-0">
        <SectionTittle tittle1={"OUR"} tittle2={"Products"} />
        <div className="grid md:grid-cols-4 gap-5 my-6">
          <div className="md:col-span-1 hidden md:block">
            {windowWidth > 500 && <ProductsFilter />}
          </div>
          <div className="md:col-span-3 ">
            {/* search result */}
            <div className="flex justify-between items-center mb-6">
              <p className=" text-lg font-medium md:text-sm text-gray-500">
                Total {total} result{" "}
              </p>
              <div className="flex gap-4 mr-5">
                <select
                  className="select select-bordered text-gray-600 w-full max-w-[200px]"
                  defaultValue={"Best Match"}
                >
                  <option>Best Match</option>
                  <option>Price High To Low</option>
                  <option>Price Low To High</option>
                </select>
                <div className="hidden md:flex items-center gap-2 text-2xl border-2 border-gray-500  rounded-md">
                  <div
                    className={`p-1 m-1 rounded-md cursor-pointer ${
                      !column ? "bg-mix text-white" : ""
                    }`}
                    onClick={() => setColumn(false)}
                  >
                    <BsUiChecksGrid />
                  </div>
                  ||
                  <div
                    className={`p-1 m-1 rounded-md cursor-pointer ${
                      column ? "bg-mix text-white" : ""
                    }`}
                    onClick={() => setColumn(true)}
                  >
                    <CiGrid2H />
                  </div>
                </div>
              </div>
            </div>
            {/* all card here*/}

            <ProductList setTotal={setTotal} />
          </div>
        </div>
      </div>
    </Waypoint>
  );
};

export default OurProducts;
