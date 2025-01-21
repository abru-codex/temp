//@ts-nocheck
"use client";
import { createContext, useEffect, useState } from "react";

export const ControllerContext = createContext(null);

const ControllerProvider = ({ children }: any) => {
  if (typeof window === "undefined") return null;
  // control filter
  const [openFilter, setOpenFilter] = useState(false);
  // set check for either search or side nav
  const [isChecked, setIsChecked] = useState([false, false]);

  // set Control responsive
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // for control column
  const [column, setColumn] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const currnetWidth = window.innerWidth;
      setWindowWidth(currnetWidth);
      if (currnetWidth < 500) {
        setColumn(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const elements: unknown = {
    windowWidth,
    column,
    setColumn,
    isChecked,
    setIsChecked,
    openFilter,
    setOpenFilter,
  };

  return (
    <ControllerContext.Provider value={elements}>
      {children}
    </ControllerContext.Provider>
  );
};

export default ControllerProvider;
