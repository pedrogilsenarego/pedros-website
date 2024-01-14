import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import SelectorSliderColor from "../../components/SelectorSliderColor";
import SelectorSlider from "../../components/SelectorSliderText";
import { Colors } from "../../constants/pallete";
import useColorGenerator from "../../hooks/useColorGenerator";
import { setContrast } from "../../slicer/general/general.actions";

const Manager = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { contrastColor } = useColorGenerator();
  const backgroundColor = contrastColor.main;
  const labelSize = 50;
  const dispatch = useDispatch();

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
        transition:
          "background-color 1.5s ease-in-out,opacity 1.5s ease-in-out, right 0.5s ease-in-out",
        top: "50%",
        transform: "translateY(-50%)",
        opacity: openModal ? 1 : 0.2,
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
          top: `calc(420px - ${labelSize / 2}px)`,
          height: `${labelSize}px`,
          width: `${labelSize}px`,
          transition: "background-color 1.5s ease-in-out",
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
          style={{
            color: contrastColor.text,
            transition: "all 1.5s ease-in-out",
          }}
        />
      </div>
      <SelectorSlider />
      <SelectorSliderColor
        label="Contrast:"
        options={[
          {
            color: "lightGrey",
            action: () => {
              dispatch(setContrast("grey"));
            },
          },
          {
            color: Colors.TEALC,
            action: () => {
              dispatch(setContrast("tealc"));
            },
          },
          {
            color: Colors.FUCHSIA,
            action: () => {
              dispatch(setContrast("fuchsia"));
            },
          },
        ]}
      />
      <SelectorSliderColor
        label="Cursor:"
        options={[{ color: Colors.TEALC }]}
      />
    </div>
  );
};

export default Manager;
