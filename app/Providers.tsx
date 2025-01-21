"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
import ControllerProvider from "./_providers/ControllerProvider";
import LayoutProvider from "./layoutProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <ControllerProvider>
        <LayoutProvider>{children}</LayoutProvider>
      </ControllerProvider>
    </SessionProvider>
  );
};

export default Providers;
