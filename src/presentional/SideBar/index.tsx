import { useMediaQuery, useTheme } from "@mui/material";
import { useContext } from "react";
import { FaReact } from "react-icons/fa";
import { Colors } from "../../constants/pallete";
import { MusicContext } from "../../providers/MusicProvider";
import Ball from "./Ball";
import { list } from "./constants";

const SideBar = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("md"));
  const musicContext = useContext(MusicContext);

  const renderLaptop = () => {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            rowGap: 1,
            position: "fixed",
            zIndex: 3000,
            left: "2vw",
            top: "45%",
            transition: "all 0.4s ease-in-out",
          }}
        >
          {list.map((item, pos) => {
            return <Ball key={pos} pos={pos} value={item} />;
          })}
          <FaReact
            onClick={() => musicContext.togglePause()}
            size={"50px"}
            color={Colors.WHITE_SMUDGE}
            className={"menu-icon"}
            style={{
              position: "fixed",
              right: "65px",
              top: "calc(50% - 17.5px)", // Center vertically
              cursor: "pointer",
            }}
          />
          <FaReact
            onClick={() => musicContext.switchAudio()}
            size={"50px"}
            color="red"
            className={"menu-icon"}
            style={{
              position: "fixed",
              right: "65px",
              top: "calc(50% + 150px)", // Center vertically
              cursor: "pointer",
            }}
          />
        </div>
      </>
    );
  };
  return mobile ? <></> : renderLaptop();
};
export default SideBar;
