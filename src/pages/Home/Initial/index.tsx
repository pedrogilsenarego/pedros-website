import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Screen from "../../../components/Screen";
import { Colors } from "../../../constants/pallete";
import { State } from "../../../slicer/types";

const Initial = () => {
  const homeRef = useRef<HTMLDivElement>(null);

  const scrollToL = useSelector<State, string>(
    (state) => state.general.scrollTo
  );
  const handleScrollToContacts = () => {
    if (null !== homeRef.current) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (scrollToL === "Home") {
      handleScrollToContacts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollToL]);
  return (
    <div
      ref={homeRef}
      style={{
        padding: "10vh 10vw",
        display: "flex",

        alignItems: "center",
        minHeight: "100vh",
        width: "100vw",
        columnGap: "2vw",
      }}
    >
      <div
        style={{
          boxShadow: "2px 2px 10px black",
          border: `solid 2px ${Colors.WHITE_ULTRA_TRANSPARENT}`,
          background: `linear-gradient(15deg, ${Colors.BLACKISH_TRANSPARENT} 0%, ${Colors.WHITE_TRANSPARENT} 100%)`,

          display: "flex",
          borderRadius: "6px",
          padding: "30px",
          columnGap: "20px",
        }}
      >
        <Screen />
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <p
          style={{
            color: "white",
            maxWidth: "60%",
            textAlign: "center",
            fontFamily: "Termina",
            fontSize: "45px",
          }}
        >
          Your passion is something you make your own, finding the best
          solutions to the everyday problems
        </p>
      </div>
    </div>
  );
};

export default Initial;
