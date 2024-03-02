import profileData from "@/data/profileData";
import Link from "next/link";
import React from "react";
import GithubIcon from "@/public/public/github-icon.svg";
import LinkedinIcon from "@/public/public/linkedin-icon.svg";
import Image from "next/image";
import MUIButton from "./MUI/Button";

const HeroPage = () => {
  const ContactComponent = () => {
    return (
      <div className="flex flex-wrap">
        <Link target="_blank" href="https://github.com/phannhatloi">
          <Image src={GithubIcon} alt="Github Icon" />
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/nhatloi/">
          <Image src={LinkedinIcon} alt="Linkedin Icon" />
        </Link>
        <Link
          target="_blank"
          href="https://drive.google.com/file/d/16WxYTDlEQgtE2orUhRLUVw8vcRPWsyd6/view?usp=sharing"
          className="pl-1 inline-block"
        >
          <MUIButton neonType={5}>Download CV</MUIButton>
        </Link>
      </div>
    );
  };
  return (
    <div className="w-full h-full flex flex-wrap">
      <div className="w-full md:w-1/2 lg:w-1/2 h-1/3 md:h-full relative flex flex-wrap">
        <div className="bottom-0 w-1/2 md:w-full h-full bg-contain bg-[url('/images/avatar_no_background.jpeg')] bg-no-repeat bg-bottom  rounded-md" />
        <div className="w-1/2 flex items-end block md:hidden">
          <ContactComponent />
        </div>
      </div>
      <div className="w-full md:w-1/2 relative text-white p-0 pt-10 pb-10 pl-2 text-left">
        <div className="w-24 bg-yellow-500 h-1 mb-5"></div>
        <h1 className="text-3xl font-bold">{profileData.userOriginalName}</h1>
        <span className="text-lg text-amber-500 italic">
          {profileData.positionJob.join(" / ")}
        </span>

        <div
          className="mt-10 text-gray-300"
          dangerouslySetInnerHTML={{
            __html: profileData.careerOrientation,
          }}
        />
        <div className="mt-20 hidden md:block">
          <ContactComponent />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
