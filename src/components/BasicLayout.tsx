import React from "react";
import MenuNavbar from "./MenuNavbar";

const BasicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative bg-smoker-background bg-cover bg-center h-screen backdrop-blur-lg p2 flex justify-content-center">
      <div className="absolute w-full h-full backdrop-blur-md"></div>
      <div
        style={{ overflow: "hidden", overflowY: "auto" }}
        className="p-10 z-10 w-5/6 h-5/6 bg-smoker-background m-auto shadow-black shadow-lg box-border rounded"
      >
        {children}
        <MenuNavbar />
      </div>
    </div>
  );
};

export default BasicLayout;
