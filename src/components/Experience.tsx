import React from "react";
import TimeLine from "./TimeLine";
import profileData from "@/data/profileData";

const Experience = () => {
  return (
    <div className="p-0 text-white pt-14">
      <TimeLine data={profileData.aboutMe.experience} />
    </div>
  );
};

export default Experience;
