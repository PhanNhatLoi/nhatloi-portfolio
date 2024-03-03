import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: "3px", height: 0 },
  active: { width: "3px", height: "100%" },
};

const TabButton = ({
  active,
  selectTab,
  children,
}: {
  active: boolean;
  selectTab: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab} className="flex relative mb-5">
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="absolute bg-primary-500 w-5"
      ></motion.div>
      <p
        style={{ writingMode: "vertical-lr" }}
        className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
