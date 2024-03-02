"use client";
import AboutSection from "@/components/AboutSection";
// import AchievementsSection from "@/components/AchievementsSection";
import BasicLayout from "@/components/BasicLayout";
import EmailSection from "@/components/EmailSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import Slider from "@/components/Slider";
import React from "react";
import {
  ChatBubbleLeftIcon,
  ClockIcon,
  CodeBracketIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import HeroPage from "@/components/HeroPage";

export type ItemMenuAminationType = {
  icon: React.ReactNode;
  content: React.ReactNode;
  onClick?: any;
  title?: string;
};
const HomePage = () => {
  const items = [
    {
      icon: <HomeIcon className={`h-5 w-5`} />,
      content: <HeroPage />,
      title: "Overview",
    },
    {
      icon: <UserIcon className={`h-5 w-5`} />,
      content: <AboutSection />,
      title: "About",
    },
    {
      icon: <ClockIcon className={`h-5 w-5`} />,
      content: <></>,
      title: "Ex",
    },
    {
      icon: <CodeBracketIcon className={`h-5 w-5`} />,
      content: <ProjectsSection />,
      title: "Project",
    },
    {
      icon: <ChatBubbleLeftIcon className={`h-5 w-5`} />,
      content: <EmailSection />,
      title: "Contact",
    },
  ];
  return (
    <BasicLayout>
      <div className="w-full flex items-center">
        <Slider items={items}></Slider>
      </div>
    </BasicLayout>
  );
};

export default HomePage;
