import { Box } from "@mui/material";
import { useState } from "react";
import { Colors } from "../../../../../constants/pallete";



interface Props {
  onClick: any

}

const Ball = ({ onClick }: Props) => {
  const [hover, setHover] = useState(false);


  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div

        style={{
          position: "relative",
          width: "25px",
          height: "25px",
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "border-color 0.3s ease-in-out",
        }}
      >
        <div
          style={{
            position: "absolute",
            border: `solid 5px ${Colors.BLACKISH}`,
            width: hover ? "20px" : "5px",
            height: hover ? "20px" : "5px",
            borderRadius: "50%",
            backgroundColor: "transparent",
            transition: "all 0.3s ease-in-out",
          }}
        />
      </div>
    </div>
  );
};

export default Ball;
