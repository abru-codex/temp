"use client";
import UseSpareStore from "@/app/_stores/spare-parts";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaChevronLeft, FaChevronRight, FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdOutlinePreview } from "react-icons/md";
import AddParts from "./add-parts";
import DeleteSpare from "./delete-part";
import PreviewParts from "./preview";

const SpareParts = () => {
  const [page, setPage] = useState(1);
  const { getSpares, spares, totalPage } = UseSpareStore();
  const pathname = usePathname();
  const router = useRouter();
  const fetchData = useCallback(async () => {
    await getSpares(page);
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="py-6 px-4 md:px-6 xl:px-7.5 flex justify-between items-center">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Spare Parts
          </h4>
          <button
            onClick={() =>
              router.push(`${pathname}?createSpare=true`, {
                scroll: false,
              })
            }
            className="border-2 border-bodydark px-3 py-2 rounded-lg hover:border-primary hover:text-primary"
          >
            <CiCirclePlus size={18} />
          </button>
        </div>
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Spare Name
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Is available:
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {spares?.map((spare: any) => {
                return (
                  <tr key={spare.id}>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <div className=" flex items-center">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                          {spare?.coverImageUrl && (
                            <div className="h-12.5 w-15 rounded-md">
                              <Image
                                src={spare?.coverImageUrl ?? ""}
                                alt=""
                                width={150}
                                height={100}
                                className="rounded-md w-20 h-12"
                              />
                            </div>
                          )}
                          <p className="text-sm text-black dark:text-white">
                            {spare?.name}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p
                        className={`text-sm ${
                          spare?.isAvailable ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {spare?.isAvailable ? "Yes" : "No"}
                      </p>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <button
                          onClick={() => {
                            router.push(
                              `${pathname}?delete-part=true&id=${spare.id}`,
                              {
                                scroll: false,
                              }
                            );
                          }}
                          className="hover:text-primary"
                        >
                          <FaRegTrashAlt size={18} />
                        </button>
                        <button
                          onClick={() =>
                            router.push(
                              `${pathname}?preview-part=true&id=${spare.id}`,
                              {
                                scroll: false,
                              }
                            )
                          }
                          className="hover:text-primary"
                        >
                          <MdOutlinePreview size={18} />
                        </button>
                        <button
                          // onClick={() =>
                          //   router.push(
                          //     `${pathname}?createModel=true&name=${model?.name}&id=${model.modelId}&mId=${model.manufacturerId}`,
                          //     {
                          //       scroll: false,
                          //     }
                          //   )
                          // }
                          className="hover:text-primary"
                        >
                          <FiEdit size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex justify-between items-center ">
            <p className="text-black dark:text-white hidden md:block">
              Total {totalPage} spare parts
            </p>
            <div className="flex justify-end items-center my-5 gap-4">
              <button
                onClick={() => setPage((prev) => prev - 1)}
                disabled={page === 1}
                className={`${
                  page === 1 ? "bg-gray-2 text-gray-4" : "bg-primary text-white"
                } px-5 py-2 rounded-lg  disabled:cursor-not-allowed`}
              >
                <FaChevronLeft />
              </button>
              <p className="text-black dark:text-white">
                Page {page} of {Math.ceil(totalPage / 10)}
              </p>
              <button
                onClick={() => setPage((prev) => prev + 1)}
                disabled={page === Math.ceil(totalPage / 10)}
                className={`${
                  page === Math.ceil(totalPage / 10)
                    ? "bg-gray-2 text-gray-4"
                    : "bg-primary text-white"
                } px-5 py-2 rounded-lg disabled:cursor-not-allowed`}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <AddParts />
      <DeleteSpare />
      <PreviewParts />
    </>
  );
};

export default SpareParts;
