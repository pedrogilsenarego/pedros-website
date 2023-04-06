import { useState } from "react";
import Ball from "./Ball";
import { useMediaQuery, useTheme } from "@mui/material";
interface Props {
  setX: (x: number) => void;
  x: number
}
const CentralButtons = ({ setX, x }: Props) => {

  const Theme = useTheme()
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"))


  const goLeft = () => {
    if (x === 0) return
    setX(x + 100);
  };
  const goRight = () => {
    if (x === -200) return
    setX(x - 100);
  };

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: any) => {

    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {

    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;

    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe || isRightSwipe) {
      if (isLeftSwipe) {
        goRight();
      }
      if (isRightSwipe) {
        goLeft();

      }
    }
  };

  return (
    <div

      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
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
      {!mobile && (<div
        style={{
          marginTop: "-2%",
          display: "flex",
          width: "20%",
          justifyContent: "space-between",
        }}
      >
        <Ball onClick={goLeft} />
        <Ball onClick={goRight} />
      </div>)}


    </div>
  );
};

export default CentralButtons;
