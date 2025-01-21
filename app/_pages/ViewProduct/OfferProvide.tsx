import SectionTittle from "@/app/_components/SectionTittle";

const OfferProvide = () => {
  return (
    <div className="px-3 my-10 ">
      <SectionTittle tittle1={"Offers provided by"} tittle2={"1 seller"} />
      <div className="grid grid-cols-2 md:flex md:justify-between  gap-5 shadow-md bg-base-100 rounded-md p-3 md:p-5">
        <div>
          <p className="text-gray-400 text-sm mb-2"> Sold by</p>
          <p className="font-semibold text-mix-2">GDA/SwaranRJ</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm mb-2">Price</p>
          <p className="font-semibold text-mix-2">₹1,420</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm mb-2">Dispatch within</p>
          <p className="font-semibold text-mix-2">15 days</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm mb-2">Delivery charge</p>
          <p className="font-semibold text-mix-2">+ ₹25</p>
        </div>

        <button className="btn  btn-sm md:hidden btn-outline bg-mix text-white mt-4">
          Add To Cart
        </button>

        <button className="btn md:hidden btn-sm btn-outline hover:bg-[#59d8fd]  mt-4">
          Buy Now
        </button>
        <div className="hidden md:flex gap-5">
          <button className="btn    btn-outline bg-mix text-white mt-4">
            Add To Cart
          </button>

          <button className="btn   btn-outline hover:bg-[#59d8fd]  mt-4">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferProvide;
