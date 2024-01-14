import { Typography } from "@mui/material";
import { useLayoutEffect, useRef, useState } from "react";
import { Colors } from "../../constants/pallete";
import useColorGenerator from "../../hooks/useColorGenerator";

const SelectorSliderText = () => {
  const [mode, setMode] = useState<"dark" | "light" | "hipster">("dark");
  const { contrastColor } = useColorGenerator();
  const handleModeChange = (newMode: "dark" | "light" | "hipster") => {
    setMode(newMode);
  };

  const darkTypographyRef = useRef<HTMLParagraphElement | null>(null);
  const lightTypographyRef = useRef<HTMLParagraphElement | null>(null);
  const hipsterTypographyRef = useRef<HTMLParagraphElement | null>(null);
  useLayoutEffect(() => {
    const measureTypographyWidth = (
      ref: React.RefObject<HTMLParagraphElement>
    ) => {};

    measureTypographyWidth(darkTypographyRef);
    measureTypographyWidth(lightTypographyRef);
    measureTypographyWidth(hipsterTypographyRef);
  }, [mode]);

  const getDivStyles = () => {
    const currentRef = (() => {
      switch (mode) {
        case "dark":
          return darkTypographyRef;
        case "light":
          return lightTypographyRef;
        case "hipster":
          return hipsterTypographyRef;
        default:
          return darkTypographyRef; // Default to dark if mode is undefined
      }
    })();

    const padding = 14;

    const leftPosition = (currentRef.current?.offsetLeft ?? 0) - padding / 2;

    return {
      position: "absolute",
      backgroundColor: Colors.BLACKISH,
      top: "50%",

      transform: "translateY(-50%)",
      left: leftPosition,
      transition: "all ease-in-out 0.5s",
      borderRadius: "12px",
      height: "40px",
      width: (currentRef.current?.clientWidth ?? 60) + padding,
    } as React.CSSProperties;
  };
  return (
    <div style={{ display: "flex", alignItems: "center", columnGap: "30px" }}>
      <p
        style={{
          color: contrastColor.text,
          transition: "all ease-in-out 1.5s",
          width: "100px",
        }}
      >
        Mode:
      </p>
      <div
        style={{
          borderRadius: "14px",
          backgroundColor: "#ffffff",
          padding: "14px 12px",
          display: "flex",
          justifyContent: "space-between",
          columnGap: "30px",

          position: "relative",
        }}
      >
        <div style={getDivStyles()}></div>
        <Typography
          ref={darkTypographyRef}
          style={{
            zIndex: 10,
            textAlign: "center",
            fontWeight: "bold",
            color: "lightGrey",
          }}
          onClick={() => handleModeChange("dark")}
        >
          Dark
        </Typography>
        <Typography
          ref={lightTypographyRef}
          style={{
            zIndex: 10,
            textAlign: "center",
            fontWeight: "bold",
            color: "lightGrey",
          }}
          onClick={() => handleModeChange("light")}
        >
          Light
        </Typography>
        <Typography
          ref={hipsterTypographyRef}
          style={{
            zIndex: 10,
            textAlign: "center",
            fontWeight: "bold",
            color: "lightGrey",
          }}
          onClick={() => handleModeChange("hipster")}
        >
          Hype
        </Typography>
      </div>
    </div>
  );
};

export default SelectorSliderText;
