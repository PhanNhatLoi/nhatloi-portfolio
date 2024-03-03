import React from "react";

const BasicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative bg-smoker-background bg-cover bg-center h-screen backdrop-blur-lg flex justify-content-center ">
      <div className="absolute w-full h-full backdrop-blur-md"></div>
      {children}
    </div>
  );
};

export default BasicLayout;
