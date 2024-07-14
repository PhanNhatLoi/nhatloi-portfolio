"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import profileData from "@/data/profileData";

const TAB_DATA = [
  {
    title: "Skills",
    id: 0,
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
    id: 1,
    content: (
      <ul className="list-disc pl-2">
        {profileData.aboutMe.education.map((m) => {
          return (
            <li key={m}>
              <div
                dangerouslySetInnerHTML={{
                  __html: m,
                }}
              />
            </li>
          );
        })}
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: 2,
    content: (
      <ul className="list-disc pl-2">
        {profileData.aboutMe.certification.map((m) => {
          return (
            <li key={m}>
              <div
                dangerouslySetInnerHTML={{
                  __html: m,
                }}
              />
            </li>
          );
        })}
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState(0);
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: number) => {
    startTransition(() => {
      setTab(id);
    });
  };
  const items = [
    {
      id: 0,
      content: (
        <TabButton selectTab={() => handleTabChange(0)} active={tab === 0}>
          {" "}
          Skills{" "}
        </TabButton>
      ),
      image: (
        <img
          style={{ width: "100%", maxWidth: "500px" }}
          alt="skill"
          src={"/images/skills.png"}
        />
      ),
    },
    {
      id: 1,
      content: (
        <TabButton selectTab={() => handleTabChange(1)} active={tab === 1}>
          {" "}
          Education{" "}
        </TabButton>
      ),
      image: (
        <img
          style={{ width: "100%", maxWidth: "400px" }}
          alt="education"
          src={"/images/COLLEGE_DEGREE.png"}
        />
      ),
    },
    {
      id: 2,
      content: (
        <TabButton selectTab={() => handleTabChange(2)} active={tab === 2}>
          {" "}
          Certifications{" "}
        </TabButton>
      ),
      image: (
        <img
          style={{ width: "100%", maxWidth: "200px" }}
          alt="certifications"
          src={"/images/IPTec.png"}
        />
      ),
    },
  ];

  return (
    <div className="flex text-white">
      <div className="mt-20 h-full w-1/5">
        {items.map((item) => {
          return <div key={item.id}>{item.content}</div>;
        })}
      </div>

      <div className="mt-20 w-full block sm:flex flex-wrap justify-between">
        {TAB_DATA.find((t) => t.id === tab)?.content}
        {items.find((t) => t.id === tab)?.image}
      </div>
    </div>
  );
};

export default AboutSection;
