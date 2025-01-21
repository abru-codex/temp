import React, { useState } from 'react';
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
const CompatibilitySMChild = () => {
    const [checked, setChecked] = useState(false);
    return (
        <div>
          <div className="collapse shadow-md bg-base-100 rounded-md">
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <div className="collapse-title text-sm font-medium">
              <div className="flex justify-between items-center">
                <p>OPTRA 1.8L</p>{" "}
                <p>{checked ? <BiUpArrow /> : <BiDownArrow />} </p>
              </div>
            </div>
            <div className="collapse-content">
            {/* 1st */}
              <div>
                <div className="grid grid-cols-2 md:flex md:justify-between  gap-5">
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Model</p>
                    <p className="font-semibold text-mix-2">OPTRA 1.8L</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Year</p>
                    <p className="font-semibold text-mix-2">
                      07.2003 - 01.2006
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Engine</p>
                    <p className="font-semibold text-mix-2">1.8 L</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Power (hp)</p>
                    <p className="font-semibold text-mix-2">115 h.p.</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Fuel type</p>
                    <p className="font-semibold text-mix-2">Petrol</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2"> Engine type </p>
                    <p className="font-semibold text-mix-2">E-TEC ll</p>
                  </div>
                  <button className="btn hidden md:block  btn-sm btn-outline hover:bg-[#59d8fd]  mt-4">
                    CHOOSE
                  </button>
                </div>
                <button className="btn md:hidden btn-sm btn-outline hover:bg-[#59d8fd] w-full mt-4">
                  CHOOSE
                </button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default CompatibilitySMChild;