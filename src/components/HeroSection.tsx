"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import profileData from "@/data/profileData";
import MUIButton from "./MUI/Button";

const HeroSection = () => {
  return (
    <section className="lg:py-16" id="about">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 neon-text">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              className="neon-text"
              sequence={profileData.positionJob}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base text-justify sm:text-lg mb-6 lg:text-xl">
            {profileData.careerOrientation}
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-1 inline-block py-1 w-full sm:w-fit mt-3"
            >
              <MUIButton neonType={5}>Contact me</MUIButton>
            </Link>

            <Link
              target="_blank"
              href={profileData.originCVPath}
              className="px-1 inline-block py-1 w-full sm:w-fit mt-3"
            >
              <MUIButton neonType={4}>Download CV</MUIButton>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <Image
            src="/images/avatar.jpeg"
            alt="hero image"
            className="m-10 shadow-lg shadow-white rounded-sm bg-[#181818] "
            width={250}
            height={250}
          />
          {/* </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
