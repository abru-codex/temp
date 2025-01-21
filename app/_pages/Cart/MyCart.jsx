import React, { useEffect, useState } from "react";
import SectionTittle from "../../Components/SectionTittle";
import { RiDeleteBin2Fill } from "react-icons/ri";
import CartCard from "./CartCard";
import ShoppingStatus from "./ShoppingStatus";
import ShoppingStatusSM from "./ShoppingStatusSM";

const MyCart = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 4)));
  }, []);
  return (
    <div className="px-4">
      <div className="flex justify-between items-center">
        <SectionTittle tittle1={"My"} tittle2={"Cart"} />
        <div className="flex gap-3 mt-10">
          <RiDeleteBin2Fill className="text-mix text-xl md:text-2xl " />
          <span className="text-gray-400">Empty Cart</span>
        </div>
      </div>
      
        {products.map((pd, index) => (
          <CartCard product={pd} index={index} key={index} />
        ))}
      
      {/* for desktop */}
      <div className="hidden md:block sticky bottom-0 bg-white shadow-md ">
        <ShoppingStatus />
      </div>
      {/* for mobile */}
      <div className=" md:hidden my-5 sticky bottom-0 bg-white shadow-md ">
        <ShoppingStatusSM />
      </div>
      <button className="md:hidden btn btn-md rounded-md btn-outline w-full my-5 text-mix-2">
        Counting Shopping
      </button>
    </div>
  );
};

export default MyCart;
