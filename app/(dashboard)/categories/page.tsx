"use client";

import Image from "next/image";
import { useEffect } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

import useCategoryStore from "@/app/_stores/categoryStore";
import { usePathname, useRouter } from "next/navigation";
import { MdOutlineCategory } from "react-icons/md";
import AddCategory from "./add-category";
import DeleteCategory from "./delete-category";
import SubCategories from "./subcategories";
import UpdateCategory from "./update-category";

const Categories = () => {
  const { categories, getCategories, setSubCategories, setSelectedCategory } =
    useCategoryStore();
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="py-6 px-4 md:px-6 xl:px-7.5 flex justify-between items-center">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Category
          </h4>
          <button
            onClick={() =>
              router.push(`${pathname}?createCategory=true&type=category`, {
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
                  Category Name
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Sub Category
                </th>

                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {categories?.map((category: any) => {
                return (
                  <tr key={category.id}>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <div className=" flex items-center">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                          <div className="h-12.5 w-15 rounded-md">
                            <Image
                              src={category?.iconUrl}
                              alt="icon"
                              width={150}
                              height={100}
                              className="rounded-md w-20 h-12"
                            />
                          </div>
                          <p className="text-sm text-black dark:text-white">
                            {category?.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <button
                        onClick={() => {
                          setSubCategories(category.id);
                          router.push(`${pathname}?subCOpen=${category.id}`, {
                            scroll: false,
                          });
                        }}
                        className="border-2 border-bodydark px-3 py-2 rounded-lg hover:border-primary hover:text-primary flex items-center"
                      >
                        <MdOutlineCategory className="w-5 h-5 mr-2" /> sub
                        category
                      </button>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <button
                          onClick={() => {
                            router.push(
                              `${pathname}?deleteCategoryId=${category.id}`,
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
                              `${pathname}?updateCategory=true&type=category&pid=${category.id}`,
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
      </div>
      <SubCategories />
      <DeleteCategory />
      <AddCategory />
      <UpdateCategory />
    </>
  );
};

export default Categories;
