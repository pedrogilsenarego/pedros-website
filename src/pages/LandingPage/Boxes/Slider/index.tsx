import Container from "@mui/material/Container";
import Boxes from "../Boxes";
import Boxes2 from "../Boxes2";
import Boxes3 from "../Boxes3";
import Message from "./Message";
import { useMediaQuery, useTheme } from "@mui/material";

interface Props {
  x: number;
}

const Slider = ({ x }: Props) => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const configBox = {
    x,
  };

  let sliderArr = [
    <Boxes
      {...configBox}
      color='#E5E4E166'
      metalness='0.5'
      roughness='0.1'
      clearcoatRoughness='0.9'
    />,
    <Boxes2
      {...configBox}
      color='#155C9B'
      metalness='0.9'
      roughness='0.5'
      clearcoatRoughness='0.1'
    />,
    <Boxes3
      {...configBox}
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
        height: "100vh",
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
              transition: "0.5s",
              transform: `translateX(${x}%)`,
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
