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
    label: "my_journey",
    path: "/#my-journey",
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
    path: "https://www.canva.com/design/DAGpOGi8DCk/uA6w5xzdBdOTqeiS2uhv0g/view?utm_content=DAGpOGi8DCk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h05893551c7",
    type: "_blank",
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
