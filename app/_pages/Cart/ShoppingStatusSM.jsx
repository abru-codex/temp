import React from "react";

const ShoppingStatusSM = () => {
  return (
    <div className="my-5 shadow-md p-4 rounded-md">
      <div>
        <div className="flex justify-between">
          <span className="text-gray-400 text-sm"> SUBTOTAL (3 items): </span>
          <span className="text-mix-2 "> $ 2,738</span>
        </div>
        <div className="text-sm flex justify-between my-2">
          <span className="text-gray-400"> Total Savings (3 items): </span>
          <span className=" text-green-400"> $ 1,178</span>
        </div>
      </div>

      <button className="btn btn-md rounded-md btn-mix border-0 w-full sticky bottom-0 bg-white shadow-md">
        Proceed To Checkout
      </button>
    </div>
  );
};

export default ShoppingStatusSM;
