"use client";
import AboutSection from "@/components/AboutSection";
// import AchievementsSection from "@/components/AchievementsSection";
import BasicLayout from "@/components/BasicLayout";
import EmailSection from "@/components/EmailSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import Slider from "@/components/Slider";
import React, { useState } from "react";
import {
  ChatBubbleLeftIcon,
  ClockIcon,
  CodeBracketIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import HeroPage from "@/components/HeroPage";
import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";

export type ItemMenuAminationType = {
  id: number;
  icon: React.ReactNode;
  content: React.ReactNode;
  onClick: React.Dispatch<React.SetStateAction<number>>;
  title?: string;
};
const HomePage = () => {
  const [tag, setTag] = useState<number>(0);
  const items: ItemMenuAminationType[] = [
    {
      id: 0,
      icon: <HomeIcon className={`h-5 w-5`} />,
      content: <HeroPage />,
      title: "About me",
      onClick: () => setTag(0),
    },
    {
      id: 1,
      icon: <UserIcon className={`h-5 w-5`} />,
      content: <AboutSection />,
      title: "Skills",
      onClick: () => setTag(1),
    },
    {
      id: 2,
      icon: <ClockIcon className={`h-5 w-5`} />,
      content: <Experience />,
      title: "Experience",
      onClick: () => setTag(2),
    },
    {
      id: 3,
      icon: <CodeBracketIcon className={`h-5 w-5`} />,
      content: <ProjectsSection />,
      title: "Project",
      onClick: () => setTag(3),
    },
    {
      id: 4,
      icon: <ChatBubbleLeftIcon className={`h-5 w-5`} />,
      content: <EmailSection />,
      title: "Contact",
      onClick: () => setTag(4),
    },
  ];

  return (
    <BasicLayout>
      <Navbar items={items} currentTag={tag} setTag={setTag} />
      <div className="w-full flex items-center">
        <Slider items={items} currentTag={tag} setTag={setTag} />
      </div>
    </BasicLayout>
  );
};

export default HomePage;
