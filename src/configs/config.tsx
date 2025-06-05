//  configs constant app
/**
 * staging
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import DescriptionIcon from "@mui/icons-material/Description";

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
};

export const menuListHeaderTop = [
  {
    key: "cv",
    label: "view_cv",
    icon: <DescriptionIcon fontSize="large" />,
    color: "#FDCB6E",
    onClick: () =>
      window.open(
        "https://www.canva.com/design/DAGpOGi8DCk/uA6w5xzdBdOTqeiS2uhv0g/view?utm_content=DAGpOGi8DCk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h05893551c7",
        "_blank"
      ),
  },
  {
    key: "contact",
    icon: <ContactMailIcon fontSize="large" />,
    label: "contact",
    onClick: () => (window.location.href = "/contact-us"),
    color: "#6C63FF",
  },
  {
    key: "phone",
    icon: <LocalPhoneIcon fontSize="large" />,
    label: "phone",
    onClick: () => window.open("tel:+84367740971"),
    color: "#00B894",
  },
];

/**
 * staging
 */
