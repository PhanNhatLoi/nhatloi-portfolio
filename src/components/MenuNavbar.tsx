"use client";
import React from "react";
import {
  ChatBubbleLeftIcon,
  ClockIcon,
  CodeBracketIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import MenuAnimation from "./MenuAnimation";

const MenuNavbar = () => {
  const items = [
    {
      title: "Home",
      icon: <HomeIcon className={`h-5 w-5`} color="red" />,
      href: "/home-page",
    },
    {
      title: "About",
      icon: <UserIcon className={`h-5 w-5`} color="red" />,
      href: "",
    },
    {
      title: "Project Lasted",
      icon: <CodeBracketIcon className={`h-5 w-5`} color="red" />,
      href: "/project-lasted",
    },
    {
      title: "Contact",
      icon: <ChatBubbleLeftIcon className={`h-5 w-5`} color="red" />,
      href: "",
    },
    {
      title: "Experience",
      icon: <ClockIcon className={`h-5 w-5`} color="red" />,
      href: "",
    },
  ];
  return (
    <div className="fixed top-0 right-5">
      <MenuAnimation size={"200px"} menus={items} />
    </div>
  );
};

export default MenuNavbar;
