import { useContext, useEffect, useState } from "react";

import { ControllerContext } from "@/app/_providers/ControllerProvider";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { InView } from "react-intersection-observer";
import ProductCard from "./ProductCard";
import ProductColumCard from "./ProductColumCard";

const PAGE_SIZE = 10;
export default function ProductList({ setTotal }: any) {
  const [products, setProducts] = useState([]);
  const [spare, setSpare] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const searchParams = useSearchParams();

  //@ts-ignore
  const { column } = useContext(ControllerContext);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const fetchSpare = useCallback(async () => {
    const modelId = searchParams.get("modelId");
    const year = searchParams.get("year");
    const catId = searchParams.get("catId");
    const name = searchParams.get("name");
    const partNumber = searchParams.get("partNumber");
    let url = `https://banglaspareparts.abrutech.online/api/SparePart/search?pageIndex=${page}&pageSize=${PAGE_SIZE}`;
    if (modelId) {
      url += `&modelId=${modelId}`;
      setPage(1);
    }
    if (year) {
      url += `&year=${year}`;
      setPage(1);
    }
    if (catId) {
      url += `&catId=${catId}`;
      setPage(1);
    }
    if (name) {
      url += `&name=${name}`;
      setPage(1);
    }
    if (partNumber) {
      url += `&partNumber=${partNumber}`;
      setPage(1);
    }
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (
        searchParams.has("modelId") ||
        searchParams.has("year") ||
        searchParams.has("catId") ||
        searchParams.has("name") ||
        searchParams.has("partNumber")
      ) {
        setSpare(data.data);
        return;
      }
      //@ts-ignore
      setSpare([...spare, ...data.data]);

      setTotalPage(Math.ceil(data.total / PAGE_SIZE));

      setTotal(data.total);
    } catch (error) {
      console.log(error);
    }
  }, [
    page,
    searchParams.get("modelId"),
    searchParams.get("year"),
    searchParams.get("catId"),
    searchParams.get("name"),
    searchParams.get("partNumber"),
  ]);

  useEffect(() => {
    fetchSpare();
  }, [fetchSpare]);

  return (
    <div className="px-3">
      {/* control product card according to column and grid */}
      {!column ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-3">
          {spare.map((pd: any) => {
            return <ProductCard key={pd.id} product={pd} />;
          })}
          <InView
            as="div"
            className="flex justify-center w-full items-center"
            onChange={(inView, entry) => {
              if (inView) {
                totalPage > page && setPage((prev) => prev + 1);
              }
            }}
          ></InView>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          {products.map((pd, index) => (
            <ProductColumCard key={index} product={pd} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}
