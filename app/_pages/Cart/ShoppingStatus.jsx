import React from "react";

const ShoppingStatus = () => {
  return (
    <div className=" flex justify-between my-10 shadow-md p-4 rounded-md ">
      <div>
        <button className="btn btn-md rounded-md btn-outline text-mix-2">
          Counting Shopping
        </button>
      </div>
      <div className="flex gap-5 items-center">
        <div>
          <div>
            <span className="text-gray-400"> SUBTOTAL (3 items): </span>
            <span className="text-mix-2 text-2xl"> $ 2,738</span>
          </div>
          <div>
            <span className="text-gray-400"> Total Savings (3 items): </span>
            <span className=" text-green-400"> $ 1,178</span>
          </div>
        </div>

        <div>
          <button className="btn btn-md rounded-md btn-mix border-0">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingStatus;
