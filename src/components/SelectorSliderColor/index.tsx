import { useState } from "react";
import { Colors } from "../../constants/pallete";
import useColorGenerator from "../../hooks/useColorGenerator";

type Props = {
  label: string;
  initialState: number;
  options: {
    color: string;
    action?: () => void;
  }[];
};

const SelectorSliderColor = ({ label, options, initialState }: Props) => {
  const [mode, setMode] = useState<number>(initialState || 0);
  const { contrastColor } = useColorGenerator();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        columnGap: "30px",
        marginTop: "20px",
      }}
    >
      <p
        style={{
          color: contrastColor.text,
          transition: "all ease-in-out 1.5s",
          width: "100px",
        }}
      >
        {label}
      </p>
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
        {options.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setMode(index);
                if (item.action) {
                  item.action();
                }
              }}
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: item.color,
                borderRadius: "50%",
              }}
            />
          );
        })}

        <div
          style={{
            position: "absolute",
            border: "solid 2px #00000066",
            top: "50%",
            transform: "translateY(-50%)",
            left: 5 + mode * 40,
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
