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
        columnGap: "5vw",
      }}
    >
      <Screen />
      <div
        style={{
          boxShadow: "2px 2px 10px black",
          border: `solid 2px ${Colors.WHITE_ULTRA_TRANSPARENT}`,
          flex: 1,
          width: "500px",
          height: "580px",
          borderRadius: "6px",
        }}
      ></div>
    </div>
  );
};

export default Initial;
