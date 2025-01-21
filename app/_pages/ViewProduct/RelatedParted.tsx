import SectionTittle from "@/app/_components/SectionTittle";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ProductCard from "../Home/ProductCard";
export default function RelatedParted({ products }: any) {
  return (
    <div className="px-3 my-10">
      <SectionTittle tittle1={"Related"} tittle2={"Parts"} />

      {/* control product card according to column and grid */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-3 mt-6">
        {products?.slice(0, 8)?.map((pd: any, index: number) => (
          <ProductCard key={index} product={pd} index={index}></ProductCard>
        ))}
      </div>
      <div className="flex justify-center md:justify-between  items-center mt-6 px-5">
        <div className="text-gray-500 hidden md:flex gap-3  cursor-pointer hover:text-black ">
          <AiOutlineLeft className="text-xl" />
          PREVIOUS
        </div>

        <div className=" flex gap-3 ">
          <button className="px-3 border border-black hover:border-0 hover:m-[1px] py-2 rounded-lg text-xs hover:text-white hover:bg-[#59d8fd] ">
            1
          </button>
          <button className="px-3 border border-black hover:border-0 hover:m-[1px] py-2 rounded-lg text-xs hover:text-white hover:bg-[#59d8fd]">
            2
          </button>
          {/* selected */}
          <button className="px-3  border-0 m-[1px] py-2 rounded-lg text-xs text-white bg-[#59d8fd]">
            3
          </button>
          <button className="px-3 border border-black hover:border-0 hover:m-[1px] py-2 rounded-lg text-xs hover:text-white hover:bg-[#59d8fd]">
            4
          </button>
        </div>
        <div className="text-gray-500 hidden md:flex gap-3  cursor-pointer hover:text-black">
          NEXT <AiOutlineRight className="text-xl" />
        </div>
      </div>
    </div>
  );
}
