"use client";
import { usePathname } from "next/navigation";
import { AiOutlineMenuFold } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";

import { useSession } from "next-auth/react";
import Link from "next/link";
import SearchInput from "./SearchInput";
const Navbar = ({ handleCloseFilter }: any) => {
  const img =
    "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YSUyMGdpcmwlMjBwaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";
  const pathname = usePathname();
  const isViewProduct =
    pathname === "/viewProduct" ||
    pathname === "/userprofile/orders" ||
    pathname === "/userprofile/profile";

  const session = useSession();

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href={"/"} className="btn btn-ghost normal-case text-xl">
          <span className="text-mix-2">EMA </span>{" "}
          <span className="text-mix">{'"-"'}JHON</span>
        </Link>
        {isViewProduct && (
          <div className="hidden md:block">
            <SearchInput />
          </div>
        )}
      </div>

      <div className="flex-none">
        {isViewProduct && (
          <div className="scale-75 md:hidden">
            <label
              htmlFor="nav-search-modal"
              className="btn btn-circle px-1 py-1 h-auto bg-mix border-0"
            >
              <BiSearchAlt2 className="w-6 h-6" />
            </label>
          </div>
        )}
        {/* <button className="btn btn-outline btn-sm rounded-sm mr-3">Login</button> */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <Link href={"/cart"} className="btn btn-mix btn-block">
                  View cart
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end ml-4">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-8 rounded-full">
              <img src={img} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={"/userprofile/profile"} className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>

            {
              //@ts-ignore
              session?.data?.user.role === "Admin" && (
                <li>
                  <Link href="/dashboard">Dashboard</Link>
                </li>
              )
            }
          </ul>
        </div>
        <label
          onClick={handleCloseFilter}
          htmlFor="my-drawer"
          className="select-none ml-4 text-mix-2 text-2xl"
        >
          <AiOutlineMenuFold />
        </label>
      </div>
    </div>
  );
};

export default Navbar;
