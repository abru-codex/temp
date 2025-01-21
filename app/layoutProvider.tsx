//@ts-nocheck
"use client";
import { useContext } from "react";
import Footer from "./_Shared/Footer/Footer";
import NavSearchModal from "./_Shared/Navbar/NavSearchModal";
import Navbar from "./_Shared/Navbar/Navbar";
import ProductsFilter from "./_pages/Home/ProductsFilter";
import { ControllerContext } from "./_providers/ControllerProvider";

const LayoutProvider = ({ children }: any) => {
  const { windowWidth, setIsChecked, isChecked, openFilter, setOpenFilter } =
    useContext(ControllerContext);

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  const handleCheckboxChange0 = (event) => {
    setIsChecked([event.target.checked, isChecked[1]]);
  };
  const handleCheckboxChange1 = (event) => {
    setIsChecked([isChecked[0], event.target.checked]);
  };
  return (
    <div className="drawer" data-theme={"light"}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="max-w-[1144px] mx-auto ">
          {/* <!-- Page content here --> */}
          <Navbar handleCloseFilter={handleCloseFilter} />
          <NavSearchModal
            handleCheckboxChange={handleCheckboxChange0}
            isChecked={isChecked[0]}
          />
          <NavSearchModal
            handleCheckboxChange={handleCheckboxChange1}
            isChecked={isChecked[1]}
          />
          {children}
          <Footer />
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>

        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          {openFilter && windowWidth < 500 ? (
            <ProductsFilter />
          ) : (
            <>
              <li>
                <a>Search by Vehicle</a>
              </li>
              <li>
                <a>Search By Number Plate</a>
              </li>
              <li>
                <a>Search By Brands</a>
              </li>
              <li>
                <a>Car Makers</a>
              </li>
              <li>
                <a>Contact US</a>
              </li>
              <li>
                <a>
                  Car Insurace{" "}
                  <span className="badge badge-secondary">new</span>
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default LayoutProvider;
