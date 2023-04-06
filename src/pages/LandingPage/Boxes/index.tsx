import Slider from "./Slider";
import CentralButtons from "./CentralButtons";
import useWatchLab from "./useWatchLab";
import { useContext } from "react";
import { LandingPageContext } from "../LandingPageContext";





const Boxes = () => {
  const { configCentralButtons, configSlider, } = useWatchLab();
  const { boxesOpacity } = useContext(LandingPageContext);

  return (
    <>
      <div

        style={{
          flexDirection: "column",
          height: "100vh",
          position: "absolute",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: boxesOpacity ? 1 : 0,
          transition: "opacity 2s ease-in-out",

          overflow: "hidden !important",
        }}
      >
        <CentralButtons {...configCentralButtons} />


        <Slider {...configSlider} />

      </div>
    </>
  );
};

export default Boxes;
