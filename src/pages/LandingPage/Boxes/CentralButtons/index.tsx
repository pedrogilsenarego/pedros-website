

import { Colors } from "../../../../constants/pallete";
import Ball from "./Ball";
interface Props {
  setX: (x: number) => void;
  x: number
}
const CentralButtons = ({ setX, x }: Props) => {



  const goLeft = () => {
    if (x === 0) return
    setX(x + 100);
  };
  const goRight = () => {
    if (x === -200) return
    setX(x - 100);
  };

  return (
    <div
      style={{

        position: "absolute",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2000,
      }}
    >
      <div
        style={{
          marginTop: "-2%",
          display: "flex",
          width: "20%",
          justifyContent: "space-between",
        }}
      >
        <Ball onClick={goLeft} />
        <Ball onClick={goRight} />
      </div>

    </div>
  );
};

export default CentralButtons;
