import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import SelectorSliderColor from "../../components/SelectorSliderColor";
import SelectorSlider from "../../components/SelectorSliderText";
import { Colors } from "../../constants/pallete";
import useColorGenerator from "../../hooks/useColorGenerator";
import { setContrast } from "../../slicer/general/general.actions";
import { Contrast } from "../../slicer/general/general.types";
import { State } from "../../slicer/types";

const Manager = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { contrastColor } = useColorGenerator();
  const backgroundColor = contrastColor.main;
  const modalRef = useRef<HTMLDivElement>(null);
  const modal2Ref = useRef<HTMLDivElement>(null);
  const burgerMenuRef = useRef<HTMLDivElement>(null); // Add a ref for the burger menu

  const constrast = useSelector<State, Contrast>(
    (state) => state.general.contrast
  );
  const contrastArray: Contrast[] = ["grey", "tealc", "fuchsia"];
  const index = contrastArray.indexOf(constrast);
  const labelSize = 50;
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        burgerMenuRef.current &&
        !burgerMenuRef.current.contains(event.target)
      ) {
        setOpenModal(false);
      }
    };

    // Attach the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, burgerMenuRef]);

  const handleBurgerMenuClick = () => {
    if (modalRef.current) {
      setOpenModal(!openModal);
    }
  };

  return (
    <>
      <div
        ref={modalRef}
        style={{
          position: "absolute",
          border: "solid 2px #ffffff05",
          borderRadius: "20px",
          backgroundColor,
          right: openModal ? 20 : -500,
          transition:
            "background-color 1.5s ease-in-out, right 0.4s ease-in-out",
          top: "50%",
          transform: "translateY(-50%)",

          zIndex: 1000,

          padding: "20px",
        }}
      >
        <SelectorSlider />
        <SelectorSliderColor
          initialState={index}
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
          initialState={0}
          label="Cursor:"
          options={[{ color: Colors.TEALC }]}
        />
      </div>
      <div
        ref={modal2Ref}
        style={{
          position: "absolute",
          border: "solid 2px #ffffff05",
          borderRadius: "20px",
          backgroundColor,
          right: openModal ? 20 : -500,
          transition:
            "background-color 1.5s ease-in-out, right 0.4s ease-in-out",
          top: `calc(50% + ${
            (modalRef.current?.offsetHeight || 0) / 2 + 60
          }px)`,

          transform: "translateY(-50%)",

          zIndex: 1000,

          padding: "20px",
        }}
      >
        <SelectorSlider />
      </div>
      <div
        ref={burgerMenuRef}
        onClick={handleBurgerMenuClick}
        style={{
          border: "solid 2px #ffffff05",

          position: "fixed",
          right: 30,
          bottom: 30,
          zIndex: 1000,
          height: `${labelSize}px`,
          width: `${labelSize}px`,
          transition: "background-color 1.5s ease-in-out",
          backgroundColor,
          borderRadius: "10px",

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
    </>
  );
};

export default Manager;
