import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useRouter } from "next/router";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    color: "rgb(55, 65, 81)",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
    ...theme.applyStyles("dark", {
      color: theme.palette.grey[300],
    }),
  },
}));

export enum languageCode {
  vi = "vi",
  en = "en",
}

export default function LanguagesSelection({
  arrow = true,
}: {
  arrow?: boolean;
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const router = useRouter();
  const { locale } = router;
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLanguage = React.useCallback(
    (language: languageCode) => {
      router.push(router.pathname, router.asPath, { locale: language });
      setAnchorEl(null);
    },
    [router]
  );

  return (
    <div>
      <div onClick={handleClick} className="flex items-center cursor-pointer ">
        {locale?.toUpperCase()}{" "}
        {arrow && (!open ? <ExpandMoreIcon /> : <ExpandLessIcon />)}
      </div>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => handleChangeLanguage(languageCode.vi)}
          disableRipple
        >
          <span
            className={`${
              locale === languageCode.vi ? "text-primary-200 " : "text-black"
            }`}
          >
            🇻🇳 Tiếng Việt
          </span>
        </MenuItem>
        <MenuItem
          onClick={() => handleChangeLanguage(languageCode.en)}
          disableRipple
        >
          <span
            className={`${
              locale === languageCode.en ? "text-primary-200 " : "text-black"
            }`}
          >
            🇬🇧 English
          </span>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
