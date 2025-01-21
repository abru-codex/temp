"use client";
import { updateCategory } from "@/app/_apicalls/category";
import useCategoryStore from "@/app/_stores/categoryStore";
import { Dialog, Transition } from "@headlessui/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsSendCheck } from "react-icons/bs";
import { FiUpload } from "react-icons/fi";
import { MdOutlineCategory } from "react-icons/md";

const UpdateCategory = () => {
  const searchParam = useSearchParams();
  const session = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isDirty, dirtyFields },
  } = useForm<any>();

  const {
    getCategories,
    setSubCategories,
    setChildCategoires,
    selectedCategory,
  } = useCategoryStore();
  const closeModal = () => {
    router.back();

    reset({
      icon: "",
    });
  };

  useEffect(() => {
    if (selectedCategory) {
      reset({
        name: selectedCategory.name,
      });
    }
  }, [selectedCategory]);

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("Id", selectedCategory?.id);
    formData.append("Name", data.name);
    if (dirtyFields.icon) {
      formData.append("IconImage", data.icon[0]);
    }
    const res = await updateCategory(
      formData,
      //@ts-ignore
      session?.data?.user?.token as string
    );
    //@ts-ignore
    toast[res.type](res.message);

    await getCategories();

    if (searchParam.get("type") === "subcategory") {
      setSubCategories(Number(searchParam.get("pid")));
    } else if (searchParam.get("type") === "child category") {
      setSubCategories(Number(searchParam.get("pid")));
      setChildCategoires(Number(searchParam.get("sid")));
    }
    closeModal();
  };

  return (
    <>
      <Transition appear show={searchParam.has("updateCategory")} as={Fragment}>
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
                      <MdOutlineCategory className="w-5 h-5 mr-2" /> Update{" "}
                      {searchParam.get("type")}
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
                        Category name
                        <span className="text-meta-1">*</span>
                      </label>
                      <input
                        {...register("name", {
                          required: true,
                        })}
                        type="text"
                        placeholder="Enter category name"
                        className="w-full rounded border-[1.5px] dark:text-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                    {searchParam.get("type") === "category" && (
                      <div className="w-full mt-3">
                        <label className="mb-2.5 block text-black dark:text-white float-left">
                          Category Icon
                          <span className="text-meta-1">*</span>
                        </label>
                        <br />
                        <div
                          id="FileUpload"
                          className="relative mt-3 mb-5.5 block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                        >
                          <input
                            type="file"
                            accept="image/*"
                            max-size="307200"
                            className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                            {...register("icon")}
                          />
                          <div className="flex flex-col items-center justify-center space-y-3">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                              <FiUpload />
                            </span>
                            <p>
                              <span className="text-primary">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="mt-1.5">SVG, PNG, JPG </p>
                            <p>(max, 2400 X 400px)</p>
                          </div>
                        </div>
                      </div>
                    )}
                    {watch("icon")?.[0] && (
                      <div className="w-full mt-3 flex items-center justify-center flex-col">
                        <p>New Image</p>
                        <Image
                          //@ts-ignore
                          src={URL.createObjectURL(watch("icon")[0])}
                          alt="image"
                          width={100}
                          height={100}
                        />
                      </div>
                    )}
                    {selectedCategory?.iconUrl && (
                      <div className="w-full mt-3 flex items-center justify-center flex-col">
                        <p>Old Image</p>
                        <Image
                          //@ts-ignore
                          src={selectedCategory?.iconUrl}
                          alt="image"
                          width={100}
                          height={100}
                        />
                      </div>
                    )}
                    <div className="w-full mt-3 flex justify-end">
                      <button
                        type="submit"
                        className="px-3 py-2 bg-primary rounded-md flex items-center text-white disabled:cursor-not-allowed "
                      >
                        <BsSendCheck className="w-5 h-5 mr-2" />
                        Update
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

export default UpdateCategory;
