import { AiFillCar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";
import { RiTruckFill } from "react-icons/ri";
import Gallery from "./Gallery";

const Details = ({ product }: any) => {
  return (
    <div className="md:grid md:grid-cols-7 gap-8">
      <div className="md:col-span-3">
        <Gallery images={product.images} />
        <div className=" gap-4 mt-4 hidden md:flex">
          <button className="w-full  btn flex-1 btn-outline p-[10px] text-sm hover rounded-md btn-mix text-white flex items-center">
            Add To Cart
          </button>
          <button className="btn w-full flex-1 btn-outline p-[10px] text-sm hover rounded-md hover:bg-[#59d8fd] flex items-center">
            Buy Now
          </button>
        </div>
        <div className="flex items-center text-sm my-5">
          <CiLocationOn className="text-2xl" />
          <span className="font-medium text-gray-500"> Deliver to</span>
          <div className="relative mx-4">
            <input
              className="max-w-[190px]  border outline-none border-gray-400 rounded-md  px-1 md:px-[10px] py-[5px]"
              type="text"
              placeholder=" Enter your Pincode"
            />
            <span className="absolute right-2 top-[20%] text-mix">Apply</span>
          </div>
          <p className="text-xs flex items-center-center gap-1  hover:text-red-500 cursor-pointer">
            <GiSelfLove className="text-xl" /> <span>ADD TO WISHLIST</span>
          </p>
        </div>
      </div>
      <div className="md:col-span-4 mt-6 md:mt-0">
        <div className="flex justify-between">
          {/* <img src={deliveryImg} /> */}
          <div className="flex gap-3 items-center">
            <RiTruckFill className="text-mix text-xl" />

            <span>Dispatch within 15 days</span>
          </div>
        </div>
        <h2 className="text-4xl text-mix-2 mt-5 mb-4 font-bold">
          {product.name}
        </h2>
        <div className="flex  text-mix-2">
          <p className="mr-9">
            <span className="opacity-50"> Sold by </span>GDA/SwaranRJ
          </p>
          <p className="underline">Replacements from ₹1,746</p>
        </div>
        <div className="flex gap-4 items-center font-medium mt-2 mb-4">
          <p className="text-4xl"> ₹1,420</p>
          <p className="text-lg text-gray-500 line-through">MRP ₹1,578</p>
          <p className="text-xs bg-mix text-white p-1  rounded-lg">-10%</p>
        </div>
        <button className="w-full md:w-auto btn btn-outline btn-sm hover rounded-md hover:bg-[#59d8fd] flex items-center">
          <AiFillCar className="text-xl mr-3" />
          Check Compatibility
        </button>
        <div className=" flex gap-5 my-5">
          <div>
            <p className="text-sm text-gray-400 mb-2">Part Number</p>
            <p className="underline font-semibold">ZRK ...1 HSN</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-2">Origin</p>
            <p className="font-semibold">Aftermarket</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-2">Class</p>
            <p className=" font-semibold">Timing Belt</p>
          </div>
        </div>
        <div className="flex gap-5 text-sm font-semibold text-mix-2 underline">
          <p> View Compatibility</p>
          <p>View Replacements ₹1,746</p>
        </div>
        <div className="font-semibold my-5">
          <p className="text-[22px] text-mix-2 ">Description</p>
          <p className="text-gray-500">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
