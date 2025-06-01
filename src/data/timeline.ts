export interface TimelineItem {
  id: string;
  period: string;
  startDate: string;
  endDate: string;
  images: {
    src: string;
    alt: string;
  }[];
  company: string;
  role: string;
  description: string;
}

export const timelineData: TimelineItem[] = [
  {
    id: "university",
    period: "university_period",
    startDate: "June 2017",
    endDate: "December 2021",
    images: [
      {
        src: "/images/time_line/university/university_01.jpg",
        alt: "University Period 1",
      },
    ],
    company: "TDMU University",
    role: "Student",
    description: "university_description",
  },
  {
    id: "independentStudents",
    period: "university_period",
    startDate: "December 2021",
    endDate: "August 2022",
    images: [],
    company: "Not affiliated with any company",
    role: "Independent students",
    description: "independent_description",
  },
  {
    id: "eCarAid",
    period: "ecaraid_period",
    startDate: "September 2022", // To be filled
    endDate: "January 2024", // To be filled
    images: [
      {
        src: "/images/time_line/ecaraid/ecaraid_01.jpg",
        alt: "Ecaraid Period 1",
      },
    ],
    company: "eCarAid",
    role: "Front-end Developer",
    description: "ecaraid_description",
  },
  {
    id: "zens",
    period: "zens_period",
    startDate: "April 2024",
    endDate: "Present",
    images: [
      {
        src: "/images/time_line/zens/zens_01.jpg",
        alt: "Zens Period 1",
      },
      {
        src: "/images/time_line/zens/zens_02.jpg",
        alt: "Zens Period 2",
      },
      {
        src: "/images/time_line/zens/zens_04.jpg",
        alt: "Zens Period 3",
      },
    ],
    company: "ZenS",
    role: "Full-stack Developer",
    description: "zens_description",
  },
];
