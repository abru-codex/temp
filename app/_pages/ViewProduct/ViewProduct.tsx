"use client";
import { useContext, useEffect, useState } from "react";
import { ControllerContext } from "../../_providers/ControllerProvider";
import Details from "./DetailsView.jsx/Details";
import Future from "./DetailsView.jsx/Future";
import Path from "./DetailsView.jsx/Path";
import DownloadApp from "./DownloadApp";

function ViewProduct({ product }: any) {
  //@ts-ignore
  const { isChecked } = useContext(ControllerContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="md:px-5 px-3">
      <Path />
      <Details product={product} />
      <Future />
      {/* <AfterMarket products={products} />
      <OEMReplacement products={products} />
      <FutureAnsSpecification />
      <RelatedParted products={products} />
      <Compatibility /> */}
      {/* for small devices */}
      {/* <CompatibilitySM /> */}
      {/* <OfferProvide /> */}
      <DownloadApp />
      {/* floating Button */}
      {!isChecked[0] && !isChecked[1] && (
        <div className="z-[999999] md:hidden absolute left-0 bottom-2 p-4  w-full flex gap-3">
          <button className=" flex-1  btn btn-outline  bg-mix text-white ">
            Add To Cart
          </button>
          <button className=" btn btn-outline flex-1 bg-mix-2 text-white">
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
}

export default ViewProduct;
