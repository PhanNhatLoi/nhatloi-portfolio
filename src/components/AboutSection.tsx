"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import profileData from "@/data/profileData";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        {profileData.aboutMe.skills.map((m) => {
          return <li key={m}>{m}</li>;
        })}
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        {profileData.aboutMe.education.map((m) => {
          return <li key={m}>{m}</li>;
        })}
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        {profileData.aboutMe.certification.map((m) => {
          return <li key={m}>{m}</li>;
        })}
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className="flex text-white">
      <div className="mt-20 h-full w-1/5">
        <div>
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
            {" "}
            Skills{" "}
          </TabButton>
        </div>
        <div>
          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            {" "}
            Education{" "}
          </TabButton>
        </div>
        <div>
          <TabButton
            selectTab={() => handleTabChange("certifications")}
            active={tab === "certifications"}
          >
            {" "}
            Certifications{" "}
          </TabButton>
        </div>
      </div>

      <div className="mt-20 w-1/2">
        {TAB_DATA.find((t) => t.id === tab)?.content}
      </div>
    </div>
  );
};

export default AboutSection;
