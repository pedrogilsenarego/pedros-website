import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import SelectorSliderColor from "../../components/SelectorSliderColor";
import SelectorSlider from "../../components/SelectorSliderText";
import { Colors } from "../../constants/pallete";

const Manager = () => {
  const [openModal, setOpenModal] = useState<boolean>(true);
  const [mode, setMode] = useState<"dark" | "light" | "hipster">("dark");
  const backgroundColor = "#6495ED05";
  const labelSize = 80;

  return (
    <div
      style={{
        position: "absolute",
        borderTop: "solid 2px #ffffff05",
        borderBottom: "solid 2px #ffffff05",
        borderLeft: "solid 2px #ffffff05",
        borderBottomLeftRadius: "20px",
        borderTopLeftRadius: "20px",
        backgroundColor,
        right: openModal ? 0 : -500,
        transition: "all ease-in-out 0.5s",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1000,
        width: "500px",
        height: "500px",
        padding: "20px",
      }}
    >
      <div
        onClick={() => setOpenModal(!openModal)}
        style={{
          borderTop: "solid 2px #ffffff05",
          borderBottom: "solid 2px #ffffff05",
          borderLeft: "solid 2px #ffffff05",
          position: "absolute",
          left: `-${labelSize}px`,
          top: `calc(250px - ${labelSize / 2}px)`,
          height: `${labelSize}px`,
          width: `${labelSize}px`,
          backgroundColor,
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GiHamburgerMenu
          size={`${labelSize / 2.2}px`}
          style={{ color: "#ffffff66" }}
        />
      </div>
      <SelectorSlider />
      <SelectorSliderColor label="Contrast:" />
      <SelectorSliderColor label="Cursor:" />
    </div>
  );
};

export default Manager;
