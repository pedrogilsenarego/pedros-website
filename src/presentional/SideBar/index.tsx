import { useMediaQuery, useTheme } from "@mui/material";

import Ball from "./Ball";
import { list } from "./constants";

const SideBar = () => {
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
            top: "45%",
            transition: "all 0.4s ease-in-out",
          }}
        >
          {list.map((item, pos) => {
            return <Ball key={pos} pos={pos} value={item} />;
          })}
        </div>
      </>
    );
  };
  return mobile ? <></> : renderLaptop();
};
export default SideBar;
