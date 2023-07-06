import Screen from "../../components/Screen";
import SideBar from "../../presentional/SideBar";
import Contact from "./Contact";
import Skills from "./Skills";
import Work from "./Work";
const Home = () => {
  return (
    <>
      <SideBar />
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
      <Work />
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
