import { useScrollTrigger, Slide, Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import RightMenu from "./modules/RightMenu";

export default function ScrollToTop() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <RightMenu />
      <Slide direction={"up"} in={trigger}>
        <Fab
          onClick={scrollToTop}
          color="primary"
          size="small"
          sx={{
            position: "fixed",
            background: "white",
            borderRadius: 0,
            height: "40px",
            width: "60px",
            color: "black",
          }}
          className="bottom-0 lg:right-[100px] right-[10px]"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Slide>
    </div>
  );
}
