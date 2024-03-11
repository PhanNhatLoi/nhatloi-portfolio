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
    experience: [
      {
        content: `
        <ul>
        <li>- Develop and deploy high-quality web and mobile applications, ensuring stability and good performance.</li>
        <li>- Participate in the design and development of new features based on customer requirements and user feedback.</li>
        <li>- Ensure source code always complies with company standards and development processes.</li>
        <li>- Work effectively in a team environment, supporting and collaborating with other members to achieve project goals. Contribute ideas and solutions in optimizing development processes and improving performance.</li>
        </ul>
        `,
        time: [new Date("09-01-2022"), new Date("01-01-2024")],
        position: "Front-end Developer",
        organization: "Ecaraid company",
      },
      {
        content: `
        <ul>
        <li>- Learn more about ReactJs through the documents. Learn about the power, advantages and limitations of the library. Find and apply the best support frameworks.</li>
        <li>- Complete a series of online courses across platforms to improve your programming skills, knowledge of new technologies, and efficient workflows in software development.</li>
        <li>- Carry out small and medium-sized projects applying learned knowledge and find problems during the construction process and then find solutions.</li>
        </ul>
        `,
        time: [new Date("12-01-2021"), new Date("08-01-2022")],
        position: "Independent students",
        organization: "(Not affiliated with any company)",
      },
      {
        content: `<ul>
        <li>- Participate in scientific research projects and algorithm olympiads at the university.</li>
        <li>- Research and apply ReactJs to graduation project</li>
        </ul>
        `,
        time: [new Date("06-01-2017"), new Date("12-01-2021")],
        position: "College student",
        organization: "Thu Dau Mot University",
      },
    ],
  },
  projects: [
    {
      id: 1,
      title: "ECARAID-CONSUMER-WEB",
      description: "Project 1 description",
      image: "/images/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "https://eca.ecaraid.com/",
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
      title: "Sellpath web",
      description: "Project 3 description",
      image: "/images/projects/3.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "http://stg.sellpath.ai:43000",
    },
    {
      id: 4,
      title: "AUTO REPAIR SHOP MANAGERMENT-WEB",
      description: "Authentication and CRUD operations",
      image: "/images/projects/4.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "https://portal.ecaraid.com/",
    },
  ],
};
