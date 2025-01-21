"use client";
import { addYear, deleteYear, updateYear } from "@/app/_apicalls/years";
import UseYearsStore from "@/app/_stores/years";
import { Dialog, Transition } from "@headlessui/react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";

const YearModal = () => {
  const searchParam = useSearchParams();
  const session = useSession();
  const router = useRouter();
  const { years, getYears, addNewYear, deleteYearById, updateYearById } =
    UseYearsStore();
  const pathname = usePathname();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { register, handleSubmit, reset, watch } = useForm<any>();

  useEffect(() => {
    getYears(Number(searchParam.get("modelId")));
  }, [searchParam.get("modelId")]);

  const closeModal = () => {
    router.push(pathname, {
      scroll: false,
    });
    reset({
      yearDate: "",
    });
    setSelectedId(null);
  };

  const onSubmit = async (data: any) => {
    addNewYear({
      modelId: Number(searchParam.get("modelId")),
      yearDate: data.yearDate,
      id: "anyway",
    });
    const res = await addYear(
      {
        modelId: Number(searchParam.get("modelId")),
        yearDate: data.yearDate,
      },
      //@ts-ignore
      session?.data?.user?.token
    );
    //@ts-ignore
    toast[res.type](res.message);
    reset({
      yearDate: "",
    });
    getYears(Number(searchParam.get("modelId")));
  };

  const handleDelete = async (id: number) => {
    deleteYearById(id);
    const res = await deleteYear(
      id,
      //@ts-ignore
      session?.data?.user?.token
    );
    //@ts-ignore
    toast[res.type](res.message);
    getYears(Number(searchParam.get("modelId")));
  };

  const handleUpdate = async (data: any) => {
    updateYearById(selectedId as any, {
      id: selectedId,
      modelId: Number(searchParam.get("modelId")),
      yearDate: data.yearDate,
    });

    const res = await updateYear(
      {
        id: selectedId,
        modelId: Number(searchParam.get("modelId")),
        yearDate: data.yearDate,
      },
      //@ts-ignore
      session?.data?.user?.token
    );
    reset({
      yearDate: "",
    });
    //@ts-ignore
    toast[res.type](res.message);
    setSelectedId(null);

    getYears(Number(searchParam.get("modelId")));
  };

  return (
    <>
      <Transition appear show={searchParam.has("yearModal")} as={Fragment}>
        <Dialog as="div" className="relative z-999" onClose={closeModal}>
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
                      <SlCalender className="w-5 h-5 mr-2" />
                      Years
                    </p>
                    <button
                      onClick={closeModal}
                      className="dark:text-white hover:text-red-600 "
                    >
                      <AiOutlineCloseCircle className="text-4xl float-right hover:text-danger " />
                    </button>
                  </div>

                  {/* table content */}
                  <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                    <div className="pb-6 px-4 md:px-6 xl:px-7.5 flex justify-between items-center">
                      <form
                        onSubmit={handleSubmit(
                          selectedId ? handleUpdate : onSubmit
                        )}
                        className="w-full"
                      >
                        <div className="w-full mt-3">
                          <label className="mb-2.5 block text-black dark:text-white text-left">
                            Year
                            <span className="text-meta-1">*</span>
                          </label>
                          <div className="flex w-full justify-between items-center gap-3">
                            <input
                              {...register("yearDate", {
                                required: true,
                              })}
                              type="number"
                              placeholder="Enter year "
                              className="w-full rounded border-[1.5px] dark:text-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                            <button
                              type="submit"
                              className="border-2 border-bodydark py-3 px-5 rounded-lg hover:border-primary hover:text-primary"
                            >
                              <CiCirclePlus size={18} />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="max-w-full max-h-96 overflow-x-auto">
                      <table className="w-full table-auto ">
                        <thead>
                          <tr className="bg-gray-2 text-left dark:bg-meta-4">
                            <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                              Year date
                            </th>

                            <th className="py-4 px-4 font-medium text-black dark:text-white">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {years?.map((year: any) => {
                            return (
                              <tr key={year.id}>
                                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                  <div className=" flex items-center">
                                    <p className="text-sm text-black dark:text-white">
                                      {year?.yearDate}
                                    </p>
                                  </div>
                                </td>

                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                  <div className="flex items-center space-x-3.5">
                                    <button
                                      onClick={() => {
                                        handleDelete(year.id);
                                      }}
                                      className="hover:text-primary"
                                    >
                                      <FaRegTrashAlt size={18} />
                                    </button>
                                    <button
                                      onClick={() => {
                                        reset({
                                          yearDate: year.yearDate,
                                        });
                                        setSelectedId(year.id);
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default YearModal;
