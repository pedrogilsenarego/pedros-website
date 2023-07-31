import { useState } from "react";
import { Colors } from "../../../../../constants/pallete";

interface Props {
  isActive: boolean;
}

const BottomButton = ({ isActive }: Props) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div
      style={{
        width: "15px",
        height: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          height: isActive ? "15px" : "10px",
          width: isActive ? "15px" : "10px",
          borderRadius: "50%",

          transition: "all 0.35s ease-in",
          backgroundColor:
            hover || isActive ? Colors.WHITE_SMUDGE : Colors.WHITE_TRANSPARENT,
        }}
      />
    </div>
  );
};

export default BottomButton;
