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
        justifyContent: "space-between",
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
          flex: 1,

          display: "flex",
          borderRadius: "6px",
          padding: "30px",
          columnGap: "20px",
        }}
      >
        <Screen />
        <div>
          <p style={{ color: "white" }}>
            Your passion is something you make your own
          </p>
          <p style={{ color: "white" }}>
            Design - Digital Comerce - Web Apps - Mobile - Data Flow
          </p>
        </div>
      </div>
    </div>
  );
};

export default Initial;
