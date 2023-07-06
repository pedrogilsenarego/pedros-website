import Screen from "../../components/Screen";
import Contact from "./Contact";
import Skills from "./Skills";
const Home = () => {
  return (
    <>
      <div
        style={{
          paddingRight: "10vw",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          backgroundColor: "black",
        }}
      >
        <Screen />
      </div>
      <Skills />
      <div
        style={{
          paddingRight: "10vw",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          backgroundColor: "black",
        }}
      >
        <Contact />
      </div>
    </>
  );
};

export default Home;
