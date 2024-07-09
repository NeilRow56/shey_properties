import { Navbar } from "@/components/Navbar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="h-full pt-[50px]  lg:pt-0">
        <Navbar />
        <div className="mx-auto h-screen max-w-[1056px] pt-6 ">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
