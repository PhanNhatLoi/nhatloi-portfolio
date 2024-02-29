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

export type ItemMenuAminationType = {
  icon: React.ReactNode;
  content: React.ReactNode;
  onClick?: any;
};
const HomePage = () => {
  const items = [
    {
      icon: <HomeIcon className={`h-5 w-5`} />,
      content: <HeroSection />,
    },
    {
      icon: <UserIcon className={`h-5 w-5`} />,
      content: <AboutSection />,
    },
    {
      icon: <ClockIcon className={`h-5 w-5`} />,
      content: <></>,
    },
    {
      icon: <CodeBracketIcon className={`h-5 w-5`} />,
      content: <ProjectsSection />,
    },
    {
      icon: <ChatBubbleLeftIcon className={`h-5 w-5`} />,
      content: <EmailSection />,
    },
  ];
  return (
    <BasicLayout>
      <div className="w-full sm:p-0 md:p-10 ">
        <Slider items={items}></Slider>
      </div>
    </BasicLayout>
  );
};

export default HomePage;
