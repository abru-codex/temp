import React from "react";
import {AiOutlineShoppingCart} from "react-icons/ai"
import {BiUserCheck} from "react-icons/bi"
import {RiUserLocationLine} from "react-icons/ri"
import {TbReportSearch} from "react-icons/tb"
import {TbSportBillard} from "react-icons/tb"
const Steps = () => {
  return (
    <div className="w-full py-6 bg-mix-4 my-4 rounded-md">
      <div className="flex">
        <div className="w-1/4">
          <div className="relative mb-2">
            <div className="w-10 h-10 mx-auto bg-mix rounded-full text-lg text-white flex items-center">
              <span className="text-center text-white w-full">
              <AiOutlineShoppingCart className="w-full"/>
              </span>
            </div>
          </div>

          <div className="text-xs text-center md:text-base">Cart</div>
        </div>

        <div className="w-1/4">
          <div className="relative mb-2">
            <div
              className="absolute flex align-center items-center align-middle content-center"
              style={{
                width: "calc(100% - 2.5rem - 1rem)",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                <div
                  className="w-0 bg-mix-4 py-1 rounded"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>

            <div className="w-10 h-10 mx-auto bg-mix rounded-full text-lg text-white flex items-center">
              <span className="text-center text-white w-full">
              <BiUserCheck className="w-full"/>
              </span>
            </div>
          </div>

          <div className="text-xs text-center md:text-base">Authorization</div>
        </div>

        <div className="w-1/4">
          <div className="relative mb-2">
            <div
              className="absolute flex align-center items-center align-middle content-center"
              style={{
                width: "calc(100% - 2.5rem - 1rem)",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                <div
                  className="w-0 bg-mix-4 py-1 rounded"
                  style={{width: "33%"}}
                ></div>
              </div>
            </div>

            <div className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
              <span className="text-center text-gray-600 w-full">
              <RiUserLocationLine className="w-full"/>
              </span>
            </div>
          </div>

          <div className="text-xs text-center md:text-base">Address</div>
        </div>

        <div className="w-1/4">
          <div className="relative mb-2">
            <div
              className="absolute flex align-center items-center align-middle content-center"
              style={{
                width: "calc(100% - 2.5rem - 1rem)",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                <div
                  className="w-0 bg-mix-4 py-1 rounded"
                  style={{ width: " 0%" }}
                ></div>
              </div>
            </div>

            <div className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
              <span className="text-center text-gray-600 w-full">
              <TbReportSearch className="w-full"/>
              </span>
            </div>
          </div>

          <div className="text-xs text-center md:text-base">Review</div>
        </div>
        <div className="w-1/4">
          <div className="relative mb-2">
            <div
              className="absolute flex align-center items-center align-middle content-center"
              style={{
                width: "calc(100% - 2.5rem - 1rem)",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                <div
                  className="w-0 bg-mix-4 py-1 rounded"
                  style={{ width: " 0%" }}
                ></div>
              </div>
            </div>

            <div className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
              <span className="text-center text-gray-600 w-full">
              <TbSportBillard className="w-full"/>
              </span>
            </div>
          </div>

          <div className="text-xs text-center md:text-base">Pay</div>
        </div>
        
      </div>
    </div>
  );
};

export default Steps;
