"use client";
import React from "react";
import MenuAnimation from "./MenuAnimation";
import { ItemMenuAminationType } from "@/app/page";

type Props = {
  items: ItemMenuAminationType[];
  isSelected: number;
};
const MenuNavbar = (props: Props) => {
  const { items, isSelected } = props;
  return (
    <div className="fixed top-0 right-5" style={{ zIndex: 999 }}>
      <MenuAnimation size={"200px"} menus={items} isSelected={isSelected} />
    </div>
  );
};

export default MenuNavbar;
