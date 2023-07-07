import { useMediaQuery, useTheme } from "@mui/material";
import { useSelector } from "react-redux";

import { State } from "../../slicer/types";
import Ball from "./Ball";

const SideBar = () => {
  const arr = [...Array(4)];

  const scrollToL = useSelector<State, number>(
    (state) => state.general.scrollTo
  );
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("md"));

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
            transform: scrollToL ? "translate(-50px,0)" : "translate(0,0)",
            top: "45%",
            transition: "all 0.4s ease-in-out",
          }}
        >
          {arr.map((item, pos) => {
            return <Ball key={pos} pos={pos} scrollPos={scrollToL} />;
          })}
        </div>
      </>
    );
  };
  return mobile ? <></> : renderLaptop();
};
export default SideBar;
