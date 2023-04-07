import Container from "@mui/material/Container";
import Boxes from "../Boxes";
import Boxes2 from "../Boxes2";
import Boxes3 from "../Boxes3";
import Message from "./Message";
import { useMediaQuery, useTheme } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { LandingPageContext } from "../../LandingPageContext";



const Slider = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const { height, x } = useContext(LandingPageContext);


  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const updateTransform = () => {
      setTranslateX(x);
      requestAnimationFrame(updateTransform);
    };
    updateTransform();
  }, [x]);

  let sliderArr = [
    <Boxes
      x={x}
      color='#E5E4E1'
      metalness='0.5'
      roughness='0.1'
      clearcoatRoughness='0.9'
    />,
    <Boxes2
      x={x}
      color='#155C9B'
      metalness='0.9'
      roughness='0.5'
      clearcoatRoughness='0.1'
    />,
    <Boxes3
      x={x}
      color='purple'
      metalness='0.9'
      roughness='0.5'
      clearcoatRoughness='0.1'
    />,
    4,
  ];




  return (
    <div
      style={{
        height: `${height}px`,
        width: "100%",
        display: "flex",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          bottom: mobile ? "35%" : "33%",
          left: 0,
          right: 0,

        }}
      >
        <Message />
      </div>
      {sliderArr.map((item, index) => {
        return (
          <Container

            style={{
              minWidth: "100%",
              zIndex: "1",
              transition: "all 0.5s ease-in-out",
              transform: `translateX(${translateX}%) translateZ(0)`,
              willChange: "transform"
            }}
            key={index}
          >
            {item}
          </Container>
        );
      })}
    </div>
  );
};

export default Slider;
