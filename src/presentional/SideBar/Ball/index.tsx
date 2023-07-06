import { useState } from "react";
import { useDispatch } from "react-redux";
import { Colors } from "../../../constants/pallete";
import { scrollTo } from "../../../slicer/general/general.actions";

interface Props {
  pos: number;
  scrollPos: number;
}

const Ball = ({ pos, scrollPos }: Props) => {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  const handleClick = (pos: number) => {
    dispatch(scrollTo(pos));
  };
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => handleClick(pos)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        key={pos}
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
            border:
              scrollPos !== pos ? `solid 3px  #ffffff66` : `solid 3px white`,
            width: hover && scrollPos !== pos ? "20px" : "2px",
            height: hover && scrollPos !== pos ? "20px" : "2px",
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
