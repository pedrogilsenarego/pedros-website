import Screen from "../../../components/Screen";
import { Colors } from "../../../constants/pallete";

const Initial = () => {
  return (
    <div
      style={{
        padding: "10vh 10vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        width: "100vw",
        columnGap: "2vw",
      }}
    >
      <Screen />
      <div
        style={{
          boxShadow: "2px 2px 10px black",
          border: `solid 2px ${Colors.WHITE_ULTRA_TRANSPARENT}`,
          background: `linear-gradient(15deg, ${Colors.BLACKISH_TRANSPARENT} 0%, ${Colors.WHITE_TRANSPARENT} 100%)`,
          flex: 1,
          width: "500px",
          height: "650px",
          borderRadius: "6px",
        }}
      ></div>
    </div>
  );
};

export default Initial;
