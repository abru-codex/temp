"use client";
import { Dialog, Transition } from "@headlessui/react";
import Multiselect from "multiselect-react-dropdown";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsSendCheck, BsTools } from "react-icons/bs";
import { FiUpload } from "react-icons/fi";

import useCategoryStore from "@/app/_stores/categoryStore";
import useModelStore from "@/app/_stores/models";
import UseSpareStore from "@/app/_stores/spare-parts";
import UseYearsStore from "@/app/_stores/years";
import IsAvailableSpare from "./isavailable";

const AddParts = () => {
  const searchParam = useSearchParams();
  const session = useSession();
  const router = useRouter();
  const [compatibilities, setCompatibilities] = useState<any>([]);
  const [selectedYears, setSelectedYears] = useState<any>([]);
  const [selectedCategory, setSelectedCategory] = useState<any>([]);
  const [modelId, setModelId] = useState<any>("");
  const { register, handleSubmit, reset, watch } = useForm<any>();
  const { getModels, models } = useModelStore();
  const { getYears, years } = UseYearsStore();
  const { getSpares } = UseSpareStore();
  const { setCategoryList, categoryList } = useCategoryStore();
  const [isAvailable, setIsAvailable] = useState<boolean>(false);

  const closeModal = () => {
    router.back();

    reset({
      Name: "",
      PartNumber: "",
      Description: "",
      CoverImage: "",
      imageGallery: "",
    });
    setCompatibilities([]);
    setSelectedYears([]);
    setSelectedCategory([]);
    setModelId("");
    setIsAvailable(false);
  };

  useEffect(() => {
    setCategoryList();
    getModels();
  }, []);

  const getYearsByModelId = useCallback(() => {
    modelId && getYears(modelId);
  }, [modelId]);

  useEffect(() => {
    getYearsByModelId();
  }, [getYearsByModelId]);

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("Name", data.Name);
    formData.append("PartNumber", data.PartNumber);
    formData.append("Description", data.Description);
    formData.append("IsAvailable", isAvailable.toString());
    formData.append("CoverImage", data.CoverImage[0]);
    [...data.imageGallery]?.forEach((item: any) => {
      formData.append("imageGallery", item);
    });
    selectedCategory.forEach((item: any, index: number) => {
      formData.append(`CategoriesId`, item);
    });
    // formData.append("CategoriesId", selectedCategory);
    compatibilities.forEach((item: any, index: number) => {
      formData.append(`Compatibilities[${index}].ModelId`, item.modelId);
      item.years.forEach((year: any, indexInner: number) => {
        formData.append(`Compatibilities[${index}].Years`, year.id);
      });
    });
    // @ts-ignore
    const response = await addParts(formData, session?.data?.user?.token);

    //@ts-ignore
    toast[response.type](response.message);
    if (response.type === "success") {
      getSpares(1);
      closeModal();
    }
  };

  const processedYear = years.map((year: any) => {
    return {
      label: year.yearDate,
      value: year.id,
    };
  });

  return (
    <>
      <Transition appear show={searchParam.has("createSpare")} as={Fragment}>
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
                      <BsTools className="w-5 h-5 mr-2" /> Add spare parts
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
                    {/* name */}
                    <div className="w-full mt-3">
                      <label className="mb-2.5 block text-black dark:text-white text-left">
                        Parts Name
                        <span className="text-meta-1">*</span>
                      </label>
                      <input
                        {...register("Name", {
                          required: true,
                        })}
                        type="text"
                        placeholder="Enter Parts Name"
                        className="w-full rounded border-[1.5px] dark:text-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                    {/* part number */}
                    <div className="w-full mt-3">
                      <label className="mb-2.5 block text-black dark:text-white text-left">
                        Parts Number
                      </label>
                      <input
                        {...register("PartNumber", {
                          required: true,
                        })}
                        type="text"
                        placeholder="Enter Parts number"
                        className="w-full rounded border-[1.5px] dark:text-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                    {/* description */}
                    <div className="mt-2">
                      <label className="mb-3 block text-black dark:text-white text-left">
                        Description
                      </label>
                      <textarea
                        rows={3}
                        {...register("Description", {
                          required: true,
                        })}
                        placeholder="please enter description"
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-black dark:text-white"
                      ></textarea>
                    </div>
                    {/* category */}
                    <div className="w-full">
                      <label className="mb-3 block text-black dark:text-white text-left">
                        Select Category
                        <span className="text-danger">*</span>
                      </label>
                      <Multiselect
                        options={categoryList} // Options to display in the dropdown
                        // selectedValues={} // Preselected value to persist in dropdown
                        onSelect={(e) => {
                          const category = e.map((item: any) => {
                            return item.value;
                          });
                          setSelectedCategory([...category]);
                        }}
                        // Function will trigger on select event
                        onRemove={(e) => {
                          const category = e.map((item: any) => {
                            return item.value;
                          });
                          setSelectedCategory([...category]);
                        }} // Function will trigger on remove event
                        displayValue="label" // Property name to display in the dropdown options
                        className="rounded border border-stroke bg-transparent w-full  outline-none  focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input z-999"
                        style={{
                          optionContainer: {
                            backgroundColor: "#443C68",
                            color: "white",
                            maxHeight: "300px",
                            overFlow: "scroll",
                          },
                          chips: {
                            backgroundColor: "#443C68",
                          },
                          option: {
                            backgroundColor: "primary",
                          },
                        }}
                      />
                    </div>

                    {/* Compatibilities */}

                    <div className="max-h-96 overflow-scroll border-2 mt-4 border-bodydark2 p-2 rounded-md">
                      <h2 className="text-left text-lg text-black dark:text-white">
                        Compatibilities
                      </h2>
                      <div className="flex items-center gap-5 my-3">
                        {/* models */}
                        <div className="w-4/12">
                          <label className=" text-left block text-black dark:text-white ">
                            Select Model <span className="text-danger">*</span>
                          </label>
                          <div className="relative z-20 bg-white dark:bg-form-input">
                            <select
                              onChange={(e) => {
                                setModelId(e.target.value);
                                setSelectedYears([]);
                              }}
                              value={modelId}
                              className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition text-black dark:text-white focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                            >
                              <option value="" disabled selected>
                                Select model
                              </option>
                              {models.map((model: any) => (
                                <option key={model.name} value={model.modelId}>
                                  {model.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        {/* years multiselect */}
                        <div className="w-full">
                          <label className="mb-3 block text-black dark:text-white text-left">
                            Select Year
                            <span className="text-danger">*</span>
                          </label>
                          <Multiselect
                            options={processedYear} // Options to display in the dropdown
                            selectedValues={processedYear.filter(
                              (year: any) => {
                                return selectedYears.find(
                                  (item: any) => item.id === year.value
                                );
                              }
                            )} // Preselected value to persist in dropdown
                            onSelect={(e) => {
                              const year = e.map((item: any) => {
                                return {
                                  yearDate: item.label,
                                  id: item.value,
                                };
                              });
                              setSelectedYears([...year]);
                            }}
                            // Function will trigger on select event
                            onRemove={(e) => {
                              const year = e.map((item: any) => {
                                return {
                                  yearDate: item.label,
                                  id: item.value,
                                };
                              });
                              setSelectedYears([...year]);
                            }} // Function will trigger on remove event
                            displayValue="label" // Property name to display in the dropdown options
                            className="rounded border border-stroke bg-transparent w-full  outline-none  focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input z-999999999"
                            style={{
                              optionContainer: {
                                backgroundColor: "#443C68",
                                color: "white",
                                maxHeight: "300px",
                                overFlow: "scroll",
                              },
                              chips: {
                                backgroundColor: "#443C68",
                              },
                              option: {
                                backgroundColor: "primary",
                              },
                            }}
                          />
                        </div>
                      </div>
                      <span
                        onClick={() => {
                          if (!modelId || !selectedYears.length)
                            return toast.error("Please select model and year");
                          if (
                            compatibilities.find(
                              (item: any) => item.modelId === modelId
                            )
                          )
                            return toast.error("This model already added");
                          const data = {
                            modelId: modelId,
                            years: selectedYears,
                          };

                          setCompatibilities([...compatibilities, data]);
                          setSelectedYears([]);
                          setModelId("");
                        }}
                        className="px-3 py-2 bg-primary rounded-md flex items-center text-white disabled:cursor-not-allowed cursor-pointer"
                      >
                        + Add
                      </span>
                      <div className="mt-3">
                        {compatibilities.map((item: any, index: number) => {
                          return (
                            <div
                              key={index}
                              className="flex items-center justify-between border-b border-bodydark2 py-2"
                            >
                              <p className="text-black dark:text-white">
                                {models.find(
                                  (model: any) => model.modelId == item.modelId
                                )?.name +
                                  " " +
                                  item.years.map((year: any) => year.yearDate)}
                              </p>
                              <span
                                onClick={() => {
                                  const data = compatibilities.filter(
                                    (itemInner: any) =>
                                      itemInner.modelId != item.modelId
                                  );
                                  setCompatibilities([...data]);
                                }}
                                className="text-danger cursor-pointer"
                              >
                                remove
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* is available */}
                    <div className="mt-3">
                      <label className="mb-3 block text-black dark:text-white text-left">
                        Is this spare available?
                      </label>
                      <IsAvailableSpare
                        isChecked={isAvailable}
                        setIsChecked={setIsAvailable}
                      />
                    </div>
                    {/* cover image */}
                    <div className="w-full mt-3">
                      <label className="mb-2.5 block text-black dark:text-white float-left">
                        Cover Image
                        <span className="text-meta-1">*</span>
                      </label>
                      <br />
                      <div
                        id="FileUpload"
                        className="relative mt-3 mb-5.5 block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5 "
                        style={{
                          backgroundImage: `url(${
                            watch("CoverImage")?.length > 0
                              ? URL?.createObjectURL(watch("CoverImage")[0])
                              : ""
                          })`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                      >
                        <input
                          type="file"
                          accept="image/*"
                          multiple={false}
                          max-size="307200"
                          className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                          {...register("CoverImage")}
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
                    {/* image gallery */}
                    <div className="w-full mt-3">
                      <label className="mb-2.5 block text-black dark:text-white float-left">
                        Image Gallery
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
                          multiple={true}
                          className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                          {...register("imageGallery")}
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

                    {watch("imageGallery")?.length > 0 && (
                      <div className="flex flex-wrap gap-3">
                        {[...watch("imageGallery")]?.map(
                          (item: any, index: number) => {
                            return (
                              <div key={index} className="relative">
                                <Image
                                  width={80}
                                  height={80}
                                  src={URL?.createObjectURL(item) ?? ""}
                                  alt=""
                                  className="w-20 h-20 rounded-md"
                                />
                                {/* <span
                                  onClick={() => {
                                    const data = [
                                      watch("imageGallery"),
                                    ]?.filter(
                                      (itemInner: any) => itemInner != item
                                    );
                                    reset({
                                      ...watch(),
                                      imageGallery: data,
                                    });
                                  }}
                                  className="absolute -top-2 -right-2 cursor-pointer text-white bg-red-600 rounded-full w-5 h-5 flex items-center justify-center"
                                >
                                  X
                                </span> */}
                              </div>
                            );
                          }
                        )}
                      </div>
                    )}
                    {/* submit button */}
                    <div className="w-full mt-3 flex justify-end">
                      <button
                        type="submit"
                        className="px-3 py-2 bg-primary rounded-md flex items-center text-white disabled:cursor-not-allowed "
                      >
                        <BsSendCheck className="w-5 h-5 mr-2" />
                        Add
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

export default AddParts;
