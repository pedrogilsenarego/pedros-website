import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "../../../constants/pallete";
import { scrollTo } from "../../../slicer/general/general.actions";
import { State } from "../../../slicer/types";

interface Props {
  pos: number;
  value: string;
}

const Ball = ({ pos, value }: Props) => {
  const scrollToL = useSelector<State, string>(
    (state) => state.general.scrollTo
  );
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(scrollTo(value));
  };

  return (
    <div
      style={{ cursor: "pointer", position: "relative" }}
      onClick={() => handleClick()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        key={pos}
        style={{
          position: "relative",
          width: "25px",
          height: "25px",

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
              scrollToL !== value ? `solid 3px  #ffffff66` : `solid 3px white`,
            width: hover && scrollToL !== value ? "20px" : "2px",
            height: hover && scrollToL !== value ? "20px" : "2px",
            borderRadius: "50%",

            backgroundColor: "transparent",
            transition: "all 0.3s ease-in-out",
          }}
        />
        <p
          style={{
            opacity: (scrollToL === value && !hover) || hover ? 1 : 0,
            display: "inline-flex",
            color: scrollToL !== value ? Colors.WHITE_SMUDGE : Colors.WHITE,
            position: "absolute",
            fontSize: "10px",
            letterSpacing: "2px",
            //fontFamily: "Teermina",
            textTransform: "uppercase",

            left: 32,
            transition: hover ? "all 0.6s ease-in-out" : "all 0.3s ease-in-out",
          }}
        >
          {value}
        </p>
      </div>
    </div>
  );
};

export default Ball;
