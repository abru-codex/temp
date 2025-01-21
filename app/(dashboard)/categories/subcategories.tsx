"use client";

import useCategoryStore from "@/app/_stores/categoryStore";
import { Dialog, Transition } from "@headlessui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Fragment } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdOutlineCategory } from "react-icons/md";
import ChildCategories from "./child-category";

const SubCategories = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { subCateGories, setChildCategoires, setSelectedCategory } =
    useCategoryStore();

  const closeModal = () => {
    router.push(pathname, {
      scroll: false,
    });
  };

  return (
    <>
      <Transition appear show={searchParams.has("subCOpen")} as={Fragment}>
        <Dialog as="div" className="relative z-99" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-primary bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" rounded-xl    border-white dark:border-slate-700 bg-white dark:bg-black ">
                  {/* header content */}
                  <div className="flex justify-between md:flex-row  shadow-lg p-3  mx-auto w-full md:min-w-[700px] items-center ">
                    <p className="flex items-center">
                      {" "}
                      <MdOutlineCategory className="w-5 h-5 mr-2" /> sub
                      category
                    </p>
                    <button
                      onClick={closeModal}
                      className="dark:text-white hover:text-red-600 "
                    >
                      <AiOutlineCloseCircle className="text-4xl float-right hover:text-danger " />
                    </button>
                  </div>
                  {/* table */}
                  <div className="py-6 px-4 md:px-6 xl:px-7.5 flex justify-between items-center">
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                      Sub category
                    </h4>
                    <button
                      onClick={() =>
                        router.push(
                          `${pathname}?createCategory=true&type=subcategory&pid=${searchParams.get(
                            "subCOpen"
                          )}`,
                          {
                            scroll: false,
                          }
                        )
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
                          <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                            Category Name
                          </th>

                          <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                            Child Category
                          </th>

                          <th className="py-4 px-4 font-medium text-black dark:text-white">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {subCateGories?.map((category: any) => {
                          return (
                            <tr key={category.id}>
                              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                <p className="text-sm text-black dark:text-white">
                                  {category?.name}
                                </p>
                              </td>

                              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                <button
                                  onClick={() => {
                                    setChildCategoires(category.id);
                                    router.push(
                                      `${pathname}?childCOpen=${
                                        category.id
                                      }&pid=${searchParams.get("subCOpen")}`,
                                      {
                                        scroll: false,
                                      }
                                    );
                                  }}
                                  className="border-2 border-bodydark px-3 py-2 rounded-lg hover:border-primary hover:text-primary flex items-center"
                                >
                                  <MdOutlineCategory className="w-5 h-5 mr-2" />{" "}
                                  child category
                                </button>
                              </td>

                              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                <div className="flex items-center space-x-3.5">
                                  <button
                                    onClick={() => {
                                      router.push(
                                        `${pathname}?deleteCategoryId=${
                                          category.id
                                        }&type=subcategory&pid=${searchParams.get(
                                          "subCOpen"
                                        )}`,
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
                                    onClick={() => {
                                      setSelectedCategory(category);
                                      router.push(
                                        `${pathname}?updateCategory=true&type=subcategory&pid=${searchParams.get(
                                          "subCOpen"
                                        )}&sid=${category.id}`,
                                        {
                                          scroll: false,
                                        }
                                      );
                                    }}
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <ChildCategories />
    </>
  );
};

export default SubCategories;
