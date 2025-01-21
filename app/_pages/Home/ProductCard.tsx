import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: any) => {
  const { coverImageUrl, name } = product;

  return (
    <div className="card gap-5 grid grid-cols-1 rounded-md bg-base-100 shadow-md hover:shadow-2xl transition-all duration-500 filter hover:brightness-105  md:p-0">
      <figure>
        <Image
          width={300}
          height={220}
          src={coverImageUrl}
          alt="Car item"
          className="w-full h-40 object-cover"
        />
      </figure>
      <div className="grid grid-cols-1 gap-2 md:gap-3 p-3 md:p-4">
        <h2 className="flex items-center gap-2 md:text-xl font-semibold">
          {name}
        </h2>

        <div className="flex gap-3  justify-between">
          <Link
            href={`/details/?id=${product.id}`}
            className="btn  btn-primary btn-sm text-[10px] md:text-sm px-2 py-1 rounded-md    bg-mix-2"
          >
            View{" "}
          </Link>
          <button className="btn btn-primary btn-sm md:text-[10px] md:text-sm px-2 py-1 rounded-md bg-mix-2">
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
