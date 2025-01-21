"use client";
import {
  addManufactures,
  editManufactures,
} from "@/app/_apicalls/manufactures";
import useManufacturesStore from "@/app/_stores/manufactures";
import { Dialog, Transition } from "@headlessui/react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsSendCheck } from "react-icons/bs";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";

const AddManufacture = () => {
  const searchParam = useSearchParams();
  const session = useSession();
  const { addNewManufacture, getManufactures, editManufacture } =
    useManufacturesStore();
  const router = useRouter();
  const pathname = usePathname();
  const { register, handleSubmit, reset, watch } = useForm<any>();

  const closeModal = () => {
    router.push(pathname, {
      scroll: false,
    });
    reset({
      manufacturer: "",
    });
  };

  const onSubmit = async (data: any) => {
    if (!searchParam.has("name")) {
      addNewManufacture(data.manufacturer);
      closeModal();
      const res = await addManufactures(
        data.manufacturer,
        //@ts-ignore
        session.data?.user?.token
      );
      // @ts-ignore
      toast[res.type](res.message);
    } else {
      //@ts-ignore
      editManufacture(searchParam.get("id"), data.manufacturer);
      closeModal();
      const res = await editManufactures(
        //@ts-ignore
        searchParam.get("id"),
        data.manufacturer,
        //@ts-ignore
        session.data?.user?.token
      );
      // @ts-ignore
      toast[res.type](res.message);
    }
    getManufactures();
    reset();
  };

  useEffect(() => {
    if (searchParam.has("name")) {
      //@ts-ignore
      reset({ manufacturer: searchParam.get("name") });
    }
  }, [searchParam]);

  return (
    <>
      <Transition
        appear
        show={searchParam.has("createManufacture")}
        as={Fragment}
      >
        <Dialog as="div" className="relative z-9999" onClose={closeModal}>
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
                      <MdOutlinePrecisionManufacturing className="w-5 h-5 mr-2" />{" "}
                      {searchParam.has("name")
                        ? "Edit Manufacture"
                        : "Add Manufacture"}
                    </p>
                    <button
                      onClick={closeModal}
                      className="dark:text-white hover:text-red-600 "
                    >
                      <AiOutlineCloseCircle className="text-4xl float-right hover:text-danger " />
                    </button>
                  </div>
                  {/* other content */}
                  <form className="px-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full mt-3">
                      <label className="mb-2.5 block text-black dark:text-white text-left">
                        Manufacturer name
                        <span className="text-meta-1">*</span>
                      </label>
                      <input
                        {...register("manufacturer", {
                          required: true,
                        })}
                        type="text"
                        placeholder="Enter manufacture name"
                        className="w-full rounded border-[1.5px] dark:text-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>

                    <div className="w-full my-3 flex justify-end">
                      <button
                        type="submit"
                        className="px-3 py-2 bg-primary rounded-md flex items-center text-white disabled:cursor-not-allowed "
                      >
                        <BsSendCheck className="w-5 h-5 mr-2" />
                        {searchParam.has("name") ? "Edit" : "Create"}
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AddManufacture;
