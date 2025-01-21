import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Fragment, useCallback, useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const PreviewParts = () => {
  const searchParam = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [sparePreview, setSparePreview] = useState({} as any);

  const fetchSparePreview = useCallback(async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE}/SparePart/${searchParam.get("id")}`
    );
    setSparePreview(res.data);
  }, [searchParam.get("id")]);

  useEffect(() => {
    searchParam.get("id") && fetchSparePreview();
  }, [fetchSparePreview, searchParam.get("id")]);

  function closeModal() {
    router.push(pathname, {
      scroll: false,
    });
  }
  if (!searchParam.has("preview-part")) return null;
  return (
    <>
      <Transition appear show={searchParam.has("preview-part")} as={Fragment}>
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
            <div className="fixed inset-0 bg-success bg-opacity-25" />
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
                <Dialog.Panel className=" rounded-xl   border-success border-2 dark:border-slate-700 bg-white dark:bg-black ">
                  <div className="flex justify-between md:flex-row  shadow-lg p-3  mx-auto w-full  items-center ">
                    <p>Spare parts preview</p>
                    <button
                      onClick={closeModal}
                      className="dark:text-white hover:text-red-600 "
                    >
                      <AiOutlineCloseCircle className="text-4xl float-right hover:text-danger " />
                    </button>
                  </div>
                  <div className="w-[95vw] h-screen p-3">
                    <div className="flex flex-col md:flex-row justify-between items-start">
                      <div className="flex flex-col items-start justify-center">
                        {sparePreview?.coveImage && (
                          <>
                            <p className="font-semibold text-xl my-4">
                              Cover image
                            </p>
                            <Image
                              width={500}
                              height={300}
                              src={sparePreview?.coveImage}
                              alt=""
                              className="w-96 h-80 rounded-xl object-fill"
                            />
                          </>
                        )}
                        <p className="font-semibold text-xl mt-4">Images</p>
                        <div className="grid grid-cols-4 mt-3 gap-5">
                          {sparePreview?.images?.map((image: any) => {
                            return (
                              <Image
                                width={120}
                                height={80}
                                src={image}
                                alt=""
                                className="w-44 h-31 rounded-xl object-fill"
                              />
                            );
                          })}
                        </div>
                      </div>
                      {/* vertical line break */}
                      <div className="border-l-2 border-bodydark h-96 px-3" />

                      <div className="flex flex-col items-start w-1/2 p-2">
                        <p className="font-semibold text-xl my-2">
                          Name : {sparePreview?.name}
                        </p>
                        <p className="font-semibold text-lg my-2 text-left">
                          Description: {sparePreview?.description}
                        </p>
                        <p className="font-semibold text-lg my-2">
                          Part availablity :{" "}
                          {sparePreview?.isAvailable
                            ? "Available"
                            : "Not available"}
                        </p>
                        <div className="mt-3">
                          <p className="font-semibold text-lg text-left">
                            Categories :
                          </p>
                          <div className="flex gap-3 mt-2">
                            {sparePreview?.categories?.map((category: any) => (
                              <p
                                key={category}
                                className="rounded-full px-3 py-2 border-primary border-2"
                              >
                                {category}
                              </p>
                            ))}
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="font-semibold text-lg text-left">
                            Part number : {sparePreview?.partNumber}
                          </p>
                        </div>
                        <div className="mt-3">
                          <p className="font-semibold text-lg text-left">
                            This part is compatible with the following models :
                          </p>
                          <div className="grid grid-cols-3 grid-flow gap-2">
                            {sparePreview?.compatibility?.map((model: any) => {
                              return (
                                <div className="flex flex-col items-start border-2 border-bodydark2 rounded-md p-3 hover:border-primary">
                                  <p className="font-semibold text-lg text-left">
                                    Model name : {model?.model}
                                  </p>
                                  <p className="font-semibold text-lg text-left">
                                    Model number : {model?.year}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
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

export default PreviewParts;
