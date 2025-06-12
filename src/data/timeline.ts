export interface TimelineItem {
  id: string;
  period: string;
  startDate: string;
  endDate: string;
  image: string;
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
    image: "/images/time_line/university/university_01.jpg",
    company: "TDMU University",
    role: "Student",
    description: "university_description",
  },
  {
    id: "eCarAid",
    period: "ecaraid_period",
    startDate: "September 2022", // To be filled
    endDate: "January 2024", // To be filled
    image: "/images/time_line/ecaraid/ecaraid_01.jpg",
    company: "eCarAid",
    role: "Front-end Developer",
    description: "ecaraid_description",
  },
  {
    id: "zens",
    period: "zens_period",
    startDate: "April 2024",
    endDate: "Present",
    image: "/images/time_line/zens/zens_01.jpg",
    company: "ZenS",
    role: "Full-stack Developer",
    description: "zens_description",
  },
];
