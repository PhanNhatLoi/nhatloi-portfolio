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
  originCVPath:
    "https://www.canva.com/design/DAF7Gfqgpb4/Yw6UI5unL0wQIZm7O3WHeA/edit?utm_content=DAF7Gfqgpb4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  originalName: "PORTFOLIO",
  userOriginalName: "Phan Nhất Lợi",
  positionJob: ["Web Developer", "Mobile Dev"],
  careerOrientation:
    "I am a Front-end developer with more than <strong>2 years</strong> of experience working with <strong>ReactJs</strong>. Able to fluently use <strong>Javascript</strong> and <strong>TypeScript</strong>. Knowledge of <strong>React native, NextJs and NodeJs, can work with Nosql (MongoDb) and MySql</strong>.<p/>With the desire to find a <strong>Front-end</strong> position. In addition, I want to learn more about Back-end to become a fullstack developer<p/><i>#ReactJs, #NextJs, #Front-end, #React-native, #NodeJs, #MongoDb, #MySql</i>",
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
        <li>- Perform analysis and build databases.</li>
        <li>- Based on the analysis, build APIs to retrieve data and be responsible for connecting and adjusting to suit the front-end department.</li>
        <li>- Work effectively in a team environment, supporting and collaborating with other members to achieve project goals. Contribute ideas and solutions in optimizing development processes and improving performance.</li>
        <li>-Follow the scrum model of work progress management method, regularly update progress and report this process to the PM department. Make work optimization suggestions to superiors during the work process.</li>
        </ul>
        `,
        time: [new Date("04-15-2024"), new Date()],
        position: "Back-end Developer",
        organization: "ZenS company",
      },
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
      title: "AUTO REPAIR SHOP MANAGERMENT-WEB",
      description: "Authentication and CRUD operations",
      image: "/images/projects/4.png",
      tag: ["All", "Web"],
      gitUrl: null,
      previewUrl: "https://portal.ecaraid.com/",
    },
    {
      id: 2,
      title: "Chat App realtime",
      description: "Chat realtime using NodeJs + ReactJs",
      image: "/images/projects/7.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/PhanNhatLoi/chat-app-realtime-using-pusher",
      previewUrl: "https://chat-app-realtime-orcin.vercel.app/",
    },
    {
      id: 3,
      title: "ECARAID-CONSUMER-WEB",
      description: "Ecaraid consumer",
      image: "/images/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: null,
      previewUrl: "https://eca.ecaraid.com/",
    },
    {
      id: 4,
      title: "EDEN HUB APP",
      description: "Farmer management app",
      image: "/images/projects/2.jpg",
      tag: ["All", "Mobile"],
      gitUrl: null,
      previewUrl: "https://edenhub.vn",
    },
    {
      id: 5,
      title: "Sellpath web",
      description: "Built-in website",
      image: "/images/projects/3.png",
      tag: ["All", "Web"],
      gitUrl: null,
      previewUrl: "",
    },
    {
      id: 6,
      title: "DigitFace App",
      description:
        "Identify outstanding facial features and suggest scientific improvements",
      image: "/images/projects/8.png",
      tag: ["All", "Mobile"],
      gitUrl: null,
      previewUrl: "https://apps.apple.com/vn/app/digitface/id6673892991",
    },
    {
      id: 6,
      title: "React-native chat app",
      description: "Chat app realtime app",
      image: "/images/projects/9.png",
      tag: ["All", "Mobile"],
      gitUrl: "https://github.com/PhanNhatLoi/chat-app-realtime",
      previewUrl: "",
    },
  ],
};
