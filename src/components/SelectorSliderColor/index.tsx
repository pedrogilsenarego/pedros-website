import { useState } from "react";
import { Colors } from "../../constants/pallete";

const SelectorSliderColor = () => {
  const [mode, setMode] = useState<"dark" | "light" | "hipster">("dark");
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        columnGap: "30px",
        marginTop: "20px",
      }}
    >
      <p style={{ color: "#ffffff66" }}>Cursor</p>
      <div
        style={{
          borderRadius: "14px",
          backgroundColor: "#ffffff",
          padding: "10px",
          display: "flex",
          columnGap: "10px",
          border: "solid 2px #ffffff66",
          position: "relative",
          //boxShadow: "0px 0px 3px 1px #000000 inset",
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
      </div>
    </div>
  );
};

export default SelectorSliderColor;
