//  configs constant app
/**
 * staging
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;

export interface Imenu {
  id: number;
  label: string;
  path: string;
  description: string;
  children?: Imenu | null;
}
export const menuList = {
  menu_1: {
    id: 1,
    label: "overview",
    path: "/#overview",
    description: "overview_des",
  },
  menu_2: {
    id: 2,
    label: "skills",
    path: "/#skills",
    description: "skills_des",
  },
  menu_3: {
    id: 3,
    label: "project",
    path: "/#project",
    description: "project",
  },
  menu_4: {
    id: 4,
    label: "experience",
    path: "/#experience",
    description: "experience_des",
  },
  // menu_5: {
  //   id: 5,
  //   label: "career",
  //   path: "#",
  //   description: "",
  // },
};

export const menuListHeaderTop = [
  {
    id: 1,
    label: "contact",
    path: "/contact-us",
  },
  {
    id: 2,
    label: "view_cv",
    path: "https://www.canva.com/design/DAGK5VUvelU/wi5J38FWnX0BG8q5fsvXfA/edit",
  },
  // {
  //   id: 3,
  //   label: "news_media",
  //   path: "#",
  // },
];

/**
 * staging
 */
