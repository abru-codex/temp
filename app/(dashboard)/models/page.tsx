"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";

import useModelStore from "@/app/_stores/models";
import CreateModel from "./create-model";
import DeleteModel from "./delete-model";
import YearModal from "./year-modal";
const Models = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { getModels, models } = useModelStore();

  useEffect(() => {
    getModels();
  }, []);

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="py-6 px-4 md:px-6 xl:px-7.5 flex justify-between items-center">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Models
          </h4>
          <button
            onClick={() =>
              router.push(`${pathname}?createModel=true`, {
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
                  Model Name
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Years
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {models?.map((model: any) => {
                return (
                  <tr key={model.modelId}>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <div className=" flex items-center">
                        <p className="text-sm text-black dark:text-white">
                          {model?.name}
                        </p>
                      </div>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className=" flex items-center">
                        <button
                          onClick={() =>
                            router.push(
                              `${pathname}?yearModal=true&modelId=${model.modelId}`,
                              {
                                scroll: false,
                              }
                            )
                          }
                          className="flex items-center justify-center gap-2 hover:text-primary border-2 border-x-bodydark px-3 py-2 rounded-md hover:border-primary"
                        >
                          <SlCalender size={18} /> Years
                        </button>
                      </div>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <button
                          onClick={() => {
                            router.push(
                              `${pathname}?deleteModelId=${model.modelId}`,
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
                              `${pathname}?createModel=true&name=${model?.name}&id=${model.modelId}&mId=${model.manufacturerId}`,
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
      <CreateModel />
      <YearModal />
      <DeleteModel />
    </>
  );
};

export default Models;
