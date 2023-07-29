import Screen from "../../../components/Screen";

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
          boxShadow: "2px 2px 15px black",
          flex: 1,
          width: "500px",
          height: "500px",
          borderRadius: "6px",
        }}
      ></div>
    </div>
  );
};

export default Initial;
