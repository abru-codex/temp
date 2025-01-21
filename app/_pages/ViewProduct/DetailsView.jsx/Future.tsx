import React from "react";
import {RiTruckFill} from 'react-icons/ri'
import {AiOutlineExclamationCircle} from 'react-icons/ai'
import {GiReturnArrow} from 'react-icons/gi'
import {RiMoneyCnyBoxFill} from 'react-icons/ri'
const Future = () => {  
  return (
    <div>
      <div className="grid md:grid-cols-3 bg-[#59d7fd1f] font-semibold md:p-7 p-4 ">
        <div className="flex gap-4  items-center justify-start md:justify-center pt-3">
          <p className="flex font-semibold items-center text-mix  rounded-md p-2 text-xl">
            <RiTruckFill className="text-4xl text-mix"/>
          </p>
          <p className=" text-gray-500">Dispatch Within 1 day</p>
        </div>
        <div className="flex gap-4 items-center justify-start md:justify-center">
          <p className="flex font-semibold items-center text-mix  rounded-md p-2 text-xl">
            <GiReturnArrow  className="text-4xl text-mix"/>
          </p>
          <p className=" text-gray-500 flex items-center gap-1">
            10 Days Assured Return
            <AiOutlineExclamationCircle className="text-xl"/>
          </p>
        </div>
        <div className="flex gap-4 items-center justify-start md:justify-center">
          <p className="flex font-semibold items-center text-mix  rounded-md p-2 text-xl">
            <RiMoneyCnyBoxFill className="text-4xl text-mix"/>
          </p>
          <p className=" text-gray-500">GST invoice</p>
        </div>
      </div>
    </div>
  );
};

export default Future;
