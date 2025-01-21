"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

import useManufacturesStore from "@/app/_stores/manufactures";
import AddManufacture from "./create-manufacture";
import DeleteManufacture from "./delete-manufacture";

const Manufacturers = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { manufactures, getManufactures } = useManufacturesStore();
  useEffect(() => {
    getManufactures();
  }, []);

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="py-6 px-4 md:px-6 xl:px-7.5 flex justify-between items-center">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Manufactures
          </h4>
          <button
            onClick={() =>
              router.push(`${pathname}?createManufacture=true`, {
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
                  Manufacture Name
                </th>

                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {manufactures?.map((manufacture: any) => {
                return (
                  <tr key={manufacture.id}>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <div className=" flex items-center">
                        <p className="text-sm text-black dark:text-white">
                          {manufacture?.manufacturer}
                        </p>
                      </div>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <button
                          onClick={() => {
                            router.push(
                              `${pathname}?deleteManuId=${manufacture.id}`,
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
                              `${pathname}?createManufacture=true&name=${manufacture?.manufacturer}&id=${manufacture.id}`,
                              {
                                scroll: false,
                              }
                            )
                          }
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
        </div>
      </div>
      <AddManufacture />
      <DeleteManufacture />
    </>
  );
};

export default Manufacturers;
