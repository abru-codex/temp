import { deletePart } from "@/app/_apicalls/spare-parts";
import UseSpareStore from "@/app/_stores/spare-parts";
import { Dialog, Transition } from "@headlessui/react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Fragment } from "react";
import toast from "react-hot-toast";
import { AiOutlineCloseCircle } from "react-icons/ai";

const DeleteSpare = () => {
  const searchParam = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const session = useSession();

  const { getSpares, deleteById } = UseSpareStore();

  function closeModal() {
    router.push(pathname, {
      scroll: false,
    });
  }

  return (
    <>
      <Transition appear show={searchParam.has("delete-part")} as={Fragment}>
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
            <div className="fixed inset-0 bg-danger bg-opacity-25" />
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
                <Dialog.Panel className=" rounded-xl    border-danger border-2 dark:border-slate-700 bg-white dark:bg-black ">
                  <div className="flex justify-between md:flex-row  shadow-lg p-3  mx-auto w-full md:min-w-[500px] items-center ">
                    <p>Spare parts delete confirmation</p>
                    <button
                      onClick={closeModal}
                      className="dark:text-white hover:text-red-600 "
                    >
                      <AiOutlineCloseCircle className="text-4xl float-right hover:text-danger " />
                    </button>
                  </div>

                  <div className="mt-2 p-6">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to delete this spare parts?
                    </p>
                    <p className="text-warning">You can't undo this action.</p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex 
                      justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-white bg-danger focus:outline-none focus-visible:ring-2 focus-visible:ring-danger focus-visible:ring-offset-2 mb-3"
                      onClick={async () => {
                        deleteById(searchParam.get("id")!);
                        const id = searchParam.get("id")!;
                        closeModal();
                        const message = await deletePart(
                          id,
                          //@ts-ignore
                          session?.data?.user?.token as string
                        );
                        // @ts-ignore
                        toast[message.type](message.message);
                        getSpares();
                      }}
                    >
                      Got it, thanks!
                    </button>
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

export default DeleteSpare;
