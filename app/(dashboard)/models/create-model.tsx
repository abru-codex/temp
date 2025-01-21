"use client";
import { addModel, editModel } from "@/app/_apicalls/model";
import useManufacturesStore from "@/app/_stores/manufactures";
import useModelStore from "@/app/_stores/models";
import { Dialog, Transition } from "@headlessui/react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiOutlineCloseCircle, AiOutlineDown } from "react-icons/ai";
import { BsSendCheck } from "react-icons/bs";
import { IoLogoModelS } from "react-icons/io";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";

const CreateModel = () => {
  const searchParam = useSearchParams();
  const session = useSession();
  const { manufactures, getManufactures } = useManufacturesStore();
  const { addNewModel, getModels, editModelById } = useModelStore();
  const router = useRouter();
  const pathname = usePathname();
  const { register, handleSubmit, reset, watch } = useForm<any>();

  const closeModal = () => {
    router.push(pathname, {
      scroll: false,
    });
    reset({
      manufacturerId: "",
      name: "",
    });
  };

  const onSubmit = async (data: any) => {
    addNewModel({
      manufacturerId: data.manufacturerId,
      modelId: "wewe",
      name: data.name,
      years: null,
    });
    closeModal();
    const res = await addModel(
      data,
      //  @ts-ignore
      session?.data?.user?.token
    );
    //@ts-ignore
    toast[(await res).type](res.message);
    getModels();
    reset({
      manufacturerId: "",
      name: "",
    });
  };

  const handleEdit = async (data: any) => {
    editModelById(Number(searchParam.get("id")), {
      manufacturerId: data.manufacturerId,
      modelId: searchParam.get("id") as string,
      name: data.name,
      years: null,
    });
    closeModal();
    const res = await editModel(
      {
        ...data,
        manufacturerId: Number(data.manufacturerId),
        modelId: Number(searchParam.get("id")),
      },
      //@ts-ignore
      session?.data?.user?.token
    );
    //@ts-ignore
    toast[res.type](res.message);
    getModels();
  };

  useEffect(() => {
    getManufactures();
    if (searchParam.has("name")) {
      reset({
        manufacturerId: searchParam.get("mId"),
        name: searchParam.get("name"),
      });
    }
  }, [searchParam]);

  return (
    <>
      <Transition appear show={searchParam.has("createModel")} as={Fragment}>
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
                      <IoLogoModelS className="w-5 h-5 mr-2" />{" "}
                      {searchParam.has("name") ? "Edit Model" : "Create Model"}
                    </p>
                    <button
                      onClick={closeModal}
                      className="dark:text-white hover:text-red-600 "
                    >
                      <AiOutlineCloseCircle className="text-4xl float-right hover:text-danger " />
                    </button>
                  </div>
                  {/* other content */}
                  <form
                    className="px-5"
                    onSubmit={handleSubmit(
                      searchParam.has("name") ? handleEdit : onSubmit
                    )}
                  >
                    <div className="w-full mt-3 md:mt-0">
                      <label className="mb-3 block text-black text-left dark:text-white">
                        Select manufacturer{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <div className="relative z-1 bg-white dark:bg-form-input">
                        <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                          <MdOutlinePrecisionManufacturing />
                        </span>
                        <select
                          {...register("manufacturerId", {
                            required: true,
                          })}
                          className="relative z-1 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input  dark:text-white"
                        >
                          <option value="" selected disabled>
                            Select manufacturer
                          </option>
                          {manufactures.map((manufactur: any) => (
                            <option key={manufactur.id} value={manufactur.id}>
                              {manufactur.manufacturer}
                            </option>
                          ))}
                        </select>
                        <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                          <AiOutlineDown className="text-black dark:text-white w-5 h-5" />
                        </span>
                      </div>
                    </div>

                    <div className="w-full mt-3">
                      <label className="mb-2.5 block text-black dark:text-white text-left">
                        Model name
                        <span className="text-meta-1">*</span>
                      </label>
                      <input
                        {...register("name", {
                          required: true,
                        })}
                        type="text"
                        placeholder="Enter model name"
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

export default CreateModel;
