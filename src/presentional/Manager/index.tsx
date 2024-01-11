import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
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
          position: "absolute",
          left: `-${labelSize}px`,
          top: `calc(250px - ${labelSize / 2}px)`,
          height: `${labelSize}px`,
          width: `${labelSize}px`,
          backgroundColor,
          borderTopLeftRadius: `${labelSize / 2}px`,
          borderBottomLeftRadius: `${labelSize / 2}px`,
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
      <div style={{ display: "flex", alignItems: "center", columnGap: "30px" }}>
        <p style={{ color: "#ffffff66" }}>Mode</p>
        <div
          style={{
            borderRadius: "20px",
            backgroundColor: "#ffffff",
            padding: "10px",
            display: "flex",
            columnGap: "10px",
            border: "solid 2px #ffffff66",
            position: "relative",
            boxShadow: "2px 2px 2px 2px #00000066 inset",
          }}
        >
          <div
            onClick={() => setMode("dark")}
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: Colors.BLACKISH,
              borderRadius: "50%",
            }}
          ></div>
          <div
            onClick={() => setMode("light")}
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: Colors.PRETTY_CREAM,
              borderRadius: "50%",
            }}
          ></div>
          <div
            onClick={() => setMode("hipster")}
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: Colors.SOFT_PINK,
              borderRadius: "50%",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              border: "solid 2px #00000066",
              top: "50%",
              transform: "translateY(-50%)",
              left: mode === "dark" ? 5 : mode === "light" ? 45 : 85,
              transition: "all ease-in-out 0.5s",
              borderRadius: "50%",
              height: "40px",
              aspectRatio: 1,
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              backgroundColor: "#00000066",
              left: mode === "dark" ? 23 : mode === "light" ? 63 : 103,
              top: "50%",
              transition: "all ease-in-out 0.5s",
              transform: "translateY(-50%)",

              height: "50px",
              width: "2px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Manager;
