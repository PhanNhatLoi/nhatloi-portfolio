import {
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  WalletIcon,
} from "@heroicons/react/24/solid";

export const projectType = {
  Mobile: "Mobile",
  Web: "Web",
};

export const projectIcon = {
  All: <WalletIcon className="w-5" />,
  Mobile: <DevicePhoneMobileIcon className="w-5" />,
  Web: <GlobeAltIcon className="w-5" />,
};
export default {
  originalEmail: "phanloi971@gmail.com",
  originalName: "PROFILIO",
  userOriginalName: "Phan Nhất Lợi",
  positionJob: ["Web Developer", "Mobile Dev"],
  careerOrientation:
    "I am a Front-end developer with more than <strong>2 years</strong> of experience working with <strong>ReactJs</strong>. Able to fluently use <strong>Javascript</strong> and <strong>TypeScript</strong>. Knowledge of <strong>React native, NextJs and NodeJs</strong>.<p/>With the desire to find a <strong>Front-end</strong> position. In addition, I want to learn more about Back-end to become a fullstack developer<p/><i>#ReactJs, #NextJs, #Front-end, #React- native</i>",
  aboutMe: {
    skills: [
      "ReactJs",
      "NextJs",
      "React Native",
      "Node.js",
      "Express",
      "Mongodb",
      "JavaScript",
      "TypeScript",
      "Redux",
    ],
    education: [
      "<strong>COLLEGE DEGREE</strong>:<p/>Thu Dau Mot University<p/>2017-2021<p/>Bachelor of Information Technology at TDMU<p/><i>Major</i>: Software engineering<p/><i>Scale score</i>: <strong>7.42</strong>",
    ],
    certification: [
      "<strong>ITPEC</strong><p/><h1>VITEC Training CenterSpring 2019</h1><p/>Information Technology Passport Examination Take the IP exam at: Binh Duong - VITEC Training Center, Spring 2019<p/><i>Test score</i>: <strong>635</strong>",
    ],
    startYear: 2022,
    awards: 2,
  },
  projects: [
    {
      id: 1,
      title: "ECARAID-CONSUMER-WEB",
      description: "Project 1 description",
      image: "/images/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "https://consumer.ecaraid.com/",
    },
    {
      id: 2,
      title: "EDEN HUB APP",
      description: "Project 2 description",
      image: "/images/projects/2.jpg",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "https://edenhub.vn",
    },
    {
      id: 3,
      title: "E-commerce Application",
      description: "Project 3 description",
      image: "/images/projects/3.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "React Firebase Template",
      description: "Authentication and CRUD operations",
      image: "/images/projects/5.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "Full-stack Roadmap",
      description: "Project 5 description",
      image: "/images/projects/6.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
  ],
};
