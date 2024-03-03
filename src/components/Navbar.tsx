"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import profileData from "@/data/profileData";
import { ItemMenuAminationType } from "@/app/page";
import MUIButton from "./MUI/Button";
import ButtonAnimated from "./MUI/Button2";

type Props = {
  items: ItemMenuAminationType[];
  currentTag: number;
  setTag: React.Dispatch<React.SetStateAction<number>>;
};
const Navbar = (props: Props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { items, currentTag, setTag } = props;

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 hidden sm:block">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <div className="flex items-center justify-between">
            <Image
              style={{
                borderRadius: "100%",
                boxShadow: `
                    0 0 5px #ff0000,
                    0 0 10px #FF9933,
                    0 0 20px #ff0000,
                    0 0 40px #FF9933;
              `,
              }}
              alt="logo"
              src={"/images/logo_2.jpeg"}
              width={50}
              height={50}
            />
            <h1
              style={{ fontSize: "20px", fontFamily: "sans-serif" }}
              className="ml-5 neon-text"
            >
              {profileData.originalName}
            </h1>
          </div>
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {items.map((item, index) => (
              <li key={index} className="neon-text">
                <ButtonAnimated
                  isSelected={index === currentTag}
                  onClick={() => {
                    setTag(index);
                  }}
                >
                  {item.title}
                </ButtonAnimated>
                {/* <ProjectTag /> */}
                {/* <NavLink href={link.path} title={link.title} /> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* {navbarOpen ? <MenuOverlay links={navLinks} /> : null} */}
    </nav>
  );
};

export default Navbar;
