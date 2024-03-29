"use client";
import React from "react";
import dynamic from "next/dynamic";
import profileData from "@/data/profileData";

const AnimatedNumbers: any = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: profileData.projects.length,
    postfix: "+",
  },

  {
    metric: "Awards",
    value: profileData.aboutMe.awards,
  },
  {
    metric: "Years",
    value: new Date(Date.now()).getFullYear() - profileData.aboutMe.startYear,
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="neon-box rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={achievement.value}
                  locale="vi-VN"
                  className="text-white text-4xl font-bold"
                  configs={(_: any, index: number) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="neon-text" style={{ fontSize: "20px" }}>
                {achievement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
